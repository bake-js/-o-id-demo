# -o-id Splitter Demo

Este é um projeto de demonstração que utiliza a biblioteca **-o-id** para criar um aplicativo simples de divisão de contas, chamado **-o-id Splitter**. Este demo destaca como usar componentes personalizados do **-o-id** para criar uma interface interativa e eficiente.

## Visão Geral

O **-o-id Splitter** permite que o usuário insira o valor total da conta, selecione uma porcentagem de gorjeta e especifique o número de pessoas entre as quais a conta deve ser dividida. O aplicativo então calcula a gorjeta por pessoa e o total por pessoa em tempo real, utilizando componentes reativos do **-o-id**.

## Tecnologias Utilizadas

- **-o-id**: Biblioteca principal para a criação de componentes Web personalizados.
- **JavaScript**: Lógica do aplicativo e manipulação de componentes.
- **HTML**: Estrutura do aplicativo.
- **CSS**: Estilização da interface do usuário.

## Componentes

### Estrutura Principal

A estrutura principal do aplicativo é composta por uma seção (`section`) que contém o formulário de entrada de dados e o resultado. A seguir estão os principais componentes utilizados:

- **`<o-id-bill>`**: Componente para inserir o valor da conta.
- **`<o-id-select-tip>`**: Componente para selecionar a porcentagem de gorjeta.
- **`<o-id-number-of-people>`**: Componente para inserir o número de pessoas.
- **`<o-id-tip-amount>`**: Componente para calcular e exibir a gorjeta por pessoa.
- **`<o-id-total>`**: Componente para calcular e exibir o total por pessoa.

### Comunicação entre Componentes

A comunicação entre os componentes é gerenciada pelo barramento de eventos do **-o-id** usando o módulo **Echo**. Cada vez que o valor do `bill`, `tip`, ou `numberofpeople` é alterado, os componentes de resultado (`<o-id-tip-amount>` e `<o-id-total>`) são atualizados automaticamente.

Exemplo de como os eventos são escutados:

```html
<o-id-echo-source on='o-id-bill/changed:attribute/bill'></o-id-echo-source>
<o-id-echo-source on='o-id-select-tip/changed:attribute/tip'></o-id-echo-source>
<o-id-echo-source on='o-id-number-of-people/changed:attribute/numberofpeople'></o-id-echo-source>
```

## Como Executar o Projeto

### Pré-requisitos

- Bun instalado

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/@bake-js/o-id-demo.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd o-id-splitter-demo
   ```

3. Instale as dependências:

   ```bash
   bun install
   ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
bun dev
```

Abra seu navegador e acesse `http://localhost:5173` para ver o aplicativo em ação.

## Personalização

Você pode personalizar os componentes e o estilo do aplicativo ajustando o código dentro do projeto. A estrutura modular do **-o-id** facilita a adição de novos recursos ou a alteração do comportamento dos componentes existentes.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias ou novos recursos.

## Licença

Este projeto é distribuído sob a licença [MIT](https://choosealicense.com/licenses/mit/).
