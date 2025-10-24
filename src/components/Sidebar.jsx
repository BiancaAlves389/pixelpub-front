import React from "react";
import { Link } from 'react-router-dom'

//importando as imagens do icon 
import iconHome from '../assets/icon_home.png';
import iconCadastro from '../assets/icon_cadastro.png';
import iconEstoque from '../assets/icon_estoque.png';
import iconReserva from '../assets/icon_reserva.png';

//DEFININDO COMPONENTE SIDEBAR
export default function Siderbar() {
  return (
    //lista de navegação --- adicionando as imagens do canva dos icons 
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <img src={iconHome} alt="Home" className="sidebar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/cadastro">
          <img src={iconCadastro} alt="Cadastro" className="sidebar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/estoque">
          <img src={iconEstoque} alt="Estoque" className="sidebar-icon" />
          </Link>
        </li>
          <li>
            <Link to="/reserva">
            <img src={iconReserva} alt="Reserva" className="sidebar-icon" />

            </Link>
          </li>
      </ul>
    </div>
  )
}