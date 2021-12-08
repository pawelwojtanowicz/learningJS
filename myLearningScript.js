function myFunction2() {
    document.getElementById("demo6").innerHTML="From external js file";
}

function myFunction3() {
    alert(2+3);
}

function myFunction4() {
    console.log(2+33);
}

function myFunction5() {
    window.print();
}

let a, b, c; a=2; b=3; c=4; d=a+b+c
function myFunction6() {
    alert(d);
}

let x, y, z;
x = 2;
y = 3;
z = x + y;

const PI = 3.14;

function myFunction7() {
    document.getElementById("demo7").innerHTML=x+y+z;
}

function myFunction8() {
    document.getElementById("demo8").innerHTML="x+y+z";
}

function myFunction9() {
    document.getElementById("demo9").innerHTML=PI*2;
}

const car = {type:"Fiat", model:"500", color:"white"};
function myFunction10() {
    document.getElementById("demo10").innerHTML=car.type;
}

let length = 16;                               // Number
let lastName = "Johnson";                      // String
let data = {firstName:"John", lastName:"Doe"};    // Object

function myFunction11() {
    document.getElementById("demo11").innerHTML= length + "<br>" + lastName + "<br>" + data.lastName;
    
}

let q, w, e;
q = 1;
w = 2;
e = 1;

function myFunction12() {
    document.getElementById("demo12").innerHTML= (q == w) + "<br>" + (q == e);
}

const cars = ["Fiat","Volvo","BMW"]

function myFunction13() {
    document.getElementById("demo13").innerHTML= cars[0] + "<br>" + cars[2] + "<br>" + cars[1] + "<br>" + cars[3];
}

let t,u; 
t = "napis";
u = 5;
function myFunction14() {
    document.getElementById("demo14").innerHTML= typeof t + "<br>" + typeof u;
}

function myFunction16() {
    return this.length + this.lastName;
}