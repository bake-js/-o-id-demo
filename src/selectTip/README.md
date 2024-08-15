# Componente `<o-id-select-tip>`

O componente `<o-id-select-tip>` é projetado para capturar e validar a porcentagem de gorjeta no aplicativo **-o-id Splitter**. Ele oferece uma interface simples para o usuário selecionar o valor da gorjeta e é altamente personalizável, integrando-se de maneira eficaz com formulários e utilizando máscaras de entrada de dados para garantir a formatação correta.

## Funcionalidades

- **Seleção da Gorjeta**: Permite ao usuário inserir a porcentagem da gorjeta que deseja aplicar na divisão da conta.
- **Máscara de Entrada**: Utiliza `IMask` para formatar a entrada como um número inteiro entre 0 e 100.
- **Validação**: Inclui validações automáticas, como garantir que o valor seja um número e esteja dentro do intervalo permitido.
- **Interação com Formulários**: Integrado ao formulário para garantir que seu valor seja corretamente enviado junto com outros dados do formulário.

## Estrutura

O componente é composto pelos seguintes elementos principais:

1. **Campo de Entrada (`<input>`)**: Onde o usuário insere a porcentagem da gorjeta.
2. **Etiqueta (`<label>`)**: Descreve o campo de entrada.
3. **Texto de Suporte (`<span>`)**: Exibe mensagens de erro ou outras informações auxiliares.

### Exemplo de Uso

```html
<o-id-select-tip></o-id-select-tip>
```

### Implementação

A classe `SelectTip` é uma extensão do `HTMLElement`, decorada com funcionalidades fornecidas pela biblioteca **-o-id**:

- **Decorators**:
  - `@define("o-id-select-tip")`: Define o elemento customizado.
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

A máscara de entrada é configurada para formatar o valor como um número inteiro dentro do intervalo de 0 a 100. A configuração é definida no método `@didPaint [trait.mask]`, que utiliza as seguintes opções:

- `mask: Number`
- `min: 0`
- `max: 100`
- `scale: 0` (sem casas decimais)
- `thousandsSeparator: ""` (sem separador de milhares)

### Validação

O componente implementa validação automática para garantir que o valor inserido seja:

- Um número válido dentro do intervalo de 0 a 100.
- Não vazio.

Mensagens de erro são exibidas automaticamente no campo de texto de suporte (`<span class='input__supportText'>`).

## Personalização

Este componente pode ser personalizado alterando as propriedades no código ou estendendo a classe `SelectTip`. A máscara e a validação também podem ser ajustadas conforme necessário.
