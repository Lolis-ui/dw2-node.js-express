//Daclarando e exibindo itens de um array
let produtos = []
document.writeln(typeof(produtos));

let products = ["computador","notebook","celular","tablet"];
document.writeln(`<p>${products}</p>`);

document.writeln(`<p>Exibindo os elementos do vetor através dos indices</p>`);
document.writeln(`<p>${products[0]}</p>`);
document.writeln(`<p>${products[1]}</p>`);
document.writeln(`<p>${products[2]}</p>`);
document.writeln(`<p>${products[3]}</p>`);

document.writeln(`<p>Exibindo os elementos do vetor através do forEach</p>`);
products.forEach(function(product) {
document.writeln(`<p>${product}</p>`);
})

document.writeln(`<p>Exibindo os elementos do vetor através do forEach COM OS INDICES</p>`);
products.forEach((product,i) => {
    document.writeln(`<p>${i+1} - ${product}</p>`);
})

//metodo de manipulação de vetores

let frutas = ["Laranja","Maça", "Banana"];
document.writeln(`<p>Nossa lista de frutas é: ${frutas}<p>`);
frutas[3] = 'Morango';
document.writeln(`<p>Agora nossa lista de frutas é: ${frutas}<p>`);

document.writeln(`<h4>O método Push - insere um novo elemento no FINAL do vetor</h4>`);
frutas.push(`Abacaxi`);

document.writeln(`<p>Agora nossa lista de frutas é: ${frutas}<p>`);

document.writeln(`<h4>O método Unshif - insere um novo elemento no COMEÇO do vetor</h4>`);
frutas.unshift(`Pera`);

document.writeln(`<p>Agora nossa lista de frutas é: ${frutas}<p>`);

//como contar os elementos de um vetor - Método LENGHT
const items  = frutas.length;
document.writeln(`<p>Nossa lista tem ${items} frutas <p>`);

