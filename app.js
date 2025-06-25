const express = require("express");
const path = require("path");
const characters = require("./data/starwarsCharacters");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const { gender, affiliation, search } = req.query;
  let filteredCharacters = characters;

  if (gender && gender !== "all") {
    filteredCharacters = filteredCharacters.filter(
      (char) => char.gender === gender
    );
  }

  if (affiliation && affiliation !== "all") {
    filteredCharacters = filteredCharacters.filter(
      (char) => char.affiliation === affiliation
    );
  }

  if (search) {
    filteredCharacters = filteredCharacters.filter((char) =>
      char.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const uniqueGenders = [...new Set(characters.map((char) => char.gender))];
  const uniqueAffiliations = [
    ...new Set(characters.map((char) => char.affiliation)),
  ];

  // Check if the request is from HTMX
  if (req.headers["hx-request"]) {
    res.render("partials/table", { characters: filteredCharacters });
  } else {
    res.render("index", {
      characters: filteredCharacters,
      filters: { gender, affiliation, search },
      uniqueGenders,
      uniqueAffiliations,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
