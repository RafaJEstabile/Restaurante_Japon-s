let descontoAplicado = false; // Variável para verificar se o desconto já foi aplicado

// Função para carregar o carrinho e calcular o total
function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let carrinhoContainer = document.getElementById('carrinho-itens');
    let total = 0;

    // Limpa o container para evitar duplicações
    carrinhoContainer.innerHTML = '';

    // Verifica se o carrinho tem itens
    if (carrinho.length === 0) {
        carrinhoContainer.textContent = 'O carrinho está vazio.';
    } else {
        // Itera sobre os itens no carrinho
        carrinho.forEach(item => {
            if (item.nome && item.preco && item.quantidade) {
                // Exibe cada item no carrinho
                let itemDiv = document.createElement('div');
                itemDiv.textContent = `${item.quantidade}x ${item.nome} - R$${(item.preco * item.quantidade).toFixed(2)}`;
                carrinhoContainer.appendChild(itemDiv);

                // Soma ao total
                total += item.preco * item.quantidade;
            }
        });
    }

    // Atualiza o valor total no carrinho (sem desconto inicialmente)
    document.getElementById('total').textContent = `Total: R$${total.toFixed(2)}`;
}

// Função para aplicar o cupom de desconto
function aplicarCupom() {
    let cupom = document.getElementById('cupom').value.trim();
    let totalElement = document.getElementById('total');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let total = 0;

    // Recalcula o total do carrinho
    carrinho.forEach(item => {
        total += item.preco * item.quantidade;
    });

    // Verifica se o cupom é válido e ainda não foi aplicado
    if (cupom === '101708' && !descontoAplicado) {
        let desconto = total * 0.05; // Calcula 5% de desconto
        total -= desconto; // Aplica o desconto ao total
        descontoAplicado = true; // Marca como aplicado

        // Atualiza o total com o desconto
        totalElement.textContent = `Total com desconto: R$${total.toFixed(2)}`;
        alert(`Cupom aplicado! Você ganhou 5% de desconto.`);
    } else if (descontoAplicado) {
        alert('O cupom já foi aplicado.');
    } else {
        alert('Cupom inválido.');
    }
}

// Função para finalizar a compra
function finalizarCompra() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let total = 0;

    carrinho.forEach(item => {
        total += item.preco * item.quantidade;
    });

    // Se o desconto foi aplicado, recalcula o total com o desconto
    if (descontoAplicado) {
        let desconto = total * 0.05;
        total -= desconto;
    }

    alert(`O valor total da compra é: R$${total.toFixed(2)}`);

    // Limpa o carrinho após a compra
    localStorage.removeItem('carrinho');

    // Atualiza a interface para refletir o carrinho vazio
    carregarCarrinho();
}

// Chama a função carregarCarrinho quando a página for carregada
window.onload = carregarCarrinho;
