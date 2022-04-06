//Factorizer

function showFactors() {
    const num = document.getElementById('factorizer-value1').value;
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            document.getElementById('answer19').innerHTML += i + ", ";
        }
    }
}

document.getElementById('factorizer').addEventListener('click', showFactors);

// romanizer

function convertToRoman() {
    var num = document.getElementById("romanizer-value1").value;
  if(num>5000) { paragraph = document.getElementById("answer20");
            paragraph.innerHTML = "Het nummer moet kleiner zijn dan 5000";
               }
  else {
    var my = [];
    
    var M = Math.floor(num / 1000);
    for (i = 1; i <= M; i++) {
        my.push("M");
    }
    var D = Math.floor((num % 1000) / 500);
    for (i = 1; i <= D; i++) {
        my.push("D");
    }
    var C = Math.floor((num % 500) / 100);
    for (i = 1; i <= C; i++) {
        my.push("C");
    }
    var L = Math.floor((num % 100) / 50);
    for (i = 1; i <= L; i++) {
        my.push("L");
    }

    var X = Math.floor((num % 50) / 10);
    for (i = 1; i <= X; i++) {
        my.push("X");
    }

    var V = Math.floor((num % 10) / 5);
    for (i = 1; i <= V; i++) {
        my.push("V");
    }

    var I = num % 5;
    for (i = 1; i <= I; i++) {
        my.push("I");
    }


  for(i=0;i<my.length;i++) {
    
    
    deletefour(my,i,"I","V") ;
     deletefour(my,i,"X","L") ;
        deletefour(my,i,"C","D") ;

    deletefive(my,i,"V","I","X");
   deletefive(my,i,"L","X","C");
 deletefive(my,i,"D","C","M");
   
    }
  paragraph = document.getElementById("answer20");
            paragraph.innerHTML = my.join('');

} }

function deletefour(arr,i,a,b) {
  
   if ((arr[i]==a)&&(arr[i+1]==a)&&(arr[i+2]==a)&&(arr[i+3]==a)) {
     arr[i+1]=b;
    arr[i+2]="";
     arr[i+3]="";
     
     
   }
  
}

function deletefive(arr,i,a,b,c) {
  
      if ((arr[i]==a)&&(arr[i+1]==b)&&(arr[i+2]==b)&&(arr[i+3]==b)&&(arr[i+4]==b)) {
     arr[i]=b;
        arr[i+1]=c;
      arr[i+2]="";
     arr[i+3]="";
        arr[i+4]="";
     
       
    
   }
   
}

document.getElementById('romanizer').addEventListener('click', convertToRoman);

// Morsenizer

function convertToMorse(){
    var letters = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
    var morseLetters = [ "\xa0\xa0\xa0\xa0", ". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___" ];
    
    var textToChange = document.getElementById("morsenizer-value1").value;
    var newText = "";
    for (var i = 0; i < textToChange.length; i++) {
        for (var j = 0; j < 37; j++) {
            if (textToChange[i].toLowerCase() == letters[j]) {
                newText += morseLetters[j];
                newText += "\xa0\xa0\xa0";
                break;
            }        
        }
    }
document.getElementById("answer21").innerHTML = newText;
}

 document.getElementById('morsenizer').addEventListener('click', convertToMorse);