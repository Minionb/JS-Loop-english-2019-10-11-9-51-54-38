var result = "";
var answer;
for (var i=1; i<=9; i++){
    for(var j=1; j<=i; j++){
        answer = i*j;
        result += i + "*" + j + "=" + answer + " ";
        
    }

    result += '\n'
}

console.log(result);