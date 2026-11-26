
/*

const botao = document.querySelector('button');

botao.style.position = 'absolute';

//Realizar o click no botão e exibir um alerta
botao.onclick = () => {
    alert('PARABENS!!!  Você clicou no botão');
    
}

*/


//Para criar eventos em um determinado elemento
botao = addEventListener("click", () => {
    alert('PARABENS!!!  Você clicou no botão');
});


/*
// Colocar o botão em uma posição aleatória na tela
botao.onmouseover = () => {
    //Fazer o botão sumir
    botao.style.visibility = 'hidden';

    //top, left, right, bottom
    botao.style.left = Math.random() * 1000 + 'px';
    botao.style.top = Math.random() * 500 + 'px';
    

    // Fazer o botão reaparecer
    botao.style.visibility = 'visible';
}
*/

