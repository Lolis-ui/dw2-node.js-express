//classes no JavaScript
 //nome de classes devem iniciar com a primeira letra maiuscula
class Carro {
   //definindo atributos
   constructor(marca,modelo,ano){
    //"this" é uma refêrencia às instâncias que serão craidas através dessa classe
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    //Definindo os métodos
    }
     buzinar(){
        return "Beep! Beep!";
    }
     turbo() {
        return "Vruummm!!!";
     }
   }

//Instânciando objetos
const carroPopular = new Carro("Fiat","Uno","2012");
const carroEsportivo = new Carro("Chevrolet", "Camaro", "2020")
document.writeln(`<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando buzina faz ${carroPopular.buzinar()}</p>`);
document.writeln(`<p>O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e seu motor turbo faz ${carroEsportivo.turbo()}</p>`);

