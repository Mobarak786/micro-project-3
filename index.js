const data = require("./foodList.json");

//list all the food items

const allFoodItems = function (data) {
  return data;
};
// list all the food items with category vegetables

const vegetables = function (data) {
  return data.filter((item) => item.category === "Vegetable");
};

// list all the food items with category fruit

const fruits = function (data) {
  return data.filter((item) => item.category === "Fruit");
};

// list all the food items with category protein

const protein = function (data) {
  return data.filter((item) => item.category === "Protein");
};

// list all the food items with category nuts

const nuts = function (data) {
  return data.filter((item) => item.category === "Nuts");
};
// list all the food items with category grains

const grains = function (data) {
  return data.filter((item) => item.category === "Grain");
};
// list all the food items with category dairy

const dairy = function (data) {
  return data.filter((item) => item.category === "Dairy");
};
// list all the food items with calorie above 100

const calorieAbove100 = function (data) {
  return data.filter((item) => item.calorie > 100);
};
// list all the food items with calorie below 100

const calorieBelow100 = function (data) {
  return data.filter((item) => item.calorie < 100);
};
// list all the food items with highest protien content to lowest

const proteinHighToLow = function (data) {
  return data.sort((a, b) => b.protiens - a.protiens);
};
// list all the food items with lowest cab content to highest

const cabLowToHigh = function (data) {
  return data.sort((a, b) => a.cab - b.cab);
};

// change the function name to check every fuction in the console.
console.log(proteinHighToLow(data));
