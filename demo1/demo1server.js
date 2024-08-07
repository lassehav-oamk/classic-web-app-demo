const express = require("express");
const entries = require("../initialDiaryEntryData.json");

const app = express();
// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", "./demo1/views");

// static files in public folder
app.use(express.static("demo1/public"));
app.use(express.urlencoded({ extended: true }));

// Render home page with diary entries with EJS template engine
app.get("/", (req, res) => {
  res.render("index", {
    entries,
  });
});

// respond to POST request to add a new diary entry
app.post("/diary", (req, res) => {
  const newEntry = {
    date: req.body.date,
    content: req.body.content,
  };
  // add new entry to entries array
  entries.push(newEntry);
  // redirect to home page
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
