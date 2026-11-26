

const palavras = [
    "casa", "gato", "bola", "pato", "mesa", "lixo", "rosa", "faca", "vela", "tela"
]



const sorteada = palavras[Math.floor(Math.random() * palavras.length)];


const inputs = document.querySelectorAll(".palavra input");
const verificar = document.getElementById("verificar");

verificar.addEventListener("click", () => {

    const linha = corpoTabela.insertRow();


    
    inputs.forEach((input, i) => {

        linha.insertcell().textContent = input.value;

        if (input.readOnly) {
            return;
        }
        

        if (input.value === sorteada[i]) {
            input.readOnly = true;
        }
        else {
            input.value = "";
        }
    });
    if ([...inputs].every((input, 1) => input.value === sorteada[1])) {
        alert("Parabéns! Você acertou a palavra!");
    }
});