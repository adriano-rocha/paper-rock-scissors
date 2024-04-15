var frase = document.getElementById("frase");
var jogador = document.getElementById("jogador");
var pc = document.getElementById("pc");
var botao = document.getElementById("botao");
var areaEscolha = document.getElementById("area-escolha");
var areaResultado= document.getElementById("area-resultado");


var imagens_jogador = ["img/pedra.png", "img/papel.png", "img/tesoura.png"];
var imagens_pc = ["img/pc-pedra.png", "img/pc-papel.png", "img/pc-tesoura.png"];


var index = 0;



function efeitoImagem () {
    jogador.src = imagens_jogador[index];
    pc.src = imagens_pc[index];


    index++;
    if(index === 3) {
        index = 0;
    }
}

//efeito de escolher
var efeito = setInterval(efeitoImagem,100);



function select(escolhaJogador) {
    //esconder opções
    areaEscolha.style.display = 'none';

    //esconder animação
    areaResultado.style.display = 'block';

    //começar contador
    frase.textContent = '3';

    //ativar cronometro
    var tempo = setInterval(() => {
        var cronometro = parseInt (frase.textContent);
        cronometro--;
        frase.textContent = cronometro;

        //parar quando chegar em zero
        if(cronometro === 0) {
            clearInterval(tempo);
            clearInterval(efeito);
        }

    }, 1000);

    //regras do jogo
    setTimeout(() => {
   //randomizar a escolha do PC
   var escolhaPC = Math.floor(Math.random()*3);

   //Mostrar a escolha do PC
   pc.src = imagens_pc[escolhaPC];

   //Mostrar a escolha do jogador
   jogador.src = imagens_jogador[escolhaJogador];

   //verificar se foi empate
   if(escolhaJogador === escolhaPC){
    frase.textContent = 'Empatou!';
    botao.style.display = 'block';
    return false;
   }

   //verificar vitoria 
   switch(escolhaJogador){
    case 0: //esolheu pedra
    escolhaPC === 2 ? frase.textContent = "Você Ganhou!" : frase.textContent = "Você Perdeu!";
    botao.style.display = 'block';
    break;
    case 1: //esolheu papel
    escolhaPC === 0 ? frase.textContent = "Você Ganhou!" : frase.textContent = "Você Perdeu!";
    botao.style.display = 'block';
    break;
    case 2: //esolheu tesoura
    escolhaPC === 1 ? frase.textContent = "Você Ganhou!" : frase.textContent = "Você Perdeu!";
    botao.style.display = 'block';
    break;
    default:
        alert('Ecolha Inválida');


   }


    }, 3000);


}
