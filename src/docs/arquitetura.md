## Visão Geral da Arquitetura

### Arquitetura Hexagonal (Ports and Adapters):

A arquitetura hexagonal é projetada para isolar a lógica de negócio da aplicação de detalhes de implementação, como bancos de dados, APIs externas e interfaces de usuário.
O objetivo é tornar a aplicação mais testável e flexível, permitindo que mudanças em uma parte (como a persistência de dados) não afetem a lógica de negócio.

---

### Abordagem "Feature Sliced":

A abordagem "feature sliced" organiza o código com base em funcionalidades específicas em vez de tipos de componente.

Isso torna o código mais intuitivo e fácil de navegar, especialmente em projetos grandes, onde diferentes partes da aplicação podem ser trabalhadas por diferentes equipes.

**Estrutura de Pastas**

- `modules/`

  A pasta modules é o núcleo da sua aplicação, onde você organiza todas as funcionalidades. Cada funcionalidade (como "Todos" ou "Usuários") tem sua própria subpasta. Essa organização promove a separação de preocupações e a modularidade.

  `todo/` e `user/`

  Cada uma dessas pastas representa uma funcionalidade específica da aplicação. Isso permite que você encapsule toda a lógica e componentes relacionados em um único lugar, tornando a manutenção mais fácil.

- Componentes em Cada Módulo

  `dtos/`

  Data Transfer Objects que definem e validam a estrutura dos dados que entram e saem da aplicação. Eles ajudam a garantir que as requisições HTTP contenham dados no formato esperado e a aplicar validações.

  `entities/`

  Define as entidades do domínio, representando os objetos centrais da aplicação (por exemplo, Todo, User). Aqui, você pode definir propriedades e comportamentos essenciais.

  `use-cases/`

  Contém a lógica de negócio específica para operações em cada funcionalidade. Cada arquivo representa uma operação que pode ser realizada (como criar, atualizar ou deletar uma entidade).

  `controllers/`

  Gerencia as requisições HTTP. Os controladores recebem os dados dos clientes, chamam os casos de uso apropriados e retornam as respostas. Eles servem como a interface entre a aplicação e o mundo externo.

  `repositories/`

  Define a interface e/ou implementação para interagir com a base de dados. Isso pode incluir métodos de CRUD e abstrações para acesso a dados.

  `schemas/`

  Contém os esquemas do Mongoose, que definem como os dados são armazenados no banco de dados. Esses esquemas são usados para mapear as entidades do domínio para a estrutura do banco.

  `services/`

  Serviços que podem conter lógica adicional ou integrar com outros sistemas. Esses serviços podem ser injetados em controladores ou casos de uso.

  `todos.module.ts` e `users.module.ts`

  Módulos que agregam todos os componentes relacionados à funcionalidade. Esses módulos são registrados no `app.module.ts`.

- `app.module.ts`

  O `app.module.ts` é o ponto de entrada da aplicação. Aqui, você importa todos os módulos principais (como TodosModule e UsersModule). Isso mantém a configuração da aplicação simples e clara.
