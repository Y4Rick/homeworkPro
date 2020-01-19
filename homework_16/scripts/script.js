'use strict';

class Hamburger {

    static SIZE_SMALL = {
        prise: 50, 
        calories: 20,
    }

    static SIZE_BIG = {
        prise: 100, 
        calories: 40,
    }

    static FILLING_CHEESE = {
        prise: 10, 
        calories: 20,
    }

    static FILLING_LARD = {
        prise: 20, 
        calories: 5,
    }

    static FILLING_POTATO = {
        prise: 15, 
        calories: 10,
    }

    static ADDICTIVES_FLAVOR = {
        prise: 15, 
        calories: 0,
    }

    static ADDICTIVES_MAYONNAiSE = {
        prise: 20, 
        calories: 5,
    }

    constructor(sise, filling) {
        this.prise = sise.prise + filling.prise;
        this.calories = sise.calories + filling.calories;
    }

    addAdditives(additive) {
        this.prise = this.prise + additive.prise;
        this.calories = this.calories + additive.calories;
    }

    addFillings(filling) {
        this.prise = this.prise + filling.prise;
        this.calories = this.calories + filling.calories;
    }
}

console.log('Big Hamburger');

let bigHamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.FILLING_CHEESE);
console.log(bigHamburger);

bigHamburger.addAdditives(Hamburger.ADDICTIVES_MAYONNAiSE);
console.log(bigHamburger);

console.log('Small Hamburger');
let smallHamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.FILLING_POTATO);
console.log(smallHamburger);

smallHamburger.addAdditives(Hamburger.ADDICTIVES_FLAVOR);
smallHamburger.addAdditives(Hamburger.ADDICTIVES_MAYONNAiSE);
console.log(smallHamburger);