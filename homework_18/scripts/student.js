'use strict';

class Student {
    constructor(name, surname, year_of_birth) {
        this.name = name;
        this.surname = surname;
        this.year_of_birth = year_of_birth;
        this.rating = [8.2, 9.7, 7.8, 10, 9.2, 8.3, 9.1, 10, 8.0]
        this.array = new Array(25);
    }

    get age() {
        return new Date().getFullYear() - this.year_of_birth;
    }

    get averageRating() {
        return +(this.rating.reduce((result, element) => {
            return result + element;
        }, 0) / this.rating.length).toFixed(2);
    }

    get averageVisit() {
        return +(this.array.reduce((result, element) => {            
            return result + (+element);
        }, 0) / this.array.length).toFixed(2);
    }

    present() {
        for (let index = 0; index < this.array.length; index++) {
            const element = this.array[index];
            if (element === undefined || element === null) {
                this.array.splice(index, 1, true)
                break;
            }
        }
    }
    
    absent() {
        for (let index = 0; index < this.array.length; index++) {
            const element = this.array[index];
            if (element === undefined || element === null) {
                this.array.splice(index, 1, false)
                break;
            }
        }
    }

    summary() {
        if (this.averageRating > 9 && this.averageVisit > 0.9) {
            return 'Ути какой молодчинка!';
        } else if (this.averageRating < 9 && this.averageVisit < 0.9) {
            return 'Редиска!';
        } else {
            return 'Норм, но можно лучше';
        }
    }
}

const student = new Student('Vava', 'Rossen', 1990);

student.absent(); //1
student.present(); //2
student.present(); //3
student.present(); //4
student.present(); //5
student.present(); //6
student.present(); //7
student.present(); //8
student.present(); //9
student.present(); //10
student.present(); //11
student.present(); //12
student.absent(); //13
student.present(); //14
student.present(); //15
student.present(); //16
student.present(); //17
student.present(); //18
student.present(); //19
student.present(); //20
student.present(); //21
student.present(); //22
student.present(); //23
student.present(); //24
student.present(); //25

console.log('Student', student);
console.log('Age', student.age);
console.log('Rating', student.averageRating);
console.log('Visit', student.averageVisit);
console.log('Summary', student.summary());

