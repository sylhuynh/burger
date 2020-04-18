const router = require("express").Router();
const burgers = require("../models/burgers")

router.get("/", (req, res) => {
    burgers.all((burgers) => {
        const templateData = { burgers: burgers };

        res.render("index", templateData);
    });
});

router.post("/api/burgers", (req,res)=>{
     const newBurgerData = req.body.burger_name;
    
    burgers.create(newBurgerData, ()=>{
        const SEE_OTHER = 303;
        res.redirect(SEE_OTHER, "/"); 
    })
});

module.exports = router;