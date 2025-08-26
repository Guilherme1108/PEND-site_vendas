"use strict"

import produtos from "./produtos_atualizados.json" with {type: "json"}

function criarCards(cards) {
    const body = document.body
    const divContainer = document.createElement ('div')
  
    const divCard = document.createElement ('div')

    const imagemProduto = document.createElement('img')
    const nomeProduto = document.createElement('span')
    const descricaoProduto = document.createElement('p')
    const precoProduto = document.createElement('span')

    divContainer.classList.add('container')
   
    divCard.classList.add('card')

    imagemProduto.classList.add('imgProduto')
    nomeProduto.classList.add('nomeProduto')
    descricaoProduto.classList.add('descricao')
    precoProduto.classList.add('preco')

    imagemProduto.src = "img/" + cards.imagem
    nomeProduto.textContent = cards.nome
    descricaoProduto.textContent = cards.descricao
    precoProduto.textContent = cards.preco

    body.appendChild(divContainer)
    divContainer.appendChild(divConjuntoCards)
    divConjuntoCards.appendChild(divCard)
    divCard.append(imagemProduto, nomeProduto, descricaoProduto, precoProduto)

}
const divConjuntoCards = document.createElement ('div')
function carregarCards() {
    
    divConjuntoCards.classList.add('conjunto-cards')
    produtos.forEach(criarCards)
}

carregarCards()

