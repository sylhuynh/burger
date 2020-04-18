const router = require("express").Router();
const burgers = require("../models/burgers")

router.get("/", (req, res) => {
    burgers.all((burgers) => {
        const templateData = { burgers: burgers };

        res.render("index", templateData);
    });
});

module.exports = router;