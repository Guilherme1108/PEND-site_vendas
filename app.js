"use strict"

import produtos from "./produtos_atualizados.json" with {type: "json"}

function criarCards(cards) {
    const divConjuntoCards = document.getElementById('containerCards')
    const divCard = document.createElement('div')

    const imagemProduto = document.createElement('img')
    const nomeProduto = document.createElement('span')
    const descricaoProduto = document.createElement('p')
    const precoProduto = document.createElement('span')

    divCard.classList.add('card')

    imagemProduto.classList.add('imgProduto')
    nomeProduto.classList.add('nomeProduto')
    descricaoProduto.classList.add('descricao')
    precoProduto.classList.add('preco')

    imagemProduto.src = "img/" + cards.imagem
    nomeProduto.textContent = cards.nome
    descricaoProduto.textContent = cards.descricao
    precoProduto.textContent = cards.preco

    divConjuntoCards.appendChild(divCard)
    divCard.append(imagemProduto, nomeProduto, descricaoProduto, precoProduto)

}

function carregarCards() {
    produtos.forEach(criarCards)
}

carregarCards()

