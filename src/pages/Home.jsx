// src/pages/Home.jsx

//IMPORTANDO A BIBLIOTECA BASE DO REACT--------------------------------------------
import React from "react"; //necessária para que o código 
// consiga entender e montar a estrutura de tags

// NOVO: Importa o componente PromoCard (estava faltando)
import PromoCard from "../components/PromoCard";

// NOVO: Importa o Logo
import logo from "../assets/logo.png"; // Usando o nome "logo" que você mencionou

//IMPORTANDO IMAGENS --------------------------------------------------------------
// CORRIGIDO: Caminho para as imagens. 'src/pages' para 'src/assets'
import promobatata from "../assets/promobatata.jpg"; 
import caipirinhaemdobro from "../assets/caipirinhaemdobro.jpg";

//DECLARAÇÃO DO COMPONENTE PRINCIPA ------------------------------------------------
export default function Home(){
     //ESTRUTURA DOS DADOS
   const promos = [
    {
      id: 1,
      title: 'Promo do Dia:',
      subtitle: 'Batata com Cheddar e Bacon!!',
      price:'39,90',
      image: promobatata //usando a variável importada
    },
    {
      id: 2,
      title:'Promo da Noite:',
      subtitle:'Caipirinha em Dobro!!!',
      price:'20,00',
      image: caipirinhaemdobro //usando a variável importada
    },
    {
      id: 3,
      title:'Em Breve',
      subtitle:'Novidades chegando...',
      price:'----'
   }
  ];

// Retornando o Desenho (JXS) - tudo aqui dentro é oq será transformado em HTML e será exibido na tela 
  return ( // esse parentese agrupa o código JXS (estrtura visual) que eu quero que PromoCard devolva
   <div>
    {/* NOVO: Adiciona a tag para o logo (usando style temporário) */}
    <h1>PIXEL PUB</h1>
    <p>Seu Espaço de jogos e diversão!!!</p>
    <div className="promo-grid">
    {
        //itera sobre o array 'promos' para criar um PromoCard para cada item
         promos.map(p => (
         <PromoCard
            key={p.id} //chave única para o React identificar cada item
            {...p} //passa TODOS os dados (inclusive as imagens) para o PromoCard
         />
        ))

      }
    </div>
  </div>
 );
}