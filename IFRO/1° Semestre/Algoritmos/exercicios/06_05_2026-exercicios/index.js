
const produtos = [
    ["001",  "Arroz", 2, 10.00],
    ["002",  "Feijão", 1, 5.00],
    ["003",  "Leite", 3, 15.00],
    ["004",  "Batata", 4, 8.00],
    ["005",  "Cenoura", 5, 6.00],
    ["006",  "Tomate", 6, 12.00]
];
let tamnhoDaCaixa = 32
let tamanhoCaixaItem = tamnhoDaCaixa / produtos[0].length;

function centralizar(text,tamanho, orientacao) { 
    
    if (orientacao == 'c') {
        const terminalWidth = tamanho;
        const textLines = text.split('\n');
        textLines.forEach(linha => {
            let Nespaco = parseInt((linha.length + 2) - tamanho );
            let espaco = " ".repeat(parseInt(Math.abs(Nespaco/2)));
            console.log( espaco, linha , espaco)
        });
    } else if(orientacao == 'e'){
        const terminalWidth = tamanho;
        const textLines = text.split('\n');
        textLines.forEach(linha => {
            let Nespaco = parseInt((linha.length + 2) - tamanho );
            let espaco = " ".repeat(parseInt(Math.abs(Nespaco)));
            console.log(linha , espaco)
        });
    } else{
        const terminalWidth = tamanho;
        const textLines = text.split('\n');
        textLines.forEach(linha => {
            let Nespaco = parseInt((linha.length + 2) - tamanho );
            let espaco = " ".repeat(parseInt(Math.abs(Nespaco)));
            console.log( espaco, linha )
        });
    }
    
    
}



let listaCaracteres = function(tamanho, caractere){
    let parenteses = caractere.repeat(tamanho)
    console.log(parenteses)
}

let fraseTopo = function(frase){
    listaCaracteres(tamnhoDaCaixa,'=')
    let f = centralizar(frase, tamnhoDaCaixa , 'c')
    listaCaracteres(tamnhoDaCaixa,'=')
}

let totalDeTodosOsProdutos = 0

fraseTopo('MERCADO MAIS MAIS SUPER\nonde o preco e mais mais caro!')

for (let i = 0; i < produtos.length; i++) {
    let contaProdutoAtual = produtos[i][2] * produtos[i][3]
    contaProdutoAtual = parseFloat(contaProdutoAtual)
    totalDeTodosOsProdutos += contaProdutoAtual
    console.log(produtos[i][0], produtos[i][1],produtos[i][2], 'R$', contaProdutoAtual.toFixed(2))
    
}

listaCaracteres(tamnhoDaCaixa, '-')
centralizar('TOTAL R$'+  totalDeTodosOsProdutos.toFixed(2), tamnhoDaCaixa, 'c')

fraseTopo( 'OBRIGADO E VOLTE SEMPRE!' )

