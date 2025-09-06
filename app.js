"use strict"

import produtos from "./produtos_atualizados.json" with {type: "json"}

function criarEstrelas(nota) {
    let estrelas = ""
    for (let i = 1; i <= 5; i++) { //loop que vai de 1 até 5
        estrelas += i <= nota ? "★" : "☆" //se o indice for menor ou igual a nota, ele adiciona estrela preenchida
    }                                      //se não ele adiciona estrela vazia
    return estrelas
}

function criarCards(cards) {
    const divConjuntoCards = document.getElementById('containerCards')
    const divCard = document.createElement('div')

//    Função de click no botão
    function clickCard(){
        alert(`O produto ${cards.nome}\nestá disponível por ${cards.preco}. Aproveite!`)
    }
    divCard.addEventListener('click', clickCard)



    const imagemProduto = document.createElement('img')
    const nomeProduto = document.createElement('span')
    const descricaoProduto = document.createElement('p')
    const classificacaoProduto = document.createElement('span')
    const precoProduto = document.createElement('span')

    divCard.classList.add('card')

    imagemProduto.classList.add('imgProduto')
    nomeProduto.classList.add('nomeProduto')
    descricaoProduto.classList.add('descricao')
    classificacaoProduto.classList.add('classificacao')
    precoProduto.classList.add('preco')

    imagemProduto.src = "img/" + cards.imagem
    nomeProduto.textContent = cards.nome
    descricaoProduto.textContent = cards.descricao
    classificacaoProduto.textContent = 'Classificação: ' + criarEstrelas(cards.classificacao)
    precoProduto.textContent = cards.preco

    divConjuntoCards.appendChild(divCard)
    divCard.append(imagemProduto, nomeProduto, descricaoProduto, classificacaoProduto, precoProduto)

}

function carregarCards() {
    produtos.forEach(criarCards)
}
carregarCards()

