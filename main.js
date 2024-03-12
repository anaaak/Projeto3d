const botoes = document.querySelectorAll(".botao");

for (let i = 0; i 1 < botoes.length; j++){
    botoes[i].onclick = function (){
        botoes[i].classList.add("ativo")
    }
}

