// Associa o elemento personagem ao JS
const personagem = document.getElementById('personagem');

// Obter o elemento pai do personagem
const container = personagem.parentElement;

// Posição inicial -> offsetLeft -> distância do personagem em relação a margem esquerda do container
let posX = personagem.offsetLeft;

//Largura do personagem -> offsetWidth -> largura em pixels
const larguraPersonagem = personagem.offsetWidth

//Estabelecer os limites do container
const larguraMax = 600;
const alturaMax = 400;

//Evento que será acionado a partir do momento que alguém apertar uma tecla do teclado

document.addEventListener("keydown", (elemento) => {
    if(elemento.key === "ArrowRight") {
        if(posX + larguraPersonagem < larguraMax){
            posX += 10; //posX = posX + 10
            
        }

    } else if(elemento.key === "ArrowLeft"){
        if(posX > 0) {
            posX -= 10;
            
        }
    }
    personagem.style.left = posX + "px";
});

