const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const homeControllerRoutes = require("./controllers/homeController")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(homeControllerRoutes)

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});
