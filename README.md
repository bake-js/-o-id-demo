# -o-id Splitter Demo

Este é um projeto de demonstração que utiliza a biblioteca **-o-id** para criar um aplicativo simples de divisão de contas, chamado **-o-id Splitter**. Este demo destaca como usar componentes personalizados do **-o-id** para criar uma interface interativa e eficiente.

![Splitter](https://github.com/bake-js/-o-id-demo/blob/main/-O-id_Splitter.png)

## Visão Geral do Sistema

O **-o-id Splitter** é uma aplicação web interativa que permite aos usuários dividir o valor de uma conta entre várias pessoas, incluindo o cálculo da gorjeta. A arquitetura do sistema é composta por:

- **Frontend**: Desenvolvido em HTML, CSS e JavaScript, com componentes personalizados criados com a biblioteca **-o-id**.
- **Módulo de Eventos**: Gerenciamento de eventos assíncronos com o módulo **Echo** do **-o-id**, que permite a comunicação reativa entre componentes.
- **Servidor de Desenvolvimento**: Servidor local fornecido pelo Bun para desenvolvimento e testes.

### Tecnologias Utilizadas

- **-o-id**: Biblioteca principal para a criação de componentes Web personalizados.
- **JavaScript**: Lógica do aplicativo e manipulação de componentes.
- **HTML**: Estrutura do aplicativo.
- **CSS**: Estilização da interface do usuário.
- **Bun**: Gerenciador de pacotes e servidor de desenvolvimento.

### Diagrama de Contexto

No contexto do **-o-id Splitter**, o usuário interage com a interface web, que comunica com o backend através de eventos reativos. O diagrama de contexto seria simples, mostrando as interações básicas entre o usuário e o sistema através dos componentes de interface.

## Arquitetura Interna

Para mais detalhes sobre a arquitetura interna do **-o-id Splitter**, incluindo a estrutura de componentes e a lógica de negócio, consulte o índice abaixo para encontrar os README relevantes:

- **/ (root)**
  - [README.md](https://github.com/bake-js/-o-id-demo/blob/main/README.md)
  - **/src**
    - [README.md](https://github.com/bake-js/-o-id-demo/blob/main/src/README.md)
    - **/bill**
      - [README.md](https://github.com/bake-js/-o-id-demo/blob/main/src/bill/README.md)
    - **/selectTip**
      - [README.md](https://github.com/bake-js/-o-id-demo/blob/main/src/selectTip/README.md)
    - **/numberOfPeople**
      - [README.md](https://github.com/bake-js/-o-id-demo/blob/main/src/numberOfPeople/README.md)
    - **/tipAmount**
      - [README.md](https://github.com/bake-js/-o-id-demo/blob/main/src/tipAmount/README.md)
    - **/total**
      - [README.md](https://github.com/bake-js/-o-id-demo/blob/main/src/total/README.md)

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

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias ou novos recursos.

## Licença

Este projeto é distribuído sob a licença [MIT](https://choosealicense.com/licenses/mit/).
