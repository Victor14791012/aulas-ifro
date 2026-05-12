let texto = ""

let largura = 20
let altura = 10
let quadro = []

for (let i = 0; i < largura * altura; i++) {
    quadro.push("#")
    
}

function principal(){

    for (let i = 0; i < largura * altura; i++) {
        let c = quadro[i]
        texto +=c
        if (i%largura == 0) {
            texto += "\n"
        }
        
    }

    
    console.clear()
    console.log(texto)
}
principal()
//setInterval(principal,100)