let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

console.log("The Name is " + person.name + " and the age is " + person.age);

// let arrayNames = ["Fernada", "kevin", "brett"];

// arrayName[1];

let student1 = {
  name: "John",
  email: "nich@gmail.com",
  grade: 3.32,
};

let student2 = {
  name: "Juan",
  email: "nich@gmail.com",
  grade: 3.32,
};

let student3 = {
  name: "Emilio",
  email: "nich@gmail.com",
  grade: 3.32,
};

// average grade

let averageGrade = (student1.grade + student2.grade + student3.grade) / 3;
console.log(averageGrade);

// challenge 3

let library = [
  { title: "the book", author: "me", year: 2024 },
  { title: "the book", author: "me", year: 2023 },
  { title: "the book", author: "me", year: 2022 },
];

function displayYear() {
  for (let i = 0; i < library.length; i++) {
    console.log(library[i].year);

    document.getElementById(
      "year"
    ).innerHTML += `<p> The year of book ${library[i].year}</p>`;
  }
}

displayYear();
