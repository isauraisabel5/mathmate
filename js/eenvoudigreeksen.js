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
  
  
  
  