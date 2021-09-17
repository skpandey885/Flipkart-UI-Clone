
function func1() {

  let x = document.getElementById('arrow');
  x.style.transform = "rotate(450deg)";
}
function func2() {
  let x = document.getElementById('arrow');
  x.style.transform = "rotate(270deg)";
}

function func3() {

  let x = document.getElementsByClassName('_2sVfI7')[0];
  x.style.transform = "rotate(450deg)";

}
function func4() {
  let x = document.getElementsByClassName('_2sVfI7')[0];
  x.style.transform = "rotate(270deg)";
}

function func5() {

let x = document.getElementsByClassName('_2sVfI7')[1];
x.style.transform = "rotate(450deg)";

}
function func6() {
let x = document.getElementsByClassName('_2sVfI7')[1];
x.style.transform = "rotate(270deg)";
}

function func7() {

let x = document.getElementsByClassName('_2sVfI7')[2];
x.style.transform = "rotate(450deg)";

}
function func8() {
let x = document.getElementsByClassName('_2sVfI7')[2];
x.style.transform = "rotate(270deg)";
}

function func9() {

let x = document.getElementsByClassName('_2sVfI7')[3];
x.style.transform = "rotate(450deg)";

}
function func10() {
let x = document.getElementsByClassName('_2sVfI7')[3];
x.style.transform = "rotate(270deg)";
}


function func11() {

let x = document.getElementsByClassName('_2sVfI7')[4];
x.style.transform = "rotate(450deg)";

}
function func12() {
let x = document.getElementsByClassName('_2sVfI7')[4];
x.style.transform = "rotate(270deg)";
}


 setInterval(() => {
  let x=new Date();
  let seconds=60-x.getSeconds();
  if(seconds==60)
    seconds=" ";
  let minutes=60-x.getMinutes();
  if(minutes==60)
    minutes=" ";
  let hour=24-x.getHours();


  document.getElementById("timeDisplay").innerHTML=`${hour} : ${minutes} : ${seconds}`;
  document.getElementById("timeDisplay").style.padding="1px";
  document.getElementById("timeDisplay").style.color="#7f7f7f";
 }, 1000);


