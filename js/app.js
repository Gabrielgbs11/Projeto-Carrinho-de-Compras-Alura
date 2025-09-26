// Cria uma variável para guardar o total do carrinho, começando em zero.
let valorTotalCarrinho = 0;
// Define o texto inicial do valor total na tela como "R$ 0" assim que a página carrega.
document.getElementById('valor-total').innerHTML = 'R$0';
// Limpa qualquer conteúdo de exemplo da lista de produtos ao carregar a página.
document.getElementById('lista-produtos').innerHTML = '';


// Função principal, executada ao clicar no botão "Adicionar".
function adicionar () {
    // Captura o elemento HTML do seletor de produtos.
    let produtoSelecionado = document.getElementById('produto');
    // Captura o elemento HTML do campo de quantidade.
    let campoQuantidade = document.getElementById('quantidade');

    // Extrai o texto do produto selecionado (ex: "Celular - R$1400").
    let produtoInfo = produtoSelecionado.value;
    // Divide o texto em um array para separar nome e preço.
    let separadorText = produtoInfo.split(' - ');
    // Guarda o nome do produto (primeira parte do array).
    let nomeProduto = separadorText[0];
    // Guarda o preço ainda como texto (ex: "R$1400").
    let precoComSimbolo = separadorText[1];
    // Remove o "R$" do texto do preço.
    let precoLimpo = precoComSimbolo.replace('R$', '');
    // Converte o texto do preço já limpo para um número.
    let precoProduto = parseInt(precoLimpo);

    // Declara a variável quantidade antes da verificação.
    let quantidade;
    // Verifica se o campo de quantidade está vazio.
    if(campoQuantidade.value == '') {
        // Se estiver vazio, define a quantidade como 1.
        quantidade = 1;
    } else {
        // Caso contrário, converte o valor digitado pelo usuário para um número.
        quantidade = parseInt(campoQuantidade.value);
    }

    // Calcula o subtotal (preço do item * quantidade).
    let subtotal = quantidade * precoProduto;
    // Soma o subtotal ao valor total acumulado do carrinho.
    valorTotalCarrinho = valorTotalCarrinho + subtotal;

    // Captura a área da tela onde a lista de produtos é exibida.
    let carrinhoDeProdutos = document.getElementById('lista-produtos');
    // Cria a string HTML para o novo produto a ser adicionado, usando as variáveis.
    let produtoHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;
    // Adiciona o HTML do novo produto à lista na tela, sem apagar os anteriores.
    carrinhoDeProdutos.innerHTML += produtoHTML;

    // Cria a string de texto para exibir o valor total atualizado.
    let mensagemTotal = (`R$${valorTotalCarrinho}`);
    // Captura a área da tela onde o valor total é exibido.
    let CampoValorTotal = document.getElementById('valor-total');
    // Atualiza o valor total na tela com o novo total.
    CampoValorTotal.innerHTML = (mensagemTotal);
    // Limpa o campo de quantidade para a próxima digitação.
    campoQuantidade.value = '';
}

// Função para limpar o carrinho, executada ao clicar no botão "Limpar".
function limpar(){
    // Limpa o conteúdo HTML da lista de produtos.
    document.getElementById('lista-produtos').innerHTML = '';
    // Reseta o texto do valor total na tela para "R$0".
    document.getElementById('valor-total').innerHTML = 'R$0';
    // Zera a variável que armazena o total do carrinho.
    valorTotalCarrinho = 0;
}