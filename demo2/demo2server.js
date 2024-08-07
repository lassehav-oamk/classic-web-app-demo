const express = require("express");
const entries = require("../initialDiaryEntryData.json");

const app = express();

// static files in public folder
app.use(express.static("demo2/public"));

// accept the form data for new diary entry
app.use(express.json());

// route for form data submission
app.post("/diaryentries", (req, res) => {
  const newEntry = {
    date: req.body.date,
    content: req.body.content,
  };
  // add new entry to entries array
  entries.push(newEntry);
  // redirect to home page
  res.send("New entry added to diary");
});

app.get("/diaryentries", (req, res) => {
  res.json(entries);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
