// let soma = idade1 + idade2;
// let subtracao = idade1 - idade2;
// let multiplicacao = idade1 * idade2;
// let divisao = idade1 / idade2;
// let potencia = idade1 ** idade2; 
// let sqrt = idade1 ** (1/2);
// let resto = idade1 % idade2;

let num1 = 3;
let num2 = 10;
let tipo = "subtração";

// É maior > isso
// É menor < isso
// É igual a == isso
// É literalmente igual === isso
// É maior ou igual >= isso
// É menor ou igual <= isso
// ! negação, mentira
// Aqui é diferente != disso
// Aqui é literalmente diferente !== disso

// 13 == "13" converte o texto pra número, verdadeiro
// 13 === "13" não converte, então é falso
// 13 != "13" converte o texto pra número e 13 é igual a 13, mentira
// 13 !== "13" não converte, e texto é diferente de número, verdade

// uso mais comum === e !==

// boate 
// idade minima = 18
let idade1 = 17;
if (idade1 >= 30) { // retornar verdade || isso agora é mentira igual a 18 maior de 18 é mentira
    console.log("Eu posso entrar como vip na boate");
} else if (idade1 >= 18) { // 30 anos ou mais recebe vip
    console.log("Eu posso entrar na boate");
} else {
    console.log("Nem na boate eu devia entrar");
}

let nome = "Cassian";
if (nome === "Cassiano") {
    console.log("Opa Cassiano")
} else {
    console.log("Pessoa estranha");
}

// para a partir do momento que 1 condição for verdadeira

// tradução de if é SE, SE minha vó cagasse tijolo, eu teria um prédio, se eu tiver com vontade, eu saio de casa

// console.log(idade1); se aparecer 10 quer dizer que guardou o valor

// Exemplo: console.log("Olá);

// Pouco Legível: console.log("A soma da idade " + idade1 + " + " + idade2 + " é igual a " + soma);

// console.log(`A soma da idade ${idade1} + ${idade2} é igual a ${soma}`);
// console.log(`A subtração da idade ${idade1} - ${idade2} é igual a ${subtracao}`);
// console.log(`A multiplicação da idade ${idade1} * ${idade2} é igual a ${multiplicacao}`);
// console.log(`A divisão da idade ${idade1} / ${idade2} é igual a ${divisao}`);
// console.log(`A potência da idade ${idade1} ** ${idade2} é igual a ${potencia}`);
// console.log(`A raiz quadrada da idade ${idade1} ** (1/2) é igual a ${sqrt}`);
// console.log(`O resto da idade ${idade1} % ${idade2} é igual a ${resto}`);
