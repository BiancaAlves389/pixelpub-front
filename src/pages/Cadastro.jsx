
import React, { useState } from 'react'// "useState" = é oq permite que o componente lembre e atualize os dados

export default function Cadastro() {

 /* DEFININDO O STATE --- Inicia um objeto e guarda oq o usuário digita nos campos*/
   const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  // FUNÇAÕ PARA ATT O STATE --- chama toda vez q o valor do <input> muda
   const handleChange = (e) => {
   setFormData({ //"FormData" = copia todos os dados antigos
    ...formData,
    [e.target.name]: e.target.value //atualiza SÓ o campo que foi alterado

    })
  };

  //FUNÇAÕ PARA ENVIAR O FORM
  const handleSubmit = (e) => {
  e.preventDefault(); // impede a página de recarregar

      //Simulação de envio de dados -----
    console.log('Dados a serem enviados:', formData);
     // CORRIGIDO: Troca de aspas simples por CRASES (`) para o $() funcionar.
    alert(`Dados prontos para envio:\nNome: ${formData.nome}\nEmail: ${formData.email}`); // anotações pessoais: $ antigo (+)

};

   //DESENHO------------------
   return(
     <div className="cadastro-container">
      <h2>Tela de Cadastro de Usuário</h2>

       <form onSubmit={handleSubmit} className="cadastro-form"> {/* onSubmit chama a função handleSubmit quando o botão submit for clicado */}
       {/*CAMPO NOME */}
      <label htmlFor="nome">Nome:</label>
        <input
            type="text"
            id="nome"
            name="nome" 
            value={formData.nome} //Valor exibido, controlado pelo State
            onChange={handleChange} //atualiza o state a cada tecla
            required
          />

       {/*CAMPO EMAIL*/} 
        <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

        {/*CAMPO SENHA*/}
         <label htmlForm="senha">Senha:</label>
           <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />

           {/*BOTÃO DE ENVIO*/}
            <button type="submit">Cadastrar</button>
           </form>
       </div>
  );
}