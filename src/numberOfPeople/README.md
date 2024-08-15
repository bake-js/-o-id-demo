# Componente `<o-id-number-of-people>`

Este componente é responsável por capturar e validar o número de pessoas envolvidas no aplicativo **-o-id Splitter**. Ele é um componente personalizado criado com a biblioteca **-o-id** e utiliza várias funcionalidades avançadas, como validação de formulários, máscara de entrada de dados e suporte a eventos.

## Funcionalidades

- **Captura do Número de Pessoas**: Permite que o usuário insira o número de pessoas envolvidas na divisão da conta.
- **Máscara de Entrada**: Utiliza `IMask` para formatar a entrada como um número inteiro.
- **Validação**: Inclui validações automáticas, como valor mínimo e preenchimento obrigatório, com mensagens de erro personalizadas.
- **Interação com Formulários**: Integrado ao formulário, permitindo que seu valor seja enviado junto com outros dados do formulário.

## Estrutura

O componente é composto pelos seguintes elementos principais:

1. **Campo de Entrada (`<input>`)**: Onde o usuário insere o número de pessoas.
2. **Etiqueta (`<label>`)**: Descreve o campo de entrada.
3. **Texto de Suporte (`<span>`)**: Exibe mensagens de erro ou outras informações auxiliares.

### Exemplo de Uso

```html
<o-id-number-of-people></o-id-number-of-people>
```

### Implementação

A classe `NumberOfPeople` é uma extensão do `HTMLElement`, decorada com funcionalidades fornecidas pela biblioteca **-o-id**:

- **Decorators**:
  - `@define("o-id-number-of-people")`: Define o elemento customizado.
  - `@paint(component, style)`: Aplica o componente visual e estilo ao elemento.
  - `@on.input("input")`: Escuta eventos de entrada no campo de texto.
  - `@joinCut(trait.check)`: Verifica a validade dos dados inseridos.
  - `@joinCut(trait.setValidity)`: Define a validade do componente.

- **Métodos Principais**:
  - `checkValidity()`: Verifica se o valor inserido é válido.
  - `reportValidity()`: Reporta a validade do valor inserido.
  - `@didPaint [trait.mask]`: Aplica a máscara de formatação ao campo de entrada após a renderização.
  - `@formAssociated [trait.setFormValue]`: Associa o valor do componente ao formulário.

### Máscara de Entrada

A máscara de entrada é configurada para formatar o valor como um número inteiro. A configuração é definida no método `@didPaint [trait.mask]`, que utiliza as seguintes opções:

- `mask: Number`
- `min: 0`
- `max: 100`
- `scale: 0` (sem casas decimais)
- `thousandsSeparator: ""` (sem separador de milhares)

### Validação

O componente implementa validação automática para garantir que o valor inserido seja:

- Um número maior que zero.
- Não vazio.

Mensagens de erro são exibidas automaticamente no campo de texto de suporte (`<span class='input__supportText'>`).

## Personalização

Este componente pode ser personalizado alterando as propriedades no código ou estendendo a classe `NumberOfPeople`. A máscara e a validação também podem ser ajustadas conforme necessário.
