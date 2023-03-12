const botoesCarrosel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagen')


botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        console.log(indice)
        const imagenAtiva = document.querySelector('.ativa')
        const botaoSelecinado = document.querySelector('.selecionado')
        botaoSelecinado.classList.remove('selecionado')
        
        imagenAtiva.classList.remove('ativa')
        console.log(imagens)

        botao.classList.add('selecionado')
        imagens[indice].classList.add('ativa')
    })
})
