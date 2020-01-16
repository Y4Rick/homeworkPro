'use strict';

initData();

class Hamburger {
    constructor(prise, calories) {
        this.prise = prise;
        this.calories = calories;
        this.filling = new Filling(this);
        this.additives = new Additives(this);
    }
}

class Filling {
    constructor(hamburger) {
        this.hamburger = hamburger;
    }

    putCheese() {
        this.hamburger.prise = this.hamburger.prise + 10;
        this.hamburger.calories = this.hamburger.calories + 20;
    }

    putLard() {
        this.hamburger.prise = this.hamburger.prise + 20;
        this.hamburger.calories = this.hamburger.calories + 5;
    }

    putPotato() {
        this.hamburger.prise = this.hamburger.prise + 15;
        this.hamburger.calories = this.hamburger.calories + 10;
    }
}

class Additives {
    constructor(hamburger) {
        this.hamburger = hamburger;
    }

    putFlavoring() {
        this.hamburger.prise = this.hamburger.prise + 15;
        this.hamburger.calories = this.hamburger.calories + 0;
    }

    putMayonnaiseg() {
        this.hamburger.prise = this.hamburger.prise + 20;
        this.hamburger.calories = this.hamburger.calories + 5;
    }
}

class BigHamburger extends Hamburger {
    constructor(prise = 100, calories = 40) {
        super(prise, calories);

        this.filling.putCabbage = () => {
            this.prise = this.prise + 5;
            this.calories = this.calories + 0;
        }

        this.additives.putKetchup = () => {
            this.prise = this.prise + 7;
            this.calories = this.calories + 3;
        }
    }
}

class SmallHamburger extends Hamburger {
    constructor(prise = 50, calories = 20) {
        super(prise, calories);

        this.filling.putCarrot = () => {
            this.prise = this.prise + 4;
            this.calories = this.calories + 0;
        }

        this.additives.putSourCream = () => {
            this.prise = this.prise + 12;
            this.calories = this.calories + 8;
        }
    }
}

function initData() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.addEventListener("click", () => {
        if (event && event.target.closest('.hamburger__item--big')) {
            createOrder(event.target.closest('.hamburger__item--big'), new BigHamburger());
        }

        if (event && event.target.closest('.hamburger__item--small')) {
            createOrder(event.target.closest('.hamburger__item--small'), new SmallHamburger());
        }
    })
}

function createOrder(element, order) {
    console.log(element, order);
    
}