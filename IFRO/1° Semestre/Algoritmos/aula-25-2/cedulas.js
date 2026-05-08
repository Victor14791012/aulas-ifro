let argumentos = process.argv.slice(2);
let reais = parseInt(argumentos[0]);

console.log("Sacando",reais,"Reais...");

let notas100 = Math.floor(reais / 100);
reais = reais % 100;

let notas50 = Math.floor(reais / 50);
reais = reais % 50;

let notas20 = Math.floor(reais / 20);
reais = reais % 20;

let notas10 = Math.floor(reais / 10);
reais = reais % 10;

let notas5 = Math.floor(reais / 5);
reais = reais % 5;

let notas2 = Math.floor(reais / 2);
reais = reais % 2;

console.log("Notas de 100:", notas100);
console.log("Notas de 50:", notas50);
console.log("Notas de 20:", notas20);
console.log("Notas de 10:", notas10);
console.log("Notas de 5:", notas5);
console.log("Notas de 2:", notas2);
console.log("e sobrou:", reais, "Reais");