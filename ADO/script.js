//Obter o tabuleiro
const tabuleiro = document.getElementById('tabuleiro');

let pecaSelecionada = null;
let casaSelecionada = null;


//Cria o tabuleiro 8 x 8 - for aninhado
for (let linha = 0; linha < 8; linha++) {
    for (let coluna = 0; coluna < 8; coluna++){
        //Solicito a criação de uma div no documento
        const casa = document.createElement('div');

        //Adicionar uma classe a esta casa
        casa.className = 'casa';

        //Armazenar as coordenadas da casa
        casa.dataset.linha = linha;
        casa.dataset.coluna = coluna;

        //Vamos fazer a alternância de cores
        if ((linha +coluna) % 2 == 0){
            casa.classList.add('branca')
        }

        //colocando as peças do jogo
        if(linha < 4 ) {
            const peca =document.createElement('div')
            peca.className= 'peca vermelha';
            peca.dataset.cor = 'vermelha';
            casa.appendChild(peca);

        }
        else if (linha > 4) {
            const peca = document.createElement('div');
            peca.className = 'peca azul';
            peca.dataset.cor = 'azul';
            casa.appendChild(peca);


        }

        tabuleiro.appendChild(casa);

    }
}
