const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const body_parser = require("body-parser");

app.use(cors());
app.use(express.static("build"));
app.use(
  body_parser.urlencoded({
    extended: false
  })
);

app.get("/api/get-class-info", function(req, res, next) {
  let id = req.query.data;
  let url = "http://dnd5eapi.co/api/classes/" + id;
  console.log(url);
  axios
    .get(url)
    .then(function(response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(next);
});

app.get("/api/get-race-info", function(req, res, next) {
  let id = req.query.data;
  let url = "http://dnd5eapi.co/api/races/" + id;
  console.log(url);
  axios
    .get(url)
    .then(function(response) {
      console.log(response.data);
      res.json(response.data);
    })
    
    .catch(next);
});

// app.get("*", (req, res) => {
//   res.sendFile(__dirname, +"/build/index.html");
// });

const port = process.env.PORT || 9080;
app.listen(port);
console.log(`listening on ${port}`);
