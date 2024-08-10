let globalVariable = "im global";

function myFunction() {
  console.log("", globalVariable);
}

// myFunction();

// greet

function greet(name) {
  console.log("Hello" + name);
}

// greet("Ryan");

// numbers

function addNumbers(num1, num2) {
  let result = num1 + num2;

  return result;
}

let result1 = addNumbers(2, 3);
// console.log("result1", result1);

// mini challenge

// challenge 1

function doubleNumber(num) {
  //   console.log("doubled", num * 2);
  return num * 2;
}

// doubleNumber(2);
// doubleNumber(9);

// data

let pets = [
  {
    name: "Vader",
    age: 3,
    gender: "Male",
    service: "Bath & Trim",
    breed: "Boxer",
  },
  {
    name: "Gokiyo",
    age: 4,
    gender: "Female",
    service: "Bath & Brush",
    breed: "Doberman",
  },
  {
    name: "Mirage",
    age: 3,
    gender: "Male",
    service: "Bath & Nail Trim",
    breed: "Dalmatian",
  },
];

function petCount() {
  //   for (let i = 0; i < pets.length; i++) {
  //     let count = +pets[i].length;
  total = pets.length;

  document.getElementById(
    "btn-count"
  ).innerHTML = `<p> The number of pets in line are ${total}</p>`;
  //   }
}

// petCount();

function petNames() {
  let petNamesDiv = document.getElementById("btn-name");
  petNamesDiv.innerHTML="";
  for (let i = 0; i < pets.length; i++) {
    const name = pets[i].name;
    console.log("count", name);
    petNamesDiv.innerHTML += `<p> The name of pets in line are ${name}</p>`;
  }
}

// petNames();

// i need print data on pageXOffset, make it look good and adjust with screens

// getting values from prompt

// let num = parseInt(prompt("Enter a number:"));
// let result3 = doubleNumber(num);
// console.log("The double of " + num + " is " + result3);

// challenge 2

function rectangleArea(length, width) {
  let area = length * width;
  console.log("area", area);
  return area;
}
// let lengthPrompt = parseInt(prompt("Enter a number for desired length :"));
// let widthPrompt = parseInt(prompt("Enter a number for desired width :"));
// 2rectangleArea();

// console.log("The area is " + rectangleArea(lengthPrompt, widthPrompt));





// object constructor

const salon = {storeName: 'The Fashion Pet', address: '1234 address lane dogland, ca 99999'};