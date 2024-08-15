# Componente `<o-id-splitter>`

O `<o-id-splitter>` é o componente principal da aplicação **-o-id Splitter**. Ele permite aos usuários dividir uma conta entre várias pessoas, calculando tanto o valor da gorjeta quanto o total por pessoa de forma automática e dinâmica. O componente é altamente interativo, reagindo às mudanças de valores e atualizando os cálculos em tempo real.

## Funcionalidades

- **Interface Intuitiva**: Apresenta uma interface clara e fácil de usar para entrada e exibição de dados.
- **Cálculos Dinâmicos**: Calcula e exibe a gorjeta e o total por pessoa com base nos valores da conta, número de pessoas e porcentagem de gorjeta.
- **Integração com Outros Componentes**: Combina componentes individuais como `<o-id-bill>`, `<o-id-select-tip>`, `<o-id-number-of-people>`, `<o-id-tip-amount>`, e `<o-id-total>` para fornecer uma funcionalidade completa de divisão de contas.
- **Botão de Reset**: Permite ao usuário redefinir o formulário com facilidade, limpando todos os campos de entrada e resultados.

## Estrutura

O componente consiste em uma estrutura de formulário que agrupa os seguintes elementos:

1. **Entradas de Dados**:
   - `<o-id-bill>`: Para inserir o valor da conta.
   - `<o-id-select-tip>`: Para selecionar a porcentagem de gorjeta.
   - `<o-id-number-of-people>`: Para definir o número de pessoas que compartilharão a conta.
  
2. **Resultados Calculados**:
   - `<o-id-tip-amount>`: Exibe a quantidade de gorjeta por pessoa.
   - `<o-id-total>`: Exibe o total a ser pago por pessoa.

3. **Botão de Reset**:
   - Um botão para redefinir o formulário e limpar todos os valores.

### Exemplo de Uso

```html
<o-id-splitter></o-id-splitter>
```

Neste exemplo, o componente `<o-id-splitter>` renderiza uma interface completa para a divisão de contas. Os usuários podem interagir com os campos de entrada e ver os resultados atualizados automaticamente.

### Implementação

A classe `Splitter` é uma extensão do `HTMLElement`, decorada com funcionalidades fornecidas pela biblioteca **-o-id**:

- **Decorators**:
  - `@define("o-id-splitter")`: Define o elemento customizado.
  - `@paint(component, style)`: Aplica o componente visual e estilo ao elemento.

- **Estrutura de Shadow DOM**:
  - A estrutura de Shadow DOM é utilizada para encapsular o estilo e a estrutura do componente, mantendo-o isolado do restante da aplicação.

### Componente Visual

O componente visual é renderizado usando a função `component()`, que gera o seguinte HTML:

```html
<section class='splitter'>
  <h1 class='splitter__heading'>-O-id Splitter</h1>
  <form class='splitter__form'>
    <div class='splitter__inputs'>
      <o-id-bill></o-id-bill>
      <o-id-select-tip></o-id-select-tip>
      <o-id-number-of-people></o-id-number-of-people>
    </div>
    <div class='splitter__result'>
      <div class='splitter__per'>
        <o-id-tip-amount>
          <o-id-echo-source on='o-id-bill/changed:attribute/bill'></o-id-echo-source>
          <o-id-echo-source on='o-id-select-tip/changed:attribute/tip'></o-id-echo-source>
          <o-id-echo-source on='o-id-number-of-people/changed:attribute/numberofpeople'></o-id-echo-source>
        </o-id-tip-amount>
        <o-id-total>
          <o-id-echo-source on='o-id-bill/changed:attribute/bill'></o-id-echo-source>
          <o-id-echo-source on='o-id-select-tip/changed:attribute/tip'></o-id-echo-source>
          <o-id-echo-source on='o-id-number-of-people/changed:attribute/numberofpeople'></o-id-echo-source>
        </o-id-total>
      </div>
      <button class='splitter__reset' type='reset'>Reset</button>
    </div>
  </form>
</section>
```

### Estilo

O estilo associado ao componente é aplicado automaticamente através do decorator `@paint(component, style)`. A aparência do componente pode ser personalizada editando o módulo `style`.

### Personalização

Este componente pode ser estendido ou adaptado para atender a diferentes necessidades, como adicionar novos campos de entrada, modificar os cálculos, ou ajustar a interface do usuário.
