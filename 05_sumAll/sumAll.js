const sumAll = function(num1, num2) {

    if( (num1 >= 0 && num2 >= 0) && (typeof num1 === 'number' && typeof num2 === 'number')){
        let sum = 0

        if (num1 > num2) {
            [num1, num2] = [num2, num1];
        }
    
        for(i=num1; i<=num2; i++){
            sum += i
        }
        
        return sum

    } else {
        return "ERROR"
    }
}

console.log(sumAll(123,1))

// Do not edit below this line
module.exports = sumAll;
