const removeFromArray = function(array, ...removeArgs) { //(...arguments) allow several arguments

    for(let i = 0; i < removeArgs.length; i++){ 

        let removeArg = removeArgs[i]; 
        let elementPosition = array.indexOf(removeArg); //finding the position of the first element of "removeArg" in the array

       while (elementPosition !==-1){ //while there is an element of arguments in the array
            array.splice(elementPosition, 1); //remove the element 
            elementPosition = array.indexOf(removeArg); // find the next position of the same element
        }
    }
    return array
};
console.log(removeFromArray([1, 2, 3], 4, 3))

// Do not edit below this line
module.exports = removeFromArray;
