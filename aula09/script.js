//alert("Hello world");
console.log("Hello world");
//tipos de variaveis.
let idade = 16; //number- numericolog
console.log(idade);

let nome = ("luan");//alphanumeric - varchar
console.log(nome);
let logado = true;
let lista = ["ovo" , "Farinha", " leite"]//array ou vetor
console.log(lista);
let nomecompleto = {nome: "luan", idade:16 }//objeto
console.log(nomecompleto);
console.log(nome, idade);
//operações  com variaveis
let valor1 = 10;
let valor2 = 20;
let resulatdo = valor1+ valor2;
console.log("Adição", resulatdo);
let resultado1 = valor2 - valor1
let resultado2 = valor1 * valor2
let resultado3= valor2/ valor1
console.log("subtração ",resultado1);
console.log("multiplicação ",resultado2);
console.log("divisão",resultado3);
//condicionais do IF ELSE
/*
>maior
>= maior ou igual
<menor
<=menor ou igual
== igual
=== igual porem analisa o tipo do dado number ou string 
!= diferente
!== diferente porem analisa o tipo de dado number ou string
*/
let idadex = 44
let idadestring = `${idadex} anos`;
console.log(idadestring);
if ( idadex == 43) {
    console.log("idade é 43");
    
}
else {
    console.log("Idade não é 43");
    
}
let idadeY = 22
    if (idadeY >=18) {
        if (idadeY <=60)
        {
            console.log("você é um adulto");
            
        }
    }
    else if (idadeY < 18 ){
        console.log("You are a stupid kid");
        
    }
    else {
        console.log("You are a deadly man");
        
    }
//vc pode fazer com multi condicionais
if (idadeY >=18 && idadeY <60)
    console.log("você é um adulto tbm");
else if (idadeY >60)
    console.log("Você é um idoso");
// # 16 17 - condicional dupla if else
if (idadeY<18)
    console.log("Você é menor de idade");
else if (idadeY>=17 && idadeY<60)
    console.log("você é um adulto");
else if (idadeY> 60)
    console.log("você é um idoso");
//exemplo com boolean
let verefica = true;

if ( verefica)
    console.log("Verdadeiro");
else
    console.log("Falso");
let adulto = idadeY >=18 && idadeY < 60; //retorna boleano
    if (adulto)
        console.log("Adulto");
    else
        console.log("Não é adulto");
//#18 tem exemplo de exercício

//#19 - condicionais ternário IF com uma linha só
let isMember = false;

let frete = isMember ? 2 : 10;
console.log("Frete: " + frete);
console.log(isMember ? "Sou Membro " : "Não sou membro");
//#20 switch

let profissao = "Bombeiro"

switch (profissao){
   case "policial":
        console.log("Azul");
        break;
    case "bombeiro":
        console.log("Vermelho");
        break;
    default : //Quando não encontra nenhuma das opções
        console.log("Nenhuma cor");
        break;
}
for (let i = 0 ; i < 5; i++){
    console.log("Número< " + i );
    
}
let x= 0;
while (x<5){
    console.log("Contagem: " + x);
    x++
}
 



        
    
        
    
    
    
    








