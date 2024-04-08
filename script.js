// Selecionar os botões dos números
const botoesNumeros = document.querySelectorAll(".botoes-numeros");

// Definir a variável "numerosSelecionado" para o valor do texto do botão quando clicado
// Desabilitar botão quando clicado

// Desabilita apenas o botão do número selecionado
function apertouBotaoNumero(botao){
    botoesNumeros.forEach(b => b.disabled = false);
    botao.disabled = true;
}

botoesNumeros.forEach(botao => botao.addEventListener("click",function(){
    numeroSelecionado = botao.innerText;
    botaoNumeroSelecionado = botao;
    apertouBotaoNumero(botao.innerText);
}));

botoesNumeros.forEach(botao => botao.addEventListener("click",function(){
    apertouBotaoNumero(botao);
}));


// Selecionar os botões da tabela
const botoesTabela = document.querySelectorAll('.botoes-tabela');

// Atualizar o texto do botão da tabela pressionado para o número selecionado
botoesTabela.forEach(botao => botao.addEventListener("click",function(){
    botao.innerText = numeroSelecionado
}));


//---------------------------------------------------------------------------------------------
// Gerar tabela (números aleatórios na tabela de forma correta)

// Gerar 15 números na tabela
let numerosGerados = 0;
while (numerosGerados < 30){
    // Número aleatório e botão aleatório
    let numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    let indiceBotaoAleatorio = Math.floor(Math.random() * 81);
    let botaoAleatorio = botoesTabela[indiceBotaoAleatorio];

    // Apenas atualizar o innerText do botao se não contiver nenhum números ainda
    if (!([1,2,3,4,5,6,7,8,9].includes(parseInt(botaoAleatorio.innerText)))){
        botaoAleatorio.innerText = numeroAleatorio;
        botaoAleatorio.disabled = true;
        // botaoAleatorio.style.backgroundColor = "blue";
        numerosGerados++;
}};