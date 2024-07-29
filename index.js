const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Importing API modules for Marvel and Giant Bomb
const marvel = require("./modules/marvel/api");
const giantbomb = require("./modules/giantbomb/api");

const app = express();
const port = process.env.PORT || 8888; // Set the port to the value from the environment variables or default to 8888

// Set the directory for views and the view engine to use
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Define the route for the homepage
app.get("/", (req, res) => {
  res.render("index", { title: "Video Games and Comics Info" }); // Render the "index" view with a title
});

// Define the route for the Marvel page
app.get("/marvel", async (req, res) => {
  // Fetch data from the Marvel API
  const comics = await marvel.getComics();
  const characters = await marvel.getCharacters();
  const series = await marvel.getSeries();
  const events = await marvel.getEvents();

  // Render the "marvel" view with the fetched data
  res.render("marvel", { title: "Marvel Universe", comics, characters, series, events });
});

// Define the route for the Video Games page
app.get("/games", async (req, res) => {
  // Fetch data from the Giant Bomb API
  const games = await giantbomb.getGames();
  const platforms = await giantbomb.getPlatforms();
  const franchises = await giantbomb.getFranchises();
  const reviews = await giantbomb.getReviews();

  // Render the "games" view with the fetched data
  res.render("games", { title: "Video Games", games, platforms, franchises, reviews });
});

// Define the route for the About Us page
app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" }); // Render the "about" view with a title
});

// Define the route for the Contact Us page
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" }); // Render the "contact" view with a title
});

// Handle POST request for contact form submission
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  // Redirect to the homepage after form submission
  res.redirect("/");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); // Log a message indicating that the server is running
});
