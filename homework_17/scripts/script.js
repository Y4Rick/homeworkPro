var SIZE_SMALL = {
    prise: 50,
    calories: 20,
}

var SIZE_BIG = {
    prise: 100,
    calories: 40,
}

var FILLING_CHEESE = {
    prise: 10,
    calories: 20,
}

var FILLING_LARD = {
    prise: 20,
    calories: 5,
}
  
var FILLING_POTATO = {
    prise: 15,
    calories: 10,
}

var ADDICTIVES_FLAVOR = {
    prise: 15,
    calories: 0,
}

var ADDICTIVES_MAYONNAiSE = {
    prise: 20,
    calories: 5,
}

var Hamburger = function (sise, filling) {
    this.prise = sise.prise + filling.prise;
    this.calories = sise.calories + filling.calories;

    this.addAdditives = function (filling) {
        this.prise = this.prise + filling.prise;
        this.calories = this.calories + filling.calories;
    }

    this.addFillings = function(additive) {
        this.prise = this.prise + additive.prise;
        this.calories = this.calories + additive.calories;
    }
}

console.log('Big Hamburger');
var bigHamburger = new Hamburger(SIZE_BIG, FILLING_CHEESE);
bigHamburger.addAdditives(ADDICTIVES_MAYONNAiSE);
console.log(bigHamburger);

console.log('Small Hamburger');
var smallHamburger = new Hamburger(SIZE_SMALL, FILLING_POTATO);
smallHamburger.addAdditives(ADDICTIVES_FLAVOR);
smallHamburger.addAdditives(ADDICTIVES_MAYONNAiSE);
console.log(smallHamburger);