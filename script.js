// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var counter = 0;
var minus50btn = document.getElementById("minus50");
var displayEL = document.getElementById("display");
var minus10btn = document.getElementById("minus10");
var minus1btn = document.getElementById("minus1");
var plus1btn = document.getElementById("plus1");
var plus10btn = document.getElementById("plus10");
var plus50btn = document.getElementById("plus50");

minus50btn.addEventListener("click", minus50fcn);
minus10btn.addEventListener("click", minus10fcn);
minus1btn.addEventListener("click", minus1fcn);

plus1btn.addEventListener("click", plus1fcn);
plus10btn.addEventListener("click", plus10fcn);
plus50btn.addEventListener("click", plus50fcn);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

function minus50fcn() {
  counter -= 50;
  displayEL.innerHTML = counter;
}
function minus10fcn() {
  counter -= 10; //same as counter = counter - 10
  displayEL.innerHTML = counter;
}
function minus1fcn() {
  counter--; //same as counter = counter - 10
  displayEL.innerHTML = counter;
}

function plus1fcn() {
  counter++; //same as counter = counter - 10
  displayEL.innerHTML = counter;
}
function plus10fcn() {
  counter += 10; //same as counter = counter - 10
  displayEL.innerHTML = counter;
}
function plus50fcn() {
  counter += 50; //same as counter = counter - 10
  displayEL.innerHTML = counter;
}
// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

var story = "Once upon a time,";
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");
stringInEl.addEventListener("change", updateStory);

function updateStory() {
  var word = stringInEl.value;
  story += word + " ";
  stringInEl.value = "";
  stringOutEl.innerHTML = story;
}

// function sentence() {
let words = document.getElementById("strIn").value;
var output = document.getElementById("strOut");
output.innerHTML += words;
// }

// 4. Math.random() is used to bring RNG (random number generator) to your applications.

var ran1 = document.getElementById("rand1");
var ran2 = document.getElementById("rand2");
var ran3 = document.getElementById("rand3");
var ran4 = document.getElementById("rand4");

ran1.addEventListener("click", random1);
ran2.addEventListener("click", random2);
ran3.addEventListener("click", random3);
ran4.addEventListener("click", random4);

function random1() {
  let rand = Math.random();
  ranout = rand.toFixed(3);
  document.getElementById("rand1-out").innerHTML = ranout;
}

function random2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  document.getElementById("rand2-out").innerHTML = rand;
}

function random3() {
  let rand = Math.random() * 10 - 5;
  rand = Math.round(rand);
  document.getElementById("rand3-out").innerHTML = rand;
}

function random4() {
  let Num1 = +document.getElementById("rand-in1").value;
  let Num2 = +document.getElementById("rand-in2").value;
  let rand = Math.round(Math.random() * (Num2 - Num1)) + Num1;
  document.getElementById("rand4-out").innerHTML = rand;
}

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.

let Html = document.getElementById("HTML");
let Body = document.getElementById("BODY");

let sizeBtn = document.getElementById("random-size");
let colourBtn = document.getElementById("random-rgb");
sizeBtn.addEventListener("click", changeSize);

function changeSize() {
  let size = Math.round(Math.random() * 75);
  let fontSize = size + "px";
  console.log(size);

  he1.style.fontSize = fontSize;
  he21.style.fontSize = fontSize;
  he22.style.fontSize = fontSize;
  t1.style.fontSize = fontSize;
  t2.style.fontSize = fontSize;
}

colourBtn.addEventListener("click", changeColour);
function changeColour() {
  r = Math.round(Math.random() * (255 - 0) + 0);
  g = Math.round(Math.random() * (255 - 0) + 0);
  b = Math.round(Math.random() * (255 - 0) + 0);

  var rgb = "rgb(" + r + "," + g + "," + b + ")";

  Html.style.background = rgb;
}

var picBtn = document.getElementById("pic-btn");
var PicCon = document.getElementById("pic-container");

picBtn.addEventListener("click", addpic);

function addpic() {
  PicCon.innerHTML += "<img width=50px src=images/ezgif-4-aa0f937173.png>";
}

let he1 = document.getElementById("H1");
let he2 = document.getElementById("H2");
let he21 = document.getElementById("H2-1");
let he22 = document.getElementById("H2-2");
let t1 = document.getElementById("text1");
let t2 = document.getElementById("text2");

let reset = document.getElementById("reset");

reset.addEventListener("click", resetPage);

function resetPage() {
  display.innerHTML = 0;
  stringOutEl.innerHTML = "Once upon a time, ";
  document.getElementById("rand1-out").innerHTML = "----------";
  document.getElementById("rand2-out").innerHTML = "----------";
  document.getElementById("rand3-out").innerHTML = "----------";
  document.getElementById("rand4-out").innerHTML = "----------";
  he1.style.fontSize = "34px";
  he2.style.fontSize = "32px";
  he21.style.fontSize = "32px";
  he22.style.fontSize = "32px";
  t1.style.fontSize = "16px";
  t2.style.fontSize = "16px";
  Html.style.background = "#9ae4c8";
  PicCon.innerHTML = "";
  Body.style.fontsize = "100%";
}
