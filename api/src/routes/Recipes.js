
const { Router } = require('express');
const server = require('../app');
const Recipes = require('./routes/index.js');
const { Recipe, Diet } = require('../db');
const axios = require("axios");
require('dotenv').config();
const {API_KEY} = process.env;
  
const router = Router();


// Funcion que me trae los primeros 100 resultados de la API. Mapear para devolver solo los datos que me pide
const apiInfo = async function(){
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=5&addRecipeInformation=true`);
    const apiData = await apiUrl.data.results.map(jose =>  {
        return {
            name_of_dish: jose.title,
            score: jose.spoonacularScore,
            summary: jose.summary,
            Health_Level: jose.healthScore,
            steps: jose.analyzedInstructions[0],
            image: jose.image   
        };
    });
    console.log(apiData)
    return apiData;
};



// Funcion que me trae los resultados de la Base de Datos, cuyo nombre coincide con el query.
const dbInfo = async function(){
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



// router.get("/recipes", (req, res) => {
    
//     res.json(apiInfo())

// });




router.get("/recipes/:idReceta", async (req, res) => {

 
    // if(!idReceta) {
    //     console.log(finalFunction)
    //     res.status(200).send(finalFunction)
    // }
    // else{
    //     if (idReceta.includes('-')) {
    //         const receta = await Recipe.findByPk(idReceta, { include: Diet })
    //         return res.status(200).send(receta);
    //     }
        
    //      for(var i = 0; i < finalFunction.length; i++){
    //         if(finalFunction[i].apiId == idReceta){
    //             const found = finalFunction[i]
    //             res.status(200).send(found) 
    //         }
    //     }
    // }
    // res.status(404).send("Perdon Rey no hay nada, pero tu tranqui, intentalo de nuevo")
    
});






module.exports = apiInfo;                                                                                                                                                                                            