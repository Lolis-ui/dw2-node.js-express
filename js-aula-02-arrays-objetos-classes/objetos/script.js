document.writeln(`<h4>Objetos literais possuem atributos (propriedades) e Métodos (funções)</h4>`);

const pessoa = {}
document.writeln(typeof(pessoa))

//criando um objeto
const carro = {
    //propriedades
    modelo: "gol",
    cor : "vermelho",
//Métodos
    acelerar() {
        return "Acelerando...";
    },
    frear () {
        return "Freando...";
    }
};
document.writeln(`<p>O modelo do carro é: ${carro.modelo}</p>`);
document.writeln(`<p>A cor do carro é: ${carro.cor}</p>`);
document.writeln(`<p>quando o carro acelera: ${carro.acelerar()}</p>`);
document.writeln(`<p>Ativando os freios:  ${carro.frear()}</p>`);

//Manipulando Arrays de objetos
const productlist = [
{
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho",
}
,{
    nome: "tablet",
    marca: "samsung",
    preco: 2000,
    descricao: "Otíma velocidade de processamento",
},
{
    nome: "celular",
    marca: "Apple",
    preco: 12000,
    descricao: "Ultra resistente",
}];

//Exibindo o array de objetos através do forEach
document.writeln(`<h4>Exibindo o array de objetos através do forEach</h4>`)
productlist.forEach((product) => {
    document.writeln(`
        Produto: ${product.nome} <br>
        Marca: ${product.marca} <br>
        Preço: R$ ${product.preco} <br>
        Descricão: ${product.descricao}<br><br>
        `);
});