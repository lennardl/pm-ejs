const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  const friends = [
    { name: "Ian", department: "Engineer", interest: "Dota" },
    { name: "Paul", department: "Product Manager", interest: "Teaching" },
    { name: "Paul", department: "Product Manager", interest: "Teaching" },
  ];
  const tagline = "These are my top 2 + 1 friends in OGP! ";

  res.render("pages/index", {
    friends: friends,
    tagline: tagline,
  });
});

// work page
app.get("/work", function (req, res) {

  const products = [
    { name: "IRMS", vertical: "HealthTech"},
    { name: "Care360", vertical: "HealthTech"},
  ];

  res.render("pages/work", {
    products: products,
  });
});

// about page
app.get("/interest", function (req, res) {
  res.render("pages/interest");
});

app.listen(3000);
console.log("Server is listening on port 3000");