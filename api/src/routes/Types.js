const { Router } = require('express');
const { Recipe, Diet } = require('../db');

const router = Router();

router.get("/types", async (req, res) => {

    const types = await Diet.findAll();
    return res.json(types);

});

module.exports = router;