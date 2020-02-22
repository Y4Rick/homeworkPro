"use strict";

class Student {
  constructor(name, surname, year_of_birth) {
    this.name = name;
    this.surname = surname;
    this.year_of_birth = year_of_birth;
    this.rating = [8.2, 9.7, 7.8, 10, 9.2, 8.3, 9.1, 10, 8.0];
    this.attendance_array = [];
  }

  get age() {
    return new Date().getFullYear() - this.year_of_birth;
  }

  get averageRating() {
    return +(
      this.rating.reduce((result, element) => {
        return result + element;
      }, 0) / this.rating.length
    ).toFixed(2);
  }

  get averageVisit() {
    return +(
      this.attendance_array.reduce((result, element) => {
        return result + +element;
      }, 0) / this.attendance_array.length
    ).toFixed(2);
  }

  updateAttendance(key) {
    const isAttended = key === "yes";

    if (this.attendance_array.length <= 25) {
      this.attendance_array.push(isAttended);
    }
  }

  summary() {
    if (this.averageRating > 9 && this.averageVisit > 0.9) {
      return "Ути какой молодчинка!";
    } else if (this.averageRating < 9 && this.averageVisit < 0.9) {
      return "Редиска!";
    } else {
      return "Норм, но можно лучше";
    }
  }
}

const student = new Student("Vava", "Rossen", 1990);

student.updateAttendance("no"); //1
student.updateAttendance("yes"); //2
student.updateAttendance("yes"); //3
student.updateAttendance("yes"); //4
student.updateAttendance("yes"); //5
student.updateAttendance("yes"); //6
student.updateAttendance("yes"); //7
student.updateAttendance("yes"); //8
student.updateAttendance("yes"); //9
student.updateAttendance("yes"); //10
student.updateAttendance("yes"); //11
student.updateAttendance("yes"); //12
student.updateAttendance("no"); //13
student.updateAttendance("yes"); //14
student.updateAttendance("yes"); //15
student.updateAttendance("yes"); //16
student.updateAttendance("yes"); //17
student.updateAttendance("yes"); //18
student.updateAttendance("yes"); //19
student.updateAttendance("yes"); //20
student.updateAttendance("yes"); //21
student.updateAttendance("yes"); //22
student.updateAttendance("yes"); //23
student.updateAttendance("yes"); //24
student.updateAttendance("yes"); //25

console.log("Student", student);
console.log("Age", student.age);
console.log("Rating", student.averageRating);
console.log("Visit", student.averageVisit);
console.log("Summary", student.summary());
