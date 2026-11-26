// Estou selecionando o span pelo id
const total = document.getElementById("total");
//Atribuir os 2 inputs ao mesmo tempo as suas variaveis
const [input1, input2] = document.querySelectorAll("input");
// configuração dos botoes mais e menos para cada contador

function configurarContador(input) {
    const [menos, mais] = input.parentElement.querySelectorAll("button");

    menos.addEventListener("click", () => {
        if (Number(input.value) > 0) {
            input.value = Number(input.value) - 1;
            atualizarTotal();
        }
        
        
    })
    //Configurar o botão mais
    mais.addEventListener("click", () => {
        if (Number(input.value) < 10) {
            input.value = Number(input.value) + 1;
        }
        atualizarTotal();

    })
    

}

configurarContador(input1);
configurarContador(input2);





//criando um objeto de funções -> atribuição com : e separação com ,
const operacoes = {
    //associando a string  "+" com a função que retorna a soma


    "+": (a,b) => a + b,
    "-": (a,b) => a - b,
    "*": (a,b) => a * b,
    "/": (a,b) => (b === 0 ? "Erro: Divisão por zero" : a / b),

};

document.querySelectorAll("[data-op]").forEach((botao) => {
    botao.addEventListener("click", () => {
        const a = Number(input1.value);
        const b = Number(input2.value);
        const resultado = operacoes[botao.dataset.op](a, b);
        
        input1.value = 0;
        input2.value = 0;
        total.textContent = resultado;
    })
})

