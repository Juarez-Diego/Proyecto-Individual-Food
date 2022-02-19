const { Router } = require('express');
const { Recipe, Diet } = require('../db');

const router = Router();

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