let alunostxt = 'a ';

let alunos = alunostxt.split("\n")

for (let i = 0; i < alunos.length; i++) {
        if(alunostxt.length ==0 ) {
            continue;
        }
    let alunos = alunostxt[i];
    let quebra = alunos[i].split(" ")
    let primeiroNome = quebra[2];
    let ultimoNome = quebra[quebra.length - 1]
    console.log(primeiroNome,ultimoNome)
    i++
}