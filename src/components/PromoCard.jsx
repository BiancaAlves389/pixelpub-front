// src/components/PromoCard.jsx
//IMPORTANDO A BIBLIOTECA BASE DO REACT--------------------------------------------
import React from 'react'

//DEFININDO O COMPONENTE E RECEBENDO DADOS-----------------------------------------
//anotações: export default(permitem que outrso arquivos usem esse componente); função PromoCard(componente)
export default function PromoCard({title, subtitle, price, image}) {
  return (
    //RETORNO DO JSX (O parêntese envolve o JSX para que a função retorne o bloco de código completo.)
    <div className="promo-card">
    {
     //RENDERIZAÇÃO CONDICIONAL DA IMAGEM:desenhe o código que está à direita do '&&' (a div da imagem)
     image && (
     <div className="card-image-container">
      <img
          src={image} //'src'- recebe a URL da image(valor da variavel)
          alt={title} //'alt'- texto descritivo para acessibilidade
          className='promo-image'
        />
      </div>
      ) //abaixo: EXIBINDO DEMAIS DADOS (obs: a tag <b> negrita o texto do preço)
    }
    
        <h3>{title}</h3>
        <p>{subtitle}</p>
      <p>
        <b>R$ {price} </b> 
      </p>
    </div>
  )
  
}