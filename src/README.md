# Arquitetura Interna do -o-id Splitter

Este documento detalha a arquitetura interna do **-o-id Splitter** no nível de componentes e módulos.

## Componentes Principais

### Estrutura de Pastas

- **bill/**: Componente `<o-id-bill>` para entrada do valor da conta.
- **selectTip/**: Componente `<o-id-select-tip>` para seleção da porcentagem de gorjeta.
- **numberOfPeople/**: Componente `<o-id-number-of-people>` para entrada do número de pessoas.
- **tipAmount/**: Componente `<o-id-tip-amount>` para calcular e exibir a gorjeta por pessoa.
- **total/**: Componente `<o-id-total>` para calcular e exibir o total por pessoa.

### Comunicação entre Componentes

Os componentes se comunicam entre si através do barramento de eventos **Echo** do **-o-id**. Esta abordagem permite que as mudanças em um componente sejam refletidas em tempo real em outros componentes dependentes.

#### Exemplo de Comunicação:

No arquivo principal:

```html
<o-id-echo-source on='o-id-bill/changed:attribute/bill'></o-id-echo-source>
<o-id-echo-source on='o-id-select-tip/changed:attribute/tip'></o-id-echo-source>
<o-id-echo-source on='o-id-number-of-people/changed:attribute/numberofpeople'></o-id-echo-source>
```

### Lógica de Negócio

- **Calculadora de Gorjeta**: A lógica para calcular a gorjeta e o total por pessoa está encapsulada dentro dos componentes `<o-id-tip-amount>` e `<o-id-total>`. Estes componentes escutam mudanças nos valores de `bill`, `tip`, e `numberofpeople` e recalculam os resultados em tempo real.

### Estilização

Os componentes utilizam classes CSS pré-definidas para estilização. O design é modular, permitindo a personalização de estilo sem afetar a lógica do aplicativo.

## Como Personalizar

Cada componente pode ser customizado de acordo com as necessidades do projeto. A modularidade do **-o-id** facilita a extensão de funcionalidades ou a criação de novos componentes.

## Testes

Os componentes podem ser testados individualmente para garantir que a comunicação através do **Echo** funciona conforme o esperado. Recomenda-se o uso de ferramentas de testes unitários para validar a lógica de negócio encapsulada em cada componente.
