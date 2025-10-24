import React, { useState } from 'react'; //usando useState a=para guardar a lista de produtos

export default  function Estoque() {
    //definindo state: lista de prod (estoque: guarda o array atual de produtos; setEstoque: função para add, remover ou editar itens)
    const [Estoque, setEstoque] = useState([

        {id: 1, nome:'Cerveja Artesanal IPA', quantidade: 50, precoCompra: 12.00},
        {id: 2, nome:'Batata de Carinha Congelada', quantidade: 80, precoCompra: 20.00},
        {id: 3, nome:'Vodka sem metanol', quantidade: 30, precoCompra: 25.00},
    ])

    //função de ex: simula a chegada de mais 10un de 1 iten
    const adicionarUnidade = (itemId) => {
        //setEstoque = cria novo array com mudança
        const novoEstoque = Estoque.map(item => { //verifica se é o item que quero mudar 
            if (item.id === itemId) {
                //se for retorna um novo objeto com a quantidade att
                return {
                    ...item, //copia todos os dados (nome, quantidade...)
                    quantidade: item.quantidade + 10 //altera somente a quantidade
                };

            }
            //caso nao seja o item, retorna sem alteração - obs bia
            return item;
        });
        //atualiza o estado com o novo array, forçando o react a redesenhar a tela
        setEstoque(novoEstoque);
    };
    //DESENHO TELINHA JSX ------------------------
    return (
        <div className='estoque-container'>
            <h2>GESTÂO DE ESTOQUE</h2>
            <p>pixel pub</p>

        {/*ESTRUTURA DA TAB*/}
        <table className='estoque-table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome do Produto</th>
                    <th>Quantidade</th>
                    <th>Custo de Compra</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {/*RENDERIZAÇÃO DA LISTA COM MAP (.map()= percorre o array 'estoque' e para cada item ele desenha uma linha (<tr) */}
                {Estoque.map((item) => (
                //key= obrigtoria no react, ajuda na identificação de qual item esta sebdo renderizado e a otimizar as att da lista
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.quantidade}</td>
                    <td>R$ {item.precoCompra.toFixed(2)}</td>
                    <td>
                        {/*BOTÃO DE ACÃO ------ onClick = chama a função de att passando o ID do item */}
                        <button onClick={() => adicionarUnidade(item.id)}>
                            +10 UN
                        </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}