//Fibonacci
function printFibonacci(){
    const num = document.getElementById('fibonacci-value1');
    let n1 = 0, n2 = 1, nextTerm;

    document.getElementById('answer13').innerHTML = n1;
    document.getElementById('answer13').innerHTML = n2;

    nextTerm = n1 + n2;

/*
    while(nextTerm <=  num){
        document.getElementById('answer13').innerHTML = nextTerm;
        
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
}

document.getElementById('fibonacci').addEventListener('click', printFibonacci);
