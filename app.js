alert("Olá Bem vindo ao jogo do acerto!");
let numeroMaximo = 100;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while (chute != numeroSecreto) {
    chute = prompt(`Insira um numero de 1 a ${numeroMaximo}`);
    tentativas++;
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou! ${numeroSecreto} em ${tentativas} ${palavraTentativa}`);

