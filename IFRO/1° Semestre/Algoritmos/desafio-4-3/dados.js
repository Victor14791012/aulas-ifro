let numerodelados = process.argv.slice(2);
let lados = parseInt(numerodelados[0])
console.log("Números de Lados: "+lados)

let aleatorio = Math.round(Math.random()*lados +1)
console.log("Primeiro: "+aleatorio)

let aleatorio2 = Math.round(Math.random()*lados +1)
console.log("Segundo: "+aleatorio2)

let maiorSorteado = Math.max(aleatorio, aleatorio2)

console.log("Melhor: "+ maiorSorteado)