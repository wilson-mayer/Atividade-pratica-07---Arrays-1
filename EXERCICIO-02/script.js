// 2. Criar um array e percorrê-lo utilizando o loop for of
// a. Crie um array com o nome "numeros" e adicione 5 números de
// sua escolha
// b. Utilize o loop for of para percorrer o array e exibir a soma dos
// números na tela

let numerosArray = [1, 45, 69, 250, 301];
let soma = 0;

for (const numeros of numerosArray) {
    soma += numeros;
    document.write(soma, "<br>");
}