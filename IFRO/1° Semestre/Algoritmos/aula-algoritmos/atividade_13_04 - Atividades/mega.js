let numeros = []

while(numeros.length != 6){
    let random = parseInt(Math.random() * 7) ;
    while(true) {
        if (!numeros.includes(random)) {
             if (random != 0) {
                numeros.push(random)
            }
        } else{
            break
        }
        
    }    
}

console.log(numeros)


// let numeros = []

// for (let i = 0; i < 6 ; i++) {
//     let random = parseInt(Math.random() * 61) ;
//     while(true) {
//         if (!numeros.includes(random)) {
//             if (random != 0) {
//                 numeros.push(random)
//             }
//         } else{
//             i--
//             break
//         }
//     }    

// if (numeros.length == 6) {
//     break
// }
// }
// console.log(numeros)