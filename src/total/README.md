# Componente `<o-id-total>`

O componente `<o-id-total>` é projetado para calcular e exibir o valor total a ser pago por pessoa, incluindo a gorjeta, com base na conta total, número de pessoas e a porcentagem de gorjeta selecionada. Ele é parte integrante do projeto **-o-id Splitter**, permitindo que os usuários vejam a contribuição total por pessoa de forma clara e precisa.

## Funcionalidades

- **Cálculo Dinâmico do Total**: Calcula automaticamente o valor total a ser pago por pessoa conforme os valores da conta, número de pessoas e porcentagem de gorjeta são atualizados.
- **Exibição Intuitiva**: Apresenta o valor total formatado como moeda, facilitando a compreensão dos usuários.
- **Atributos Customizados**: Reage a mudanças nos atributos `bill`, `numberofpeople` e `tip`, ajustando automaticamente o valor exibido.

## Estrutura

O componente consiste em uma interface simples que exibe o valor calculado do total por pessoa:

1. **Etiqueta (`<label>`)**: Exibe a descrição "Total".
2. **Valor (`<div>`)**: Mostra o valor calculado do total por pessoa.

### Exemplo de Uso

```html
<o-id-total bill="10000" numberofpeople="4" tip="15"></o-id-total>
```

Neste exemplo, o componente calculará o total por pessoa com base em uma conta de $100.00, dividida entre 4 pessoas, com uma porcentagem de gorjeta de 15%.

### Implementação

A classe `Total` é uma extensão do `HTMLElement`, decorada com funcionalidades fornecidas pela biblioteca **-o-id**:

- **Decorators**:
  - `@define("o-id-total")`: Define o elemento customizado.
  - `@paint(component, style)`: Aplica o componente visual e estilo ao elemento.
  - `@attributeChanged("bill")`: Monitora mudanças no atributo `bill` e recalcula o valor total.
  - `@attributeChanged("numberofpeople")`: Monitora mudanças no atributo `numberofpeople` e recalcula o valor total.
  - `@attributeChanged("tip")`: Monitora mudanças no atributo `tip` e recalcula o valor total.

- **Atributos Principais**:
  - `bill`: O valor total da conta, em centavos.
  - `numberofpeople`: O número de pessoas entre as quais a conta será dividida.
  - `tip`: A porcentagem de gorjeta a ser aplicada à conta.

- **Métodos Principais**:
  - `get value()`: Retorna o valor total por pessoa, incluindo a gorjeta, formatado com duas casas decimais.
  - `@attributeChanged [trait.changeBill](value)`: Recalcula o total ao alterar o valor da conta.
  - `@attributeChanged [trait.changeNumberOfPeople](value)`: Recalcula o total ao alterar o número de pessoas.
  - `@attributeChanged [trait.changeTip](value)`: Recalcula o total ao alterar a porcentagem de gorjeta.

### Componente Visual

O componente visual é renderizado usando a função `component(self)`, que gera o seguinte HTML:

```html
<div class='tipAmount'>
  <div class='tipAmount__label'>
    <strong>Total</strong>
    <span>/ person</span>
  </div>
  <div class='tipAmount__value'>$ 27.50</div>
</div>
```

Este HTML exibe a etiqueta "Total / person" e o valor total calculado.

### Estilo

O estilo associado ao componente é aplicado automaticamente através do decorator `@paint(component, style)`. Você pode personalizar o visual editando o módulo `style`.

## Personalização

Este componente pode ser personalizado alterando os valores dos atributos `bill`, `numberofpeople`, e `tip`. A lógica de cálculo e exibição pode ser estendida ou modificada conforme necessário para atender a requisitos específicos.
