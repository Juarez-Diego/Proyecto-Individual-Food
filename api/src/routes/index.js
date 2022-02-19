const { Router } = require('express');
const server = require('../app');
const axios = require("axios");
require('dotenv').config();
const {API_KEY} = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Recipe, Diet } = require("../db");
const db = require('../db');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// Funcion que me trae los primeros 100 resultados de la API. Mapear para devolver solo los datos que me pide
const apiRecipes = async function(){
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`);
    const apiData = await apiUrl.data.results.map(info =>  {
        return {
            name_of_dish: info.title,
            score: info.spoonacularScore,
            summary: info.summary,
            apiId: info.id,
            Health_Level: info.healthScore,
            steps: info.analyzedInstructions[0]?.steps?.map((info) => info.step), 
            // steps: jose.analyzedInstructions[0].steps.map(jose => jose.step),
            image: info.image,
            diets: info.diets?.map(dieta => dieta)  
        };
    });
    // console.log(apiData)
    return apiData;
};

// console.log(apiRecipes())

// Funcion que me trae los resultados de la Base de Datos, cuyo nombre coincide con el query.
const dbRecipes = async function(){
    return await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
}

// Funcion que me va a juntar los resultados de la API y la Base de Datos
const allRecipes = async function(){
    const api = await apiRecipes();
    const db = await dbRecipes()
    const all = api.concat(db)
    return all;
}



router.get("/recipes", async (req, res) => {

    const {name} = req.query;
    let finalFunction = await allRecipes()

    if(!name) {
        res.send(finalFunction)
    }
    else {
        let recipeName = await finalFunction.filter(e => e.name_of_dish.toLowerCase().includes(name.toLowerCase()))
        if(recipeName.length > 0) {
            console.log("Ya viste que si se puede Rey?")
            return res.send(recipeName)
        }
        else{
            return res.status(404).send("Perdon Rey no hay nada, pero tu tranqui, intentalo de nuevo")
        }
    }

});

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////



router.get("/recipes/:idReceta", async (req, res) => {

    const {idReceta} = req.params
    let finalFunction = await allRecipes()

    if(idReceta) {
        const receta = await finalFunction.filter(lpm => lpm.id || lpm.apiId == idReceta)
        if(receta.length > 0) {
            res.status(200).json(receta)
        }
        else{
            res.status(404).send("Perdon Rey no hay nada, pero tu tranqui, intentalo de nuevo")
        }
    }
    else{
        res.status(200).send(finalFunction)
    }

});

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// Aqui me traigo las dietas y las guardo en un array primero

const dietasFind = async function() {

    const unaAntes = await apiRecipes()
    const putamierda = await unaAntes.map(e => e.diets)

    const finalArray = putamierda.flat();
    return finalArray;
}



router.get("/types", async (req, res) => {

    const shit = await dietasFind();

     shit.forEach(e => {
        Diet.findOrCreate({
            where: {
              name: e,
            },
          });
    })

    const types = await Diet.findAll();
    res.send(types);

});

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////




router.post("/recipe", async (req, res) => {

    const {name_of_dish, score, summary, Health_Level, steps, image} = req.body

    if (!name_of_dish) return res.status(400).send({error: 'Che, te falta un nombre!'})
    if (!summary) return res.status(400).send({error: 'Che, te falta un summary!'})

    const recipe = await Recipe.create({
        name_of_dish,
        score,
        summary,
        Health_Level,
        steps,
        image
    });

    await Recipe.setDiets(Diet);
    return res.status(200).send("Receta agregada con exito!")

});


module.exports = router;
