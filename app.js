alert('Boas vindas ao jogo do Número Secreto!');
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute = prompt('Escolha o número entre 1 e 30');

//Loop para continuar pedindo um chute até que o jogador acerte o número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha o número entre 1 e 30');

    // Lógica para verificar se o chute é igual ao número secreto, ou se é maior ou menor
    if (numeroSecreto == chute) {
        alert('Parabéns, você acertou! O número secreto era ' + numeroSecreto);
    } else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor do que ' + chute);
        } else {
            alert('O número secreto é maior do que ' + chute);
        }
    }
}

