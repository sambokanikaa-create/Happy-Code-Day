console.log("Hello JavaScripts");
console.log("I'm not good!");
console.log("\n");

// This one was name in c++
let variable=10; 
// This one like cout<<
console.log(variable);
console.log("\n");

let name="Sambo Kanika";
let age=19;
let gender="Female";
let email="sambokanikaa@gmail.com";

// This one like cout<<"Name : "<<name;
console.log("Name : " + name);
console.log("Age : " + age);
console.log("Gender : " + gender);
console.log("Email : " + email);
console.log("\n"); // \n is for Enter

// Javascripts don't have like cin to input, we use html to input in

// const vs let, var
// const we sign variable, we can't change it
// let we sign variable, we can change it
const noname="Jelly";
let username="Sambo Kanika";
let a;
let b= null; //null = គ្មាន, we can write without ""

console.log("Name : " + noname);
console.log("userName : " + username);
console.log(a);  //undefined = ទទេ
console.log(b);  //null = គ្មាន
console.log("\n");

//We give this, isActive= true;
let isActive= true;
console.log("isActive : " + isActive);
console.log(isActive + isActive);
console.log(isActive + isActive + "1");
console.log("\n");

// So: true + true =2, true + true + "1" = 21

// Operator
// + arimathic operator: +, -, *, /, %
// + assignment operator: +=, -=, *=, /=
// + comparation operator: ==, ===, >, <, >=, <=, !
// + logical operator: &&, ||, !

let x=100;
let y=50;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

// a += 2 = a= a+2
console.log(x+=2);
console.log(y-=2);
console.log("\n");

let num1=10;
let num2="10";
console.log(num1 == num2); //this one compare just number
console.log(num1 === num2); //not only compare number, also their type too
console.log("\n");

console.log(true && true); // and
console.log(false && false);
console.log(true && false);
console.log(false && true);
console.log("\n");

console.log(true || true); // or
console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log("\n");
