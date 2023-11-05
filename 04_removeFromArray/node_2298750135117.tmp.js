const removeFromArray = function(firstArray, ...removeArgs) {

    for(let i = 0; i < removeArgs.length; i++){ //percorre os argumentos

        let removeArg = removeArgs[i]; // variavel de cada elemento, em cada posição
        let newPos = firstArray.indexOf(removeArg); //procura o argumento a remover no array, e cria var

       while (newPos !==-1){ //enquanto existir esse elemento no array
            firstArray.splice(newPos, 1); //remover esse elemento do array
           
        }
    }
    return firstArray
};

console.log(removeFromArray([1,2,3,4,45,3,8], 3))

// Do not edit below this line
module.exports = removeFromArray;
