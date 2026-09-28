# Conexão Solidária

Plataforma web desenvolvida com o objetivo de apresentar os projetos sociais da ONG fictícia **Conexão Solidária** e facilitar o contato de pessoas interessadas em participar como voluntárias.

O projeto foi desenvolvido como atividade acadêmica, aplicando conceitos de desenvolvimento Front-End, responsividade, acessibilidade, JavaScript modular, versionamento com Git/GitHub e preparação para ambiente de produção.

## Sobre o projeto

A Conexão Solidária é uma plataforma voltada à divulgação de ações sociais e oportunidades de voluntariado.

A aplicação possui páginas para apresentação da organização, divulgação dos projetos sociais e cadastro de voluntários.

Entre os projetos apresentados estão:

- Alimento para Todos
- Educação que Transforma
- Campanha do Agasalho
- Inclusão Digital

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

- HTML5
- CSS3
- JavaScript
- ES Modules
- LocalStorage
- Vite
- Sharp
- Git
- GitHub

## Funcionalidades

A aplicação conta com:

- Interface responsiva
- Menu de navegação adaptável para dispositivos móveis
- Exibição dinâmica dos projetos utilizando JavaScript
- Formulário de cadastro de voluntários
- Máscaras e validação dos campos do formulário
- Feedback visual para o usuário
- Modo de alto contraste
- Persistência de preferências utilizando LocalStorage
- Navegação acessível por teclado
- Link para pular diretamente ao conteúdo principal
- Imagens otimizadas em formato WebP
- Fallback de imagem em JPG
- Build otimizado para produção

## Acessibilidade

O projeto foi desenvolvido considerando recomendações da **WCAG 2.1**, incluindo:

- Uso de HTML semântico
- Textos alternativos em imagens
- Labels associados aos campos do formulário
- Navegação por teclado
- Estados de foco visíveis
- Uso de atributos ARIA quando necessário
- Link "Pular para o conteúdo principal"
- Modo de alto contraste
- Persistência da preferência de contraste
- Feedback acessível em componentes interativos

Os três arquivos HTML foram verificados utilizando o **Nu HTML Checker (W3C)** e não apresentaram erros ou avisos na validação final.

## Desempenho

As imagens do projeto foram convertidas de JPG para WebP utilizando a biblioteca Sharp.

Resultado da otimização:

- Tamanho original das imagens: **364,06 KB**
- Tamanho das imagens WebP: **212,69 KB**
- Redução total: **41,58%**

A versão de produção também foi analisada utilizando o Lighthouse no modo Desktop.

Resultados obtidos:

- Performance: **100**
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**

> Os resultados do Lighthouse podem variar de acordo com o ambiente e as condições de execução.

## Estrutura do projeto

```text
projeto-ong/
├── css/
│   └── style.css
├── html/
│   ├── cadastro.html
│   ├── index.html
│   └── projetos.html
├── imagens/
│   ├── agasalho.jpg
│   ├── agasalho.webp
│   ├── alimento.jpg
│   ├── alimento.webp
│   ├── educacao.jpg
│   ├── educacao.webp
│   ├── inclusao.jpg
│   └── inclusao.webp
├── js/
│   ├── contraste.js
│   ├── main.js
│   ├── menu.js
│   ├── storage.js
│   ├── templates.js
│   └── validacao.js
├── scripts/
│   └── otimizar-imagens.js
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md