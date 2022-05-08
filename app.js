const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();
// post request item
const items = ["CookFood", "EatFood", "BuyFood"];
const workitems =[];
app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// for home route "/"
app.get("/", function(req, res) {
  //module.exports
const day = date.getDate();

  res.render("list.ejs", {
    ListOfTitle: day,
    newListItems: items
  });
});

// for work route "/work"
app.get("/work", function(req, res){
  res.render("list.ejs", {
    ListOfTitle: "WorkList",
    newListItems:workitems
  });
});


app.post("/", function(req, res) {
  const item = req.body.newItem; 
  if(req.body.list === "WorkList"){
    // in if statement "work" is act as value of /work page
    workitems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }

});


app.listen( process.env.PORT || 4000, function() {
  console.log("You have connected to the server 4000.")
})
