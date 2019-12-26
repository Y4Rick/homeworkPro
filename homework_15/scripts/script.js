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

// 2. Реализовать цепочку протитопов с помощью непосредственного изменения прототипа (__proto__, setPrototypeOf).
const objSecondA = {
    number: 2,
    summ() {
        return `${this.number} = Summ() is - ${this.number + this.number}`;
    }
};

const objSecondB = {
    number: 4,
    mult() {
        return `${this.number} = Mult() is - ${this.number * this.number}`;
    },
}

const objSecondC = {
    number: 6,
    increm() {
        return `${this.number} = Increm() is - ${this.number + 1}`;
    },
}

Object.setPrototypeOf(objSecondB, objSecondA)
objSecondC.__proto__ = objSecondB;
    
console.log('Реализовать цепочку протитопов с помощью непосредственного изменения прототипа (__proto__, setPrototypeOf).');
console.log(objSecondA, objSecondA.number, objSecondA.summ());
console.log(objSecondB, objSecondB.__proto__, objSecondB.number, objSecondB.summ(), objSecondB.mult());
console.log(objSecondC, objSecondC.__proto__, objSecondC.number, objSecondC.summ(), objSecondC.mult(), objSecondC.increm());

// 3. Реализовать цепочку протитопов с помощью функций конструкторов..
function ObjThirdA(number) {
    this.number = number;
    this.summ = function() {
        return `${this.number} = Summ() is - ${this.number + this.number}`;
    };
}

const objThirdA = new ObjThirdA(2);

function ObjThirdB(number) {
    this.number = number;
    this.mult = function() {
        return `${this.number} = Mult() is - ${this.number * this.number}`;
    };
}

ObjThirdB.prototype = objThirdA;
const objThirdB = new ObjThirdB(4);

function ObjThirdC(number) {
    this.number = number;
    this.increm = function() {
        return `${this.number} = Increm() is - ${this.number + 1}`;
    };
}

ObjThirdC.prototype = objThirdB;
const objThirdC = new ObjThirdC(6);

console.log('Реализовать цепочку протитопов с помощью функций конструкторов.');
console.log(objThirdA, objThirdA.__proto__, objThirdA.number, objThirdA.summ());
console.log(objThirdB, objThirdB.__proto__, objThirdB.number, objThirdB.summ(), objThirdB.mult());
console.log(objThirdC, objThirdC.__proto__, objThirdC.number, objThirdC.summ(), objThirdC.mult(), objThirdC.increm());
