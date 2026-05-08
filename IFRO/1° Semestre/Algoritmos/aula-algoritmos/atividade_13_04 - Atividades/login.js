let senhas = [1,2,3,4,5,6,7,8,9,"userhahahaha"];
let senhadigitada = process.argv.slice(2);
let conseguiuLogar = '';

for (let i = 0; i < senhas.length; i++) {
    if (senhadigitada[0] == senhas[i]) {
        conseguiuLogar = true
        break
    } else{
        conseguiuLogar = false
    }
};

if (conseguiuLogar == true) {
    console.log('Bem Vindo!')
}else{
    console.log('senha errada')
};