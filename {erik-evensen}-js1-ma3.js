// Question 1

const total = (a, b) => a - b;

// Question 2

const mainUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(mainUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    const gameNames = json.results;

    for (let i = 0; i < gameNames.length; i++) console.log(gameNames[i].name);
    console.dir(json);
  })
  .catch(function (error) {
    window.location.href = "error.html";
    console.dir(error);
  });

// Question 3

var string = "These cats are outrageous.";
var string = string.replace(/cats/, "giraffes");

// Question 4

let params = window.location.search;
let urlSearch = new URLSearchParams(params);
let userId = urlSearch.get("userId");
if (userId < 10) {
  //window.location.href = "/first.html";
} else if (userId > 10) {
  //window.location.href = "/second.html";
} else {
  //window.location.href = "/third.html";
}
// Question 5

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
container.removeChild(btn);

// Question 6

const animals = document.querySelector(".animals");
const cows = document.querySelector(".cows");

const list = document.createElement("li");
list.className = "parrots";
const text = document.createTextNode("Parrots");
list.appendChild(text);

animals.appendChild(list);
cows.after(list);

// Question 7

const gamesUrl = "https://api.rawg.io/api/games/3801";
const ratingContainer = document.querySelector(".rating");

fetch(gamesUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    const gameRating = json.rating;
    ratingContainer.innerText = gameRating;
  })
  .catch(function (error) {
    console.dir(error);
  });
