let numero = [1,5,3,4,5,10,7,8,9,0];
let pico = []

for (let i = 0; i < numero.length; i++) {
    if (numero[i] > numero[i+1] && numero[i] > numero[i-1]) {
        pico.push(i)
        continue
    }
    
}

console.log(pico)