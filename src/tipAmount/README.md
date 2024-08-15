# Componente `<o-id-tip-amount>`

O componente `<o-id-tip-amount>` é projetado para calcular e exibir o valor da gorjeta por pessoa com base na conta total, número de pessoas e a porcentagem de gorjeta selecionada. Ele é parte integrante do projeto **-o-id Splitter**, onde permite que os usuários visualizem a contribuição da gorjeta de forma clara e precisa.

## Funcionalidades

- **Cálculo Dinâmico da Gorjeta**: Calcula automaticamente o valor da gorjeta por pessoa conforme os valores da conta, número de pessoas e porcentagem de gorjeta são atualizados.
- **Exibição Intuitiva**: Apresenta o valor da gorjeta formatado como moeda, facilitando a compreensão dos usuários.
- **Atributos Customizados**: Reage a mudanças nos atributos `bill`, `numberofpeople` e `tip`, ajustando automaticamente o valor exibido.

## Estrutura

O componente consiste em uma interface simples que exibe o valor calculado da gorjeta por pessoa:

1. **Etiqueta (`<label>`)**: Exibe a descrição "Tip Amount".
2. **Valor (`<div>`)**: Mostra o valor calculado da gorjeta por pessoa.

### Exemplo de Uso

```html
<o-id-tip-amount bill="10000" numberofpeople="4" tip="15"></o-id-tip-amount>
```

Neste exemplo, o componente calculará a gorjeta por pessoa com base em uma conta de $100.00, dividida entre 4 pessoas, com uma porcentagem de gorjeta de 15%.

### Implementação

A classe `TipAmount` é uma extensão do `HTMLElement`, decorada com funcionalidades fornecidas pela biblioteca **-o-id**:

- **Decorators**:
  - `@define("o-id-tip-amount")`: Define o elemento customizado.
  - `@paint(component, style)`: Aplica o componente visual e estilo ao elemento.
  - `@attributeChanged("bill")`: Monitora mudanças no atributo `bill` e recalcula o valor da gorjeta.
  - `@attributeChanged("numberofpeople")`: Monitora mudanças no atributo `numberofpeople` e recalcula o valor da gorjeta.
  - `@attributeChanged("tip")`: Monitora mudanças no atributo `tip` e recalcula o valor da gorjeta.

- **Atributos Principais**:
  - `bill`: O valor total da conta, em centavos.
  - `numberofpeople`: O número de pessoas entre as quais a gorjeta será dividida.
  - `tip`: A porcentagem de gorjeta a ser aplicada à conta.

- **Métodos Principais**:
  - `get value()`: Retorna o valor da gorjeta por pessoa, formatado com duas casas decimais.
  - `@attributeChanged [trait.changeBill](value)`: Recalcula a gorjeta ao alterar o valor da conta.
  - `@attributeChanged [trait.changeNumberOfPeople](value)`: Recalcula a gorjeta ao alterar o número de pessoas.
  - `@attributeChanged [trait.changeTip](value)`: Recalcula a gorjeta ao alterar a porcentagem de gorjeta.

### Componente Visual

O componente visual é renderizado usando a função `component(self)`, que gera o seguinte HTML:

```html
<div class='tipAmount'>
  <div class='tipAmount__label'>
    <strong>Tip Amount</strong>
    <span>/ person</span>
  </div>
  <div class='tipAmount__value'>$ 2.50</div>
</div>
```

Este HTML exibe a etiqueta "Tip Amount / person" e o valor da gorjeta calculado.

### Estilo

O estilo associado ao componente é aplicado automaticamente através do decorator `@paint(component, style)`. Você pode personalizar o visual editando o módulo `style`.

## Personalização

Este componente pode ser personalizado alterando os valores dos atributos `bill`, `numberofpeople`, e `tip`. A lógica de cálculo e exibição pode ser estendida ou modificada conforme necessário para atender a requisitos específicos.
