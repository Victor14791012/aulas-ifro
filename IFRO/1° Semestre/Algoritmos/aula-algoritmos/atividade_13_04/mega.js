let numeros = []

for (let i = 0; i < 6 ; i++) {
    let random = parseInt(Math.random() * 61) ;
    while(true) {
        if (!numeros.includes(random)) {
            numeros.push(random)
        } else{
            i--
            break
        }
    }    

if (numeros.length == 6) {
    break
}
}

console.log(numeros)


// let numeros = []

// for (let i = 1; i < 6 ; i++) {
//     let random = parseInt(Math.random() * 100) ;
//     for (let i = 0; i < 1 ; i++) {
//         if (random != numeros.includes(random)) {
//             numeros.push(random)
//         } else{
//             continue
//         }
        
//     }    

// if (numeros.length == 6) {
//     break
// }
// }

// console.log(numeros)