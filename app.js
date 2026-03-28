alert('Boas vindas ao jogo do Número Secreto!');
let numeroSecreto = 17; // Número secreto definido para o jogo
console.log(numeroSecreto);
let chute;
let tentativas = 1; // Variável para contar o número de tentativas do jogador

//Loop para continuar pedindo um chute até que o jogador acerte o número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha o número entre 1 e 30');

    // Lógica para verificar se o chute é igual ao número secreto, ou se é maior ou menor
    if (numeroSecreto == chute) {
        alert('Parabéns, você acertou! O número secreto era ' + numeroSecreto + '! Você acertou em ' + tentativas + ' tentativas!');
    } else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor do que ' + chute);
        } else {
            alert('O número secreto é maior do que ' + chute);
        }
        tentativas++; // Incrementa o número de tentativas a cada chute errado
    }
}

