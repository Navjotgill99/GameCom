const crypto = require("crypto");

const baseUrl = "https://gateway.marvel.com/v1/public";
const publicKey = process.env.MARVEL_API_PUBLIC_KEY;
const privateKey = process.env.MARVEL_API_PRIVATE_KEY;

function generateAuthParams() {
  const ts = new Date().getTime();
  const hash = crypto.createHash('md5').update(ts + privateKey + publicKey).digest('hex');
  return `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
}

async function getComics() {
  const url = `${baseUrl}/comics?${generateAuthParams()}&limit=20`;
  const response = await fetch(url);
  const data = await response.json();
  return data.data.results;
}

async function getCharacters() {
    const url = `${baseUrl}/characters?${generateAuthParams()}&limit=20`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.results;
  }
  
  async function getSeries() {
    const url = `${baseUrl}/series?${generateAuthParams()}&limit=20`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.results;
  }
  
  async function getEvents() {
    const url = `${baseUrl}/events?${generateAuthParams()}&limit=20`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.results;
  }

module.exports = {
  getComics,
  getCharacters,
  getSeries,
  getEvents
};