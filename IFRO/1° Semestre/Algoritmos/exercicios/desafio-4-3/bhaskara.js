let argumentos = process.argv.slice(2);
let a = parseInt(argumentos[0])
let b = parseInt(argumentos[1])
let c = parseInt(argumentos[2])

console.log("Coeficientes: a=" + a + "b= " + b + "c= " + c)

let calculoDelta = (b*b) - (4*a*c)
console.log("Delta: " + calculoDelta)

let calculoX1 = ((-b) + Math.sqrt(calculoDelta))/2*a
console.log("x1: " + calculoX1)

let calculoX2 = ((-b) - Math.sqrt(calculoDelta))/2*a
console.log("x2: " + calculoX2)