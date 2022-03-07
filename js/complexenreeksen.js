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

// priemgetallen

function printPriemgetallen(){
    var num = document.getElementById('priemgetallen-value1').value;

    for(let i = 2; i <= num; i++){
        flag = true;
        for(let j = 2; j <= i-1; j++){
            if(i % j == 0){
                flag = false;
                break;
            }  
        }
        if(flag) {
            let answer = i + "<br>";
            document.getElementById('answer14').innerHTML = answer;
            console.log(answer);
        }
    }
}

document.getElementById('priemgetallen').addEventListener('click', printPriemgetallen);