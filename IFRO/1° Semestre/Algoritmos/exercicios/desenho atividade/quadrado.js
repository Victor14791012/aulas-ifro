let simbolo = '═';
let tamanho = process.argv[2];

for (let i = 0; i < tamanho; i++) {
    let linha = '';

    if ( i === 0 ) {
        for (let j = 0; j < tamanho; j++) {
            if (j === 0) {
            linha +=  '╔'
            }else if(j === tamanho -1){
                linha +=  '╗'
            }
            else{
                linha +=  simbolo
            }
        }        
    } else if(i === tamanho -1){
         for (let j = 0; j < tamanho; j++) {
            if (j === 0) {
            linha +=  '╚'
            }else if(j === tamanho -1){
                linha +=  '╝'
            }
            else{
                linha +=  simbolo
            }
        }
    }else{
         for (let j = 0; j < tamanho; j++) {
            if (j === 0) {
            linha +=  '║'
            }else if(j === tamanho -1){
                linha +=  '║'
            }
            else{
                linha +=  " "
            }
        }
    }
   
    console.log(linha);
}


// refatorado pelo chat

/* 
let tamanho = process.argv[2];

for (let i = 0; i < tamanho; i++) {
    let linha = '';

    for (let j = 0; j < tamanho; j++) {

        // Cantos
        if (i === 0 && j === 0) {
            linha += '╔';
        } else if (i === 0 && j === tamanho - 1) {
            linha += '╗';
        } else if (i === tamanho - 1 && j === 0) {
            linha += '╚';
        } else if (i === tamanho - 1 && j === tamanho - 1) {
            linha += '╝';

        // Topo e base
        } else if (i === 0 || i === tamanho - 1) {
            linha += '═';

        // Laterais
        } else if (j === 0 || j === tamanho - 1) {
            linha += '║';

        // Meio
        } else {
            linha += ' ';
        }
    }

    console.log(linha);
} */