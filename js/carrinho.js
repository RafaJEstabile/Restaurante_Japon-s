// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(nome, preco) {
    // Obtém a quantidade correta do input associado ao item específico
    let quantidadeInput = document.querySelector(`.quantidade[data-nome="${nome}"]`);
    let quantidade = parseInt(quantidadeInput.value, 10) || 1;

    // Obtém o carrinho do localStorage ou cria um novo array se estiver vazio
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verifica se o item já está no carrinho
    let itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
        // Se o item já está no carrinho, atualiza a quantidade e o preço
        itemExistente.quantidade += quantidade;
        itemExistente.preco = preco;
    } else {
        // Se o item não está no carrinho, adiciona um novo item
        let item = { nome: nome, preco: preco, quantidade: quantidade };
        carrinho.push(item);
    }

    // Atualiza o localStorage com o novo carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${nome} foi adicionado ao carrinho! - cupom de 5%:101708`);
    
}




// Função para redirecionar para a página do carrinho
function irParaCarrinho() {
    window.location.href = '../html/carrinho.html';
}
