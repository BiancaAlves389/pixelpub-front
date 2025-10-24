import React, { useState } from 'react';

// DEFINIÇÃO DO COMPONENTE 
export default function Reserva() {
    
    const [formData, setFormData] = useState({
        nome: '',
        pessoas: 1, // Começa com 1 pessoa - padrão
        data: '',
        hora: '',
        jogo: '', // Jogo ou Mesa desejada
    });

    // 2. FUNÇÃO PARA ATUALIZAR O ESTADO: chamada toda vez que o usuário digita algo ou muda o seletor.
    const handleChange = (e) => {
        // [e.target.name]: Usa o nome do input (ex: 'nome', 'data') como a chave do objeto e target.value: É o novo valor digitado.
        setFormData({
            ...formData, // Mantém os outros campos do formData intactos
            [e.target.name]: e.target.value, // Atualiza apenas o campo que mudou
        });
    };

    // 3. FUNÇÃO DE SUBMISSÃO: chamada quando o usuário clica no botão "Reservar".
    const handleSubmit = (e) => {
        e.preventDefault(); 

        // *************************************************************************
        // INTEGRAÇÃO API
              
        console.log("Dados de Reserva prontos para envio (JSON):", formData);
        
        alert(`Reserva de ${formData.nome} para ${formData.pessoas} pessoas enviada!`);
        
        // Opcional: Limpar o formulário após o envio
        setFormData({
            nome: '',
            pessoas: 1,
            data: '',
            hora: '',
            jogo: '',
        });
    };

    // --- RETORNO VISUAL (JSX) ---
    return (
        <div className="reserva-container">
            {/* O evento onSubmit chama nossa função handleSubmit */}
            <form className="reserva-form" onSubmit={handleSubmit}>
                <h3>Faça sua Reserva</h3>
                <p>Reserve sua mesa ou seu jogo preferido!</p>

                {/* CAMPO NOME */}
                <label htmlFor="nome">Nome Completo:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
                
                {/* CAMPO NÚMERO DE PESSOAS */}
                <label htmlFor="pessoas">Pessoas:</label>
                <input
                    type="number"
                    id="pessoas"
                    name="pessoas"
                    min="1" // Garante que o mínimo seja 1 pessoa
                    value={formData.pessoas}
                    onChange={handleChange}
                    required
                />
                
                {/* CAMPO DATA */}
                <label htmlFor="data">Data:</label>
                <input
                    type="date"
                    id="data"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    required
                />

                {/* CAMPO HORA */}
                <label htmlFor="hora">Hora:</label>
                <input
                    type="time"
                    id="hora"
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                    required
                />

                {/* CAMPO JOGO DESEJADO */}
                <label htmlFor="jogo">Jogo/Mesa Desejada (Opcional):</label>
                <input
                    type="text"
                    id="jogo"
                    name="jogo"
                    value={formData.jogo}
                    onChange={handleChange}
                />
                
                <button type="submit" className="reserva-button">Reservar</button>
            </form>
        </div>
    );
}