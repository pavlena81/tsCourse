import { Console } from "console";

const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button!.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});

//Задайте правильные ts типы, для классических js;
let age: number;
let name: string;

let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback = (a) => { return 100 + a };
//

// И назначаем
age = 50;
name = 'Max';
console.log(name);
toggle = true;
empty = null;
notInitialize = undefined;