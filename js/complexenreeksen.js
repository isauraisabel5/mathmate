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
            document.getElementById('answer14').innerHTML += answer;
            console.log(answer);
        }
    }
}

document.getElementById('priemgetallen').addEventListener('click', printPriemgetallen);

    // perfect number

    function perfectNumber(){

        let number = parseInt(document.getElementById('perfectnumber-value1').value);
        var temp = 0;
        var divisors = [];
    
        for(var i = 1; i <= number / 2; i++){
            if(number % i === 0){
                temp += i;
                divisors.push(" " + i);
            }
        }
    
        if(temp === number && temp !== 0){
                document.getElementById("answer16").innerHTML = divisors + " = " + number;
            }
    
        else{
                document.getElementById('answer16').innerHTML = "Het is geen perfecte nummer.";
            }  
    }

    document.getElementById('perfectnumber').addEventListener('click', perfectNumber);

    //collatz conjuration

    function collatz(){
        let num = parseInt(document.getElementById('collatz-value1').value);



        while(num != 1){
            if(num % 2 == 0){   
                let answer = num / 2;
                document.getElementById('answer17').innerHTML += num+"/2="+answer+"<br>"; 
                num = parseInt(num/2);
            }else{
                let answer1 = num * 3 + 1 ; 
                document.getElementById('answer17').innerHTML += num+"*3+1="+answer1+"<br>";
                num = (num * 3) + 1;
            }        
        }   
    }

    document.getElementById('collatz').addEventListener('click', collatz);
