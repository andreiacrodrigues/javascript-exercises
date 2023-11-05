const repeatString = function(saudation, num) {

    let result = ""

    for(i=0; i<num; i++){
        result += saudation
    }
    return result
};

console.log(repeatString("hey", 3))

// Do not edit below this line
module.exports = repeatString;
