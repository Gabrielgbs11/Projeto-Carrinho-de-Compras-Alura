   -Descrição do Projeto
Este projeto é uma aplicação front-end que simula a funcionalidade de um carrinho de compras. 
O objetivo principal foi aplicar e solidificar conceitos fundamentais de lógica de programação utilizando JavaScript puro (Vanilla JS), manipulando elementos HTML e CSS de forma dinâmica.

 -Tecnologias Utilizadas
HTML5: Estruturação semântica do conteúdo.
CSS3: Estilização e layout da aplicação.
JavaScript (Vanilla JS): Lógica principal e manipulação dinâmica da página.

  -Funcionalidades

[x] Adicionar Produtos: Selecionar um produto de uma lista e adicioná-lo ao carrinho.

[x] Definir Quantidade: Especificar a quantidade de itens para cada produto.

[x] Atualização Dinâmica: O carrinho é atualizado visualmente em tempo real a cada adição.

[x] Cálculo de Subtotal: O valor total para cada linha de produto (preço x quantidade) é calculado e exibido.

[x] Cálculo do Total Geral: O valor total de todos os itens no carrinho é calculado e atualizado continuamente.

[x] Limpar o Carrinho: Um botão permite resetar o carrinho, limpando todos os itens e zerando o valor total.

[x] Validação de Input: O sistema trata o caso em que o usuário não digita uma quantidade, assumindo o valor padrão de 1.

Principais Aprendizados
Este projeto foi uma imersão prática em conceitos cruciais do JavaScript no navegador. Os principais desafios e aprendizados foram:

1. Manipulação do DOM (Document Object Model)
Aprofundei meu conhecimento em como selecionar e alterar elementos HTML dinamicamente. O uso de document.getElementById() para capturar elementos e a propriedade .innerHTML para inserir e modificar conteúdo foram centrais para o funcionamento da aplicação. Também pratiquei a leitura de valores de campos de formulário com .value.
2. Manipulação de Strings e Tipos de Dados
Um dos maiores desafios foi processar o valor do produto, que vinha em uma única string (ex: "Celular - R$1400"). Aprendi a usar métodos como .split(' - ') para separar o nome do preço e .replace('R$', '')para limpar o texto. Em seguida, utilizeiparseInt()\ para converter a string limpa em um número, possibilitando os cálculos matemáticos.
3. Lógica Condicional e Depuração (Debugging)
Enfrentei e resolvi um bug onde o cálculo resultava em NaN (Not a Number). Isso me levou a implementar uma estrutura condicional if/else para validar o input da quantidade, garantindo que o programa não quebrasse com entradas vazias e tivesse um comportamento padrão amigável.
4. Escopo de Variáveis
Para que o valor total do carrinho persistisse entre as adições, aprendi na prática a importância do escopo. Declarei a variável valorTotalCarrinho fora da função adicionar() para que ela atuasse como uma "memória" global para a aplicação, um conceito fundamental que foi solidificado com este projeto.
