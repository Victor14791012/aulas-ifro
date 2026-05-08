let numero = [11,5,3,4,5,10,7,8,9,99];
let pico = []

for (let i = 0; i < numero.length; i++) {
    let anterior = numero[i-1] ?? -Infinity;
    let proximo = numero[i+1] ?? -Infinity;
 
    if (numero[i] > proximo && numero[i] > anterior) {
        pico.push(numero[i])
        continue
    }
    
}

console.log(pico)