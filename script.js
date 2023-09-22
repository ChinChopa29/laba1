let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

let clear = document.getElementById("clear");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let div = document.getElementById("div");
let mult = document.getElementById("mult");
let percent = document.getElementById("percent");
let sqrt = document.getElementById("sqrt");
let neg = document.getElementById("neg");
let equal = document.getElementById("equal");

let inp = document.getElementById("inp");
let inpVal = 0;

let firstNum = 0;
let secondNum = 0;

clear.onclick = function () {
   inp.value = "";
}
neg.onclick = function () {
   inp.value = '-' + inp.value;
}
plus.onclick = function () {
   numFunc = "plus";
   firstNum = parseFloat(inp.value);
   inp.value = "";
}
minus.onclick = function () {
   numFunc = "minus";
   firstNum = parseFloat(inp.value);
   inp.value = "";
}
div.onclick = function () {
   numFunc = "div";
   firstNum = parseFloat(inp.value);
   inp.value = "";
}
mult.onclick = function () {
   numFunc = "mult";
   firstNum = parseFloat(inp.value);
   inp.value = "";
}
percent.onclick = function () {
   numFunc = "percent";
   firstNum = parseFloat(inp.value);
   inp.value = "";
}
sqrt.onclick = function () {
   numFunc = "sqrt";
   firstNum = parseFloat(inp.value);
   inp.value = "";
}
equal.onclick = function () {
   secondNum = parseFloat(inp.value);
   if (numFunc == "plus") {
      anw = firstNum + secondNum;
      inp.value = anw;
   } else if (numFunc == "minus") {
      anw = firstNum - secondNum;
      inp.value = anw;
   } else if (numFunc == "div") {
      if (secondNum == 0 || firstNum == 0) {
         inp.value = "CAN'T DIVIDE BY ZERO";
      } else {
         anw = firstNum / secondNum;
         inp.value = anw;
      }
   } else if (numFunc == "mult") {
      anw = firstNum * secondNum;
      inp.value = anw;
   } else if (numFunc == "percent") {
      anw = (firstNum / 100) * secondNum;
      inp.value = anw;
   } else if (numFunc == "sqrt") {
      anw = firstNum ** secondNum;
      inp.value = anw;
   }
}


zero.onclick = function () {
   inp.value += "0";
}
one.onclick = function () {
   inp.value += "1";
}
two.onclick = function () {
   inp.value += "2";
}
three.onclick = function () {
   inp.value += "3";
}
four.onclick = function () {
   inp.value += "4";
}
five.onclick = function () {
   inp.value += "5";
}
six.onclick = function () {
   inp.value += "6";
}
seven.onclick = function () {
   inp.value += "7";
}
eight.onclick = function () {
   inp.value += "8";
}
nine.onclick = function () {
   inp.value += "9";
}


dot.onclick = function () {
   inp.value += ".";
}
