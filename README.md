# -O-id Splitter Demo

Este é um projeto de demonstração que utiliza a biblioteca **-O-id** para criar um aplicativo simples de divisão de contas, chamado **-O-id Splitter**. Este demo destaca como usar componentes personalizados do **-O-id** para criar uma interface interativa e eficiente.

![Splitter](https://github.com/bake-js/-O-id-demo/blob/main/-O-id_Splitter.png)

## Visão Geral do Sistema

O **-O-id Splitter** é uma aplicação web interativa que permite aos usuários dividir o valor de uma conta entre várias pessoas, incluindo o cálculo da gorjeta. A arquitetura do sistema é composta por:

- **Frontend**: Desenvolvido em HTML, CSS e JavaScript, com componentes personalizados criados com a biblioteca **-O-id**.
- **Módulo de Eventos**: Gerenciamento de eventos assíncronos com o módulo **Echo** do **-O-id**, que permite a comunicação reativa entre componentes.
- **Servidor de Desenvolvimento**: Servidor local fornecido pelo Bun para desenvolvimento e testes.

### Tecnologias Utilizadas

- **-O-id**: Biblioteca principal para a criação de componentes Web personalizados.
- **JavaScript**: Lógica do aplicativo e manipulação de componentes.
- **HTML**: Estrutura do aplicativo.
- **CSS**: Estilização da interface do usuário.
- **Bun**: Gerenciador de pacotes e servidor de desenvolvimento.

### Diagrama de Contexto

No contexto do **-O-id Splitter**, o usuário interage com a interface web, que comunica com o backend através de eventos reativos. O diagrama de contexto seria simples, mostrando as interações básicas entre o usuário e o sistema através dos componentes de interface.

## Arquitetura Interna

Para mais detalhes sobre a arquitetura interna do **-O-id Splitter**, incluindo a estrutura de componentes e a lógica de negócio, consulte o índice abaixo:

- **[Arquitetura Interna do -O-id Splitter](https://github.com/bake-js/-O-id-demo/blob/main/src/README.md)**
- **[`<o-id-bill>`](https://github.com/bake-js/-O-id-demo/blob/main/src/bill/README.md)**
- **[`<o-id-select-tip>`](https://github.com/bake-js/-O-id-demo/blob/main/src/selectTip/README.md)**
- **[`<o-id-number-of-people>`](https://github.com/bake-js/-O-id-demo/blob/main/src/numberOfPeople/README.md)**
- **[`<o-id-splitter>`](https://github.com/bake-js/-O-id-demo/blob/main/src/splitter/README.md)**
- **[`<o-id-tip-amount>`](https://github.com/bake-js/-O-id-demo/blob/main/src/tipAmount/README.md)**
- **[`<o-id-total>`](https://github.com/bake-js/-O-id-demo/blob/main/src/total/README.md)**


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
   cd o-id-demo
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

## Sobre a Biblioteca -O-id

Para entender melhor como os componentes do **-O-id Splitter** foram implementados e explorar mais sobre as funcionalidades da biblioteca, visite o repositório oficial da [**-O-id**](https://github.com/bake-js/-o-id). 

A biblioteca **-O-id** fornece um conjunto poderoso de ferramentas para criar e gerenciar componentes Web personalizados com facilidade. Com uma abordagem moderna e flexível, ela permite que desenvolvedores criem interfaces interativas e reativas, simplificando o desenvolvimento de aplicações complexas.

Confira a documentação detalhada, exemplos e tutoriais no repositório para aprofundar seu conhecimento e começar a utilizar o **-O-id** em seus próprios projetos.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias ou novos recursos.

## Licença

Este projeto é distribuído sob a licença [MIT](https://choosealicense.com/licenses/mit/).
