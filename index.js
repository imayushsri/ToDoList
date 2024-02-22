//1. Ways to print in JavaScript
//console.log("Hello World!");
//alert("Welcome!");
//document.write("Document Write");

//2. JavaScript Console API
// console.log("Hello World!", 3+5 , "Another Log");
// console.warn("This is a warning");
// console.error("This is an error");

// 3. JavaScript Variables
// Containers to store data values.
// var num = 34;
// var num2 = 11;
// console.log(num+num2);

// 4. DataTypes in JavaScript
// var num3 = 29; //this is a number
// var num4 = 45.33 //this is a float
// var str1 = "This is a string";
// var str2 = 'This is also a string';

//Objects
// var marks = {
//  Ayush:80,
//  Satyam:90,
//  Harry:98
// }

//Booleans
// var a = true;
// var b = false;
// console.log(a);
// console.log(b);

//Undefined
// var und = undefined;
// console.log(und);
// var und2;
// console.log(und2);

//Null
// var n = null;
// console.log(n);

//Array
// var arr = [1,"Ayush",2,3,4,5];
// console.log(arr);
// console.log(arr[0]); //JavaScript is a 0 based index language.
// console.log(arr[1]);
/*
At a very high level, there are two types of Data Types in JavaScript\
1. Primitive Data Type : Undefine, Null, Number, String, Boolean, Symbol.
2. Reference Data Type : Arrays, Objects.
*/

// 5. Operators in JavaScript
// A. Arithmetic Operators : +, -, *, /.
// var a = 32;
// var b = 10;
// console.log("The value of a + b =", a+b);
// console.log("The value of a - b =", a-b);
// console.log("The value of a * b =", a*b);
// console.log("The value of a / b =", a/b);

// B.Assignment Operators : =, +=, -=, *=, /=.
// var c = b;
// c +=2;
// c -=2;
// c *=2;
// c /=2;
// console.log(c);

// C. Comparision Operators : ==, <=, >=, <, >
// var a = 10;
// var b = 20;
// console.log(a==b);
// console.log(a<=b);
// console.log(a>=b);
// console.log(a>b);
// console.log(a<b);

// D. Logical Operators : &&, ||, ! .
// console.log(true && true);  // True
// console.log(true && false);  // False
// console.log(false && true);  // False
// console.log(false && false); // False

// console.log(true || true);   // True
// console.log(true || false);  // True
// console.log(false || true);  // True
// console.log(false || false); // False

// console.log(!false);
// console.log(!true);

// 6. Function in JavaScript
// function avg(a,b)
// {
//    return(a+b)/2;
// }
// c1 = avg(10,20);
// c2 = avg(50,12);
// console.log(c1, c2);

// 7. Conditionals in JavaScript
// Single if Statement
// var age = 90;
// if(age > 18)
// {
//    console.log('You can Drive!');
// }
// if-else Statement
// if(age > 18)
// {
//    console.log('You can Drive!');
// }
// else
// {
//    console.log('You cannot Drive!');
// }

// if-else ladder
// if(age < 2)
// {
//    console.log("You are just born!");
// }
// else if(age>18)
// {
//    console.log("You can Drive");
// }
// else if(age>60)
// {
//    console.log("You are Retired");
// }
// else
// {
//    console.log("You are Dead");
// }

// 8. Loops in JavaScript
// var arr = [1, 2, 3, 4, 5]
// for(var i = 0; i<arr.length;i++)
// {
//    console.log(arr[i]);
// }

// arr.forEach(function(element)
// {
//    console.log(element);
// })

// const a = 0; can't change the value of const
// let j = 0;

// while (j < arr.length) {
//    console.log(arr[j]);
//    j++;
// }

// do {
//    console.log(arr[j]);
//    j++;
// }
// while (j < arr.length);

// 9. Break and Continue in JavaScript
// var arr = [1, 2, 3, 4, 5]
// for (var i = 0; i < arr.length; i++) {
//    if (i == 2) {
//       break;
//    }
//    console.log(arr[i]);
// }

