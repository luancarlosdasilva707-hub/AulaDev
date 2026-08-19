function saudar(){
    console.log("ola");
}

saudar();

function saudar(nome){
    console.log("ola ",nome);
}

saudar("Maria");
saudar("Joaõ");
saudar("Luan Caralhos da Silva");

function somar ( a,b){
    return a + b;
}
let resultado = somar (5,3);
console.log(resultado); //8

function minus ( a,b){
    return a - b;
}
let resultado2 = minus (5,3);
console.log(resultado2);

function multiply ( a,b){
    return a * b;
}
let resultado3 = multiply (5,3);
console.log(resultado3);

function divide ( a,b){
    return a / b;
}
let resultado4 = divide (5,3);
console.log(resultado4);

function maiorDeidade(idade){
    return idade>=18;
}
console.log(maiorDeidade(20));//true
console.log(maiorDeidade(15));//false


function dobro (a){
    return a*2
}
console.log(dobro(2));//4
//saudações
function saudar(){
   console.log ("Salve");
}
saudar()


function oi(nome) {
    console.log("Olá " + nome);
}

oi("Pedro");
oi("Luan");
oi("Pedro augusto ");


//soma
function somar(a,b){
    return a+b;
}

let resultado6=somar(40,27);
console.log(resultado6);



//dobro
function dobro(a,b){
    return a*b

}
let total=dobro(4,2);
console.log(total);

//maior ou nao de idade com boolean
function maiorDeidade(idade){
    return idade>=18
}

console.log(maiorDeidade(20));
console.log(maiorDeidade(15));


//maior ou nao de idade com boolean com if
let adulto = idadeY >=18 && idadeY < 60; 
    if (adulto)
        console.log("Adulto");
    else
        console.log("Não é adulto");

