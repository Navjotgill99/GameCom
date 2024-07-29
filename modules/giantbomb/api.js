const baseUrl = "https://www.giantbomb.com/api";
const apiKey = process.env.GIANT_BOMB_API_KEY;

async function getGames() {
  const url = `${baseUrl}/games/?api_key=${apiKey}&format=json&limit=20`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

async function getPlatforms() {
  const url = `${baseUrl}/platforms/?api_key=${apiKey}&format=json&limit=20`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

async function getFranchises() {
  const url = `${baseUrl}/franchises/?api_key=${apiKey}&format=json&limit=20`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

async function getReviews() {
  const url = `${baseUrl}/reviews/?api_key=${apiKey}&format=json&limit=20`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

module.exports = {
  getGames,
  getPlatforms,
  getFranchises,
  getReviews
};