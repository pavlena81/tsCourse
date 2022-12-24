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
//cl2
let anything: any;
anything = -20
anything = 'Text';
anything = {};

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
   str = some;
}

let person: [string, number];

person = ['Max', 21];

enum Status { LOADING, READY };

const page = {
   load: Status.LOADING,
}

if (page.load === Status.LOADING) {
  console.log('page is loading');
}

if (page.load === Status.READY) {
  console.log('page is loaded');
}
//////
let union: string | number;

let literal: 'enable' | 'disable';


function showMessage(message:string):void {
  console.log(message);
}


function calc(num1: number, num2: number):number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}