

//Jogo da velha
var tabuleiro = new Array( "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11","12", "13", "14", "15" );
var tabuleiroBool = new Array( "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0","0","0","0" );
var tabuleiroBoolAux = new Array( 16 );
var vezDoJogador =1;
var jogador1 =0, jogador2 =0;
var numCliques = 0;
var acertos = 0;
var indiceCartaAnterior = -1;
var cartaAtual = -1;
//var tamanhoDoArray = tabuleiro.length;


function verificaJogada( indice ) {
  console.log('vez do jogador' + vezDoJogador);
    if ( tabuleiroBool[ indice ] == 0 ) {
      tabuleiroBool[ indice ] = 1;
      numCliques++;

      carta = parseInt( tabuleiro[ parseInt( indice ) ] );
      visualizarCarta( carta, indice );

      if ( numCliques % 2 != 0 ) {
          indiceCartaAnterior = indice;
      } else if ( ( tabuleiro[ indice ] % 8 ) == ( tabuleiro[ indiceCartaAnterior] % 8 ) ) {
        if(vezDoJogador ==1){
          jogador1++;
        }else{
          jogador2++;
        }
          acertos++;
          if ( acertos == tabuleiro.length / 2 ) {
            alert('O jogo acabou.');
            if(jogador1>jogador2){
              alert('jogador 1 ganhou, ele fez ' + jogador1 + ' combinações!!');
            }else if(jogador2>jogador1){
              alert('jogador 2 ganhou, ele fez ' + jogador2 + ' combinações!!');;
            }else{
              alert('empate, o jogador 1 fez ' + jogador1 +' combinações e o jogador 2 fez '+ jogador2 + ' combinações' );
            }
          }
      } else {
        vezDoJogador = (vezDoJogador % 2) + 1;
          cartaAtual = indice;

          trava( 1 );
          setTimeout( "trava( 0 );", 1000);
          setTimeout( "esconderCarta( indiceCartaAnterior );", 1000 );
          setTimeout( "esconderCarta( cartaAtual );", 1000 );

      }
    }
    return;
}
function embaralhaCartas() {
            embaralhado = -1;
            for ( i = 0; i < 16; i++ ) {
            embaralhado = Math.round( Math.random() * ( tabuleiro.length - 1 ) );
            aux = tabuleiro[ embaralhado ];
            tabuleiro[ embaralhado ] = tabuleiro[ i ];
            tabuleiro[ i ] = aux;
            }
        }


function visualizarCarta( carta, indice ) {
    endereco = "imagens/carta" + ( carta % 8 ) + ".bmp";
    document.campo[ indice ].src = endereco;
}


function esconderCarta( indice ) {
    document.campo[ indice ].src = "imagens/back.bmp";
    tabuleiroBool[ indice ] = 0;
}


function novoJogo() {
    embaralhaCartas();
    acertos = 0;
    numCliques = 0;
    indiceBotaoClicado = -1;

    for ( i = 0; i < tabuleiro.length; i++ ) {
      esconderCarta( i );
    }
    alert('novoJogo')

    return;
}

  function trava( valorBool ) {
    if ( valorBool == 1 ) {
      for ( i = 0; i < tabuleiroBool.length; i++ ) {
          tabuleiroBoolAux[ i ] = tabuleiroBool[ i ];
          tabuleiroBool[ i ] = 1;
      }
    } else if ( valorBool == 0 ) {
      for ( i = 0; i < tabuleiroBool.length; i++ ) {
          tabuleiroBool[ i ] = tabuleiroBoolAux[ i ];
      }
    }

    return;
}
