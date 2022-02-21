//Hamburgermenu

var Hamburger = document.querySelector("#Hamburger");
Hamburger.addEventListener("click", showMenu, false);
 
Kruis = document.querySelector("#Kruis");
Kruis.addEventListener("click", hideMenu, false);
 
function showMenu(e) {
    flyoutMenu.classList.add("show");
 
    document.body.style.overflow = "hidden";
}
 
function hideMenu(e) {
    flyoutMenu.classList.remove("show");
    e.stopPropagation();
 
    document.body.style.overflow = "auto";
}       



// Dropdownmenu

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

  function optellen() {
    let num1 = parseInt(document.getElementById('num1-optellen').value);
    let num2 = parseInt(document.getElementById('num2-optellen').value);
    document.getElementById('answer1').innerHTML = num1 += num2;
}

document.getElementById('optellen').addEventListener('click', optellen);

function aftrekken() {
  let num1 = parseInt(document.getElementById('num1-aftrekken').value);
  let num2 = parseInt(document.getElementById('num2-aftrekken').value);
  document.getElementById('answer2').innerHTML = num1 - num2;
}

document.getElementById('aftrekken').addEventListener('click', aftrekken);

function vermenigvuldigen() {
  let num1 = parseInt(document.getElementById('num1-vermenigvuldigen').value);
  let num2 = parseInt(document.getElementById('num2-vermenigvuldigen').value);
  document.getElementById('answer3').innerHTML = num1 * num2;
}

document.getElementById('vermenigvuldigen').addEventListener('click', vermenigvuldigen);

function delen() {
  let num1 = parseInt(document.getElementById('num1-delen').value);
  let num2 = parseInt(document.getElementById('num2-delen').value);
  document.getElementById('answer4').innerHTML = num1 / num2;
}

document.getElementById('delen').addEventListener('click', delen);

function delen() {
  let num1 = parseInt(document.getElementById('num1-delen').value);
  let num2 = parseInt(document.getElementById('num2-delen').value);
  document.getElementById('answer4').innerHTML = num1 / num2;
}

document.getElementById('delen').addEventListener('click', delen);

function macht() {
  let num1 = parseInt(document.getElementById('num1-macht').value);
  let num2 = parseInt(document.getElementById('num2-macht').value);
  document.getElementById('answer5').innerHTML = num1 ** num2;
}

document.getElementById('macht').addEventListener('click', macht);

function percentage() {
  let num1 = parseInt(document.getElementById('num1-percentage').value);
  let num2 = parseInt(document.getElementById('num2-percentage').value);
  document.getElementById('answer6').innerHTML = 100 * num1 / num2;
}

document.getElementById('percentage').addEventListener('click', percentage);

function restwaarde() {
  let num1 = parseInt(document.getElementById('num1-restwaarde').value);
  let num2 = parseInt(document.getElementById('num2-restwaarde').value);
  document.getElementById('answer7').innerHTML = num1 % num2; 
}

document.getElementById('restwaarde').addEventListener('click', restwaarde);

function even() {
  let num1 = parseInt(document.getElementById('num1-even').value);
  if(num1 % 2 == 0) {
    document.getElementById('answer8').innerHTML = "even"; 
}else {
    document.getElementById('answer8').innerHTML = "odd"; 
}
}

document.getElementById('even').addEventListener('click', even);


// tafels

function printTafel() {
  var num;
  num = Number(document.getElementById("tafel-value").value);
  for (var i = 1; i <= 10; i++) {
      var answer = document.getElementById("answer9");
      answer.innerHTML += num * i + "<br/>";
  }
}

document.getElementById('tafel').addEventListener('click', printTafel);

// machten

function printMachten() {
  let num1 = document.getElementById("grondgetal").value;
  let num2 = document.getElementById("exponent").value;

      for(let i = 0; i <= num2; i++){
          document.getElementById('answer10').innerHTML += num1 ** i + "<br>";
      }     
  
}
document.getElementById('button2').addEventListener('click', printMachten);

// breuken

function printBreuk() {
  let num1 = document.getElementById("breuk").value;

  for(let i = 1; i <= num1; i++){
      document.getElementById('answer11').innerHTML += "<br>"+ "1/"+i+"=" +1 / i;
  }     
  
}
document.getElementById('button3').addEventListener('click', printBreuk);

// kwadraten

function printKwadraten() {
  let num1 = document.getElementById("kwadraat").value;

  for(let i = 1; i <= num1; i++){
      document.getElementById('answer12').innerHTML += "<br>" + Math.pow(i, 2);
  }     
  
}
document.getElementById('button4').addEventListener('click', printKwadraten);



