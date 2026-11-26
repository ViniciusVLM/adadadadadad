// Escolha de um seletor para realizar uma requisição no DOM
const h1 = document.querySelector('h1');
const Input = document.querySelector('#entrada');
const button = document.querySelector('button');
const ReportBody = document.querySelector('body');


button.onclick = () => {
    // .value traz i que foi digitado no input
    h1.innerHTML = Input.value;

    //Estilização do h1 e do body
    h1.style.color = 'red';
    ReportBody.style.backgroundColor = 'black';
    
}