// for (var i = 0; i < arr.length; i++) {
//    if (i == 2) {
//       continue;
//    }
//    console.log(arr[i]);
// }

// 10. Array Methods
// let arr = ["Fan", "Camera", 23, null, true];
// console.log(arr.length); // Array Length
// arr.pop(); // Remove Last Element
// arr.push("Ayush"); // Add Element in last
// arr.shift(); // Remove First Element
// arr.unshift("Satyam"); // Add Element in Start
// arr.sort(); // Sort the array as String
// arr.toString(); //  Convert all Elements in String
// // ETC.
// console.log(arr);

// 11. String in JavaScript
let mystring = "Ayush Srivastava is a good good boy";
// console.log(mystring.length); //Length of String
// console.log(mystring.indexOf("Srivastava"));  //Index of Specific Word
// console.log(mystring.lastIndexOf("good"));   //Index of Last specific world
// console.log(mystring.slice(0,16));   //Slice of String
// a = mystring.replace("Ayush", "Satyam");  //Replace of words
// b = a.replace("good", "Bad");
// console.log(mystring, a,b);
// ETC

//12 Dates in JavaScript

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
//ETC

//13 DOM Manipulation

// let elem = document.getElementById('click');
// console.log(elem);
// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = 'yellow';
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// console.log(elem.innerText);
// console.log(elem.innerHTML);
// console.log(elemClass[0].innerText);
// console.log(elemClass[0].innerHTML);
// tn = document.getElementsByTagName('div');  //Get elements by tag name
// console.log(tn);
// createElement = document.createElement('p');
// createElement.innerText = 'This is a created paragraph';
// tn[0].appendChild(createElement);  // Create a child
// createElement2 = document.createElement('b');
// createElement2.innerText = 'This is a bold created paragraph';
// tn[0].replaceChild(createElement2, createElement);  //Replace Child
// tn[0].removeChild(createElement2);  //Remove child

// sel = document.querySelector('.container');
// console.log(sel);
// sel2 = document.querySelectorAll('.container');
// console.log(sel2);

// 14 Events in JavaScript
// function clicked()
// {
//     console.log('The Button Was Clicked');
// }

// window.onload
// {
//     console.log('Window was loaded');
// }

// fcontainer.addEventListener('click', function()
// {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We Have Clicked</b>";
//     console.log('clicked on container');
// });
// fcontainer.addEventListener('mouseover', function()
// {
//     console.log('Mouse on container');
// });
// fcontainer.addEventListener('mouseout', function()
// {
//     console.log('Mouse out of container');
// });
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// fcontainer.addEventListener('mouseup', function()
// {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log('Mouse up when clicked on container');
// });
// fcontainer.addEventListener('mousedown', function()
// {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We Have Clicked</b>";
//     console.log('Mouse down when clicked on container');
// });

//Arrow Funcion in JavaScript
// function summ(a,b)
// {
//     return a+b;
// }

// summ = (a,b)=>
// {
//     return a+b;
// }
// logkaro = ()=>
// {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>Set Timeout Fired</b>";
//     console.log("I am Your Log");
// }
// logkaro2 = ()=>
// {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>Set Interval Fired</b>";
//     console.log("I am Your Interval Log");
// }
// //SetTimeout and SetInterval in JavaScript
// clr = setTimeout(logkaro,5000);
// clr2 = setInterval(logkaro2,2000);
// // Use clearTimeout(clr) / clearInterval(clr2) to cancel setTimeout / setInterval

//15 Local Storage in JavaScript
// localStorage.setItem('Name', 'Ayush');
// localStorage.getItem('Name');
// localStorage.clear();
// localStorage.removeItem('Name');

//16 JSON
// obj = {name: "Ayush", length: 1}
// jso = JSON.stringify(obj);  // JSON Required Double Quote (" ")
// console.log(jso)
// console.log(typeof jso);
// parse = JSON.parse('{name: "Ayush", length: 1}');
// console.log(parse)
// console.log(typeof parse);

//Template literals - Backticks
a=34;
console.log(`This is my ${a}`);