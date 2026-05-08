    const fs = require("fs");
    const path = require("path");

    // Lê o arquivo e divide em linhas (baixado de https://www.gutenberg.org/ebooks/results/)
    const nomeArquivo = "ocortico.txt";
    const conteudo = fs.readFileSync(path.join(__dirname, nomeArquivo), "utf-8");
    const linhas = conteudo.split(/\r?\n/);

    console.log("Nº de linhas:", linhas.length);
    console.log("Primeira linha:",linhas[0]);
    console.log("")

    let palavrabuscada = "lobo"
    console.log("A palavra buscada foi "+ palavrabuscada)

    let quantas = 0
    // Atravessar cada linha uma por uma:
    for(let linha of linhas) {
        let linhaMaisculo = linha.toUpperCase()
        linhaMaisculo = linhaMaisculo.replaceAll("-", " ");
        linhaMaisculo = linhaMaisculo.replaceAll(",", " ");
        linhaMaisculo = linhaMaisculo.replaceAll(";", " ");
        linhaMaisculo = linhaMaisculo.replaceAll(".", " ");
        let palavras = linhaMaisculo.split(" ");
        
        for(let palavra of palavras ){
            if(palavra == palavra.includes(palavrabuscada)){
                console.log(linhaMaisculo)
                quantas ++ 
            } 

        }
    }

    console.log("Quantas", quantas)

