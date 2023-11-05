const leapYears = function(year) {
    let result

    if((year % 4 === 0 && year % 100 !==0) || (year % 4 === 0 && year % 100 ===0 && year % 400 === 0)) {
        result = true

    } else {
        result = false
    }
    return result;
};

console.log(leapYears(1600))

// Do not edit below this line
module.exports = leapYears;
