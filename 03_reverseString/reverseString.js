const reverseString = function(information) {

    let divided = information.split("")

    divided.reverse()
    divided = divided.join("") //put the reversed string back into the variable

    return divided

};

console.log(reverseString("hello there!"))

// Do not edit below this line
module.exports = reverseString;
