let temperaturas = [-23,23,22,22,26,-28,27,23]
let soma = 0;
let maxima = temperaturas[0];
let minima = temperaturas[0];

for (let i of temperaturas) {
    if (i > maxima) {
        maxima = i
    }
    if (i < minima) {
        minima = i
    }
    soma += i
}   

let media = soma / temperaturas.length


console.log('média', media)
console.log('máxima', maxima)
console.log('minima', minima)