//Fibonacci
function printFibonacci(){



    var num = parseInt(document.getElementById('fibonacci-value1').value);
  
    var n1 = 1;
  
    var n2 = 0;
  
    nextTerm=0;
  
  
  
    while (num >=  0){
  
     
  
        nextTerm= n1;
  
        n1 = n1+n2;
  
        n2 = nextTerm;
  
        document.getElementById('answer13').innerHTML += (n2)+"<br>";
  
        num--;
  
    }
  
  }
document.getElementById('fibonacci').addEventListener('click', printFibonacci);
