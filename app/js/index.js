const frutas = ["Maçã", "Banana", "Melão"];

//console.log(frutas[2]);

for(let cont = 0;cont < frutas.length;cont++) {
    console.log('(for)', frutas[cont]);
}

function processa(item) {
    console.log('(function)', item);
}

const retornoForEach = frutas.forEach(function(f) {
    console.log('(forEach)', f);
    return f.toUpperCase();
});

const retornoMap = frutas.map((f) => {
    console.log('(map)', f);
    return f.toUpperCase();
});

frutas.forEach((f) => processa(f));

console.log(retornoForEach);
console.log(retornoMap);

frutas.push("Morango");