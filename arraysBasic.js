let favoriteFoods= ["banana", "bacon", "chicken"];

console.log(favoriteFoods[1]);

favoriteFoods[2] = "steak";

let formerFavoriteFoods = [favoriteFoods.shift()];

favoriteFoods.push("Mango");

favoriteFoods.unshift("Apple");

let numbers = [2,3,4,5];

numbers.splice(1,1);

let radiation = ["alpha", "gamma", "delta"];

radiation.splice(1,0,"beta");

let biggerNumbers = [10, -10, -5, -3, 2, 1];

biggerNumbers.splice(1,3,9,8,7,6,5,4,3);