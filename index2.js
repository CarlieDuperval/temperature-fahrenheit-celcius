// Given a temperature in  F output in C
let fahren = 2;
const convertFafrenToCelci = (ftempeture) => {
    let result = (ftempeture - 32) * 5/9
    return result

}
const value = convertFafrenToCelci(fahren)
console.log(fahren, 'degre fahrenheit equal', value.toFixed(2), 'degre in celcisus')