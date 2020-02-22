var SIZE_SMALL = {
  price: 50,
  calories: 20
};

var SIZE_BIG = {
  price: 100,
  calories: 40
};

var FILLING_CHEESE = {
  price: 10,
  calories: 20
};

var FILLING_LARD = {
  price: 20,
  calories: 5
};

var FILLING_POTATO = {
  price: 15,
  calories: 10
};

var ADDICTIVES_FLAVOR = {
  price: 15,
  calories: 0
};

var ADDICTIVES_MAYONNAiSE = {
  price: 20,
  calories: 5
};

function HamburgerMethods() {}

HamburgerMethods.prototype.addAdditives = function(filling) {
  this._prices.push(filling.price);
  this._calories.push(filling.calories);
};

HamburgerMethods.prototype.addFillings = function(additive) {
  this._prices.push(additive.price);
  this._calories.push(additive.calories);
};

HamburgerMethods.prototype.calculateCalories = function() {
  return this._calories.reduce((acc, calorie) => {
    acc += calorie;
    return acc;
  }, this.calories);
};

HamburgerMethods.prototype.calculatePrice = function() {
  return this._prices.reduce((acc, price) => {
    acc += price;
    return acc;
  }, this.price);
};

HamburgerMethods.prototype.confirmOrder = function() {
  this.price = this.calculatePrice();
  this.calories = this.calculateCalories();
};

function Hamburger(sise, filling) {
  HamburgerMethods.apply(this, arguments);
  this._prices = [];
  this._calories = [];
  this.price = sise.price + filling.price;
  this.calories = sise.calories + filling.calories;
}

Hamburger.prototype = Object.create(HamburgerMethods.prototype);
Hamburger.prototype.constructor = HamburgerMethods;

console.log("Big Hamburger");
let bigHamburger = new Hamburger(SIZE_BIG, FILLING_CHEESE);
console.log(bigHamburger);

bigHamburger.addAdditives(ADDICTIVES_MAYONNAiSE);
console.log("Calories: " + bigHamburger.calculateCalories());
console.log("Price: " + bigHamburger.calculatePrice());

bigHamburger.addAdditives(ADDICTIVES_FLAVOR);
console.log("Calories: " + bigHamburger.calculateCalories());
console.log("Price: " + bigHamburger.calculatePrice());
console.log(bigHamburger);

console.log("Confirm!");
bigHamburger.confirmOrder();
console.log(bigHamburger);
