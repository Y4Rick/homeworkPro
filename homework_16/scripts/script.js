'use strict';

class Hamburger {

    static SISE_SMALL = {
        price: 50, 
        calories: 20,
    }

    static SISE_BIG = {
        price: 100, 
        calories: 40,
    }

    static FILLING_CHEESE = {
        price: 10, 
        calories: 20,
    }

    static FILLING_LARD = {
        price: 20, 
        calories: 5,
    }

    static FILLING_POTATO = {
        price: 15, 
        calories: 10,
    }

    static ADDICTIVES_FLAVOR = {
        price: 15, 
        calories: 0,
    }

    static ADDICTIVES_MAYONNAiSE = {
        price: 20, 
        calories: 5,
    }

    _prices = [];
    _calories = [];

    constructor(sise, filling) {
        this.price = sise.price + filling.price;
        this.calories = sise.calories + filling.calories;
    }

    addAdditives(additive) {
        this._prices.push(additive.price);
        this._calories.push(additive.calories);
    }

    addFillings(filling) {
        this._prices.push(filling.price);
        this._calories.push(filling.calories);
    }

    calculateCalories() {
        return this._calories.reduce((acc, calorie) => {
            acc += calorie;
            return acc;
        }, this.calories);
    }

    calculatePrice() {
        return this._prices.reduce((acc, price) => {            
            acc += price;
            return acc;
        }, this.price);
    }

    confirmOrder() {
        this.price = this.calculatePrice();
        this.calories = this.calculateCalories();
    }
}

console.log('Big Hamburger');

let bigHamburger = new Hamburger(Hamburger.SISE_BIG, Hamburger.FILLING_CHEESE);
console.log(bigHamburger);

bigHamburger.addAdditives(Hamburger.ADDICTIVES_MAYONNAiSE);
console.log("Calories: " + bigHamburger.calculateCalories())
console.log("Price: " + bigHamburger.calculatePrice());

bigHamburger.addAdditives(Hamburger.ADDICTIVES_FLAVOR);
console.log("Calories: " + bigHamburger.calculateCalories())
console.log("Price: " + bigHamburger.calculatePrice());
console.log(bigHamburger);

console.log('Confirm!')
bigHamburger.confirmOrder();
console.log(bigHamburger);