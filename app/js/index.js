const frutas = ["Maçã", "Banana", "Melão"];

//console.log(frutas[2]);

for(let cont = 0;cont < frutas.length;cont++) {
    console.log('(for)', frutas[cont]);
}

frutas.forEach(function(f) {
    console.log('(forEach)', f);
});

frutas.map(function(f) {
    console.log('(map)', f);
});