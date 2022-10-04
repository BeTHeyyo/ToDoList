const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = [];
var workItems = [];

app.get("/", (req, res) => {
    var dateOptions = {
        day: "2-digit",
        weekday: "long",
        month: "long"
    }
    var today = new Date();
    var day = today.toLocaleDateString("en-US",dateOptions);

    res.render("list", {title: day, todoItems: items});

});

app.post("/",(req,res) =>{
    var item = req.body.todoItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Listening on 3000");
}
);