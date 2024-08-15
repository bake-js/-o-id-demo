# Arquitetura Interna do -O-id Splitter

Este documento oferece uma visão detalhada da arquitetura interna do **-O-id Splitter**, com foco nos componentes principais, comunicação entre eles, lógica de negócio, estilização, personalização e testes. A arquitetura é construída de forma modular, aproveitando ao máximo os recursos oferecidos pela biblioteca **-O-id**.

## Componentes Principais

### Estrutura de Pastas

A estrutura do projeto é organizada em diretórios que correspondem aos principais componentes do **-O-id Splitter**. Cada pasta contém a lógica específica, o estilo e os módulos necessários para o funcionamento de um componente individual.

- **`bill/`**: Contém o componente `<o-id-bill>`, responsável por capturar o valor total da conta.  
  - Módulos principais: `component`, `style`
  
- **`selectTip/`**: Inclui o componente `<o-id-select-tip>`, que permite aos usuários selecionar a porcentagem de gorjeta.  
  - Módulos principais: `component`, `style`, `SupportText`

- **`numberOfPeople/`**: Armazena o componente `<o-id-number-of-people>`, utilizado para especificar o número de pessoas entre as quais a conta será dividida.  
  - Módulos principais: `component`, `style`

- **`tipAmount/`**: Abriga o componente `<o-id-tip-amount>`, que calcula e exibe a quantidade de gorjeta por pessoa.  
  - Módulos principais: `component`, `style`
  
- **`total/`**: Contém o componente `<o-id-total>`, responsável por calcular e mostrar o total por pessoa, incluindo a gorjeta.  
  - Módulos principais: `component`, `style`

### Comunicação entre Componentes

A comunicação entre os componentes do **-O-id Splitter** é gerida pelo módulo **Echo** do **-O-id**. O Echo atua como um barramento de eventos, permitindo que componentes disparem e respondam a eventos de maneira eficiente e desacoplada. 

#### Exemplo de Comunicação com Echo

No exemplo abaixo, os componentes estão conectados usando **Echo** para garantir que qualquer alteração nos valores de `bill`, `tip`, ou `numberofpeople` seja propagada e reflita automaticamente nos componentes dependentes, como `<o-id-tip-amount>` e `<o-id-total>`.

```html
<o-id-echo-source on='o-id-bill/changed:attribute/bill'></o-id-echo-source>
<o-id-echo-source on='o-id-select-tip/changed:attribute/tip'></o-id-echo-source>
<o-id-echo-source on='o-id-number-of-people/changed:attribute/numberofpeople'></o-id-echo-source>
```

### Lógica de Negócio

A lógica de negócio é distribuída entre os componentes, sendo que cada um encapsula uma parte específica da lógica necessária para calcular os valores de gorjeta e total por pessoa:

- **`<o-id-tip-amount>`**: Calcula a gorjeta por pessoa com base nos valores recebidos de `bill`, `tip`, e `numberofpeople`.
- **`<o-id-total>`**: Calcula o total por pessoa, somando a gorjeta ao valor da conta.

Ambos os componentes utilizam os decorators **@attributeChanged** e **@repaint** para reagir às mudanças de atributos e atualizar os cálculos em tempo real.

### Estilização

Cada componente possui seu próprio conjunto de estilos, definidos nos módulos `style`. O uso de Shadow DOM para encapsular estilos garante que a aparência de cada componente seja isolada do restante da aplicação, permitindo uma maior flexibilidade e personalização sem afetar outros elementos.

### Personalização

A modularidade dos componentes facilita a personalização. Desenvolvedores podem:

- **Estender Funcionalidades**: Criar novos componentes ou adicionar novas funcionalidades aos existentes.
- **Customizar Estilos**: Alterar os estilos nos módulos `style` para ajustar a aparência dos componentes conforme as necessidades do projeto.
- **Reutilizar Componentes**: Combinar componentes de diferentes maneiras para criar novas interfaces e fluxos de usuário.

### Testes

Os componentes do **-O-id Splitter** são projetados para serem testáveis de forma isolada. A comunicação baseada em eventos via **Echo** facilita a verificação do comportamento dinâmico dos componentes. Recomenda-se o uso de ferramentas de testes unitários para garantir que:

- **Lógica de Negócio**: A lógica encapsulada em cada componente funciona corretamente com diferentes entradas.
- **Comunicação entre Componentes**: Os eventos disparam conforme esperado e os componentes respondem apropriadamente às mudanças de estado.

### Exemplos de Testes

1. **Validação de Cálculos**: Testar se `<o-id-tip-amount>` e `<o-id-total>` calculam os valores corretamente para diferentes combinações de `bill`, `tip`, e `numberofpeople`.
2. **Propagação de Eventos**: Verificar se as mudanças em `<o-id-bill>` são corretamente propagadas para `<o-id-tip-amount>` e `<o-id-total>` via Echo.
