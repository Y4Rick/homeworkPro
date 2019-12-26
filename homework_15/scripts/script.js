'use strict';

// 1. Реализовать цепочку протитопов с помощью Object.create.
const objA = {
    number: 2,
    summ() {
        return `${this.number} = Summ() is - ${this.number + this.number}`;
    }
};

const objB = Object.create(objA);
    objB.number = 4;
    objB.mult = function() {
        return `${this.number} = Mult() is - ${this.number * this.number}`;
    };

const objC = Object.create(objB);
    objC.number = 6;
    objC.increm = function() {
        return `${this.number} = Increm() is - ${this.number + 1}`;
    };

console.log('Реализовать цепочку протитопов с помощью Object.create.');
console.log(objA, objA.number, objA.summ());
console.log(objB, objB.__proto__, objB.number, objB.summ(), objB.mult());
console.log(objC, objC.__proto__, objC.number, objC.summ(), objC.mult(), objC.increm());
