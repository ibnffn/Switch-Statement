// Switch Statement number
var a = 8;

switch (a) {
  case 5:
    console.log("extra-small");
    break;
  case 6:
    console.log("small");
    break;
  case 7:
    console.log("extra-medium");
    break;
  case 8:
    console.log("medium");
    break;
  case 9:
    console.log("extra-big");
    break;
  default:
    console.log("big");
}
// result
// medium

// Switch statement menggunakan string
var b = "buah-buahan";

switch (b) {
  case "Apel":
    console.log("benar");
    break;
  default:
    console.log("buah-buahan");
}
// result default
// buah-buahan

// switch statement without break -perbandingan(4!=3)
var c = 5;

switch (c) {
  case 3:
    console.log("to small");
  case 4:
    console.log("small");
  case 5:
    console.log("size true");
  default:
    console.log("i dont know such values");
}
// result - hasilnya default karena tidak menggunakan break untuk kecocokannya
// i dont know such values

// switch statement more complex
const d = 4;
switch (new Date().getDay()) {
  case 6:
    console.log("is weekend");
    break;
  case 0:
    console.log("is weekends");
    break;
  default:
    console.log("i need to work!");
}
// result
// i need to work!

// switch statement common codes blocks - hari
const x = 0;
switch (x) {
  case 0:
  case 6:
    console.log("ini hari senin");
    break;
  case 2:
    console.log("too big");
    break;
  case (1, 7):
    console.log("test to work");
    break;
  default:
    console.log("tidak dari semua itu");
}
// result
// ini hari senin

const y = (1, 7);
switch (y) {
  case 0:
  case 6:
    console.log("ini hari senin");
    break;
  case 2:
    console.log("too big");
    break;
  case (1, 7):
    console.log("test to work");
    break;
  default:
    console.log("tidak dari semua itu");
}
// result
// ini hari test to work

// SwitchStatement comparison strict
let z = "1";
switch (z) {
  case "1":
    console.log("ini string");
    break;
  case "2":
    console.log("ini number");
    break;
  case "3":
    console.log("ini number 2");
    break;
  default:
    console.log("default");
}
// result
// ini string
