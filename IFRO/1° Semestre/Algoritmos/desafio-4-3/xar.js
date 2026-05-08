let args = process.argv.slice(2);
let hex = args[0];
let chave = args[1];

let valorOriginal = parseInt(hex, 16);

let chaveNum = parseInt(chave);

let resultado = valorOriginal ^ chaveNum;

let charOriginal = String.fromCharCode(valorOriginal);

let charResultado = String.fromCharCode(resultado);

console.log(`\nOriginal:    ${charOriginal} (${valorOriginal})`);
console.log(`Chave:       xor ${chaveNum}`);
console.log(`Decifrado:   ${charResultado} (${resultado})\n`);