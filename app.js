let listaDeNumerosSorteados = [];
let numeroSecreto = 1;
//gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();


let localTentativas = document.querySelector('.texto');

function tentativasTotais() {
    let chancesTotais = 6;
    let chancesRestantes = chancesTotais - tentativas;
    if (chancesRestantes > 0) {
    } else {
        exibirTextoNaTela('h1', 'Suas tentativas acabaram!');
        document.getElementById('chutar').setAttribute('disabled', true);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    localTentativas.innerHTML = 'Tentativas restantes: ' + chancesRestantes;
}

function verificarChute() {
    let chute = document.querySelector('input').value; //value serve para que o visual me retorne o valor que foi colocado dentro do input
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);
        exibirTextoNaTela('p', mensagemTentativas);
        tentativas++;
        tentativasTotais();
        exibirTextoNaTela('h1', 'Parabéns!');
    } else if (chute > 10 || chute < 1) {
        alert('Digite um número de 1 a 10')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
            tentativas++;
            tentativasTotais();
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
            tentativas++;
            tentativasTotais();
        }
    }
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosLista == 3) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo() {
    chancesRestantes = 6;
    localTentativas.innerHTML = 'Tentativas restantes: 5'
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
    exibirMensagemInicial();
}
