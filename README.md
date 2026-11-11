# História do Bolo

Um site simples e responsivo sobre a história dos bolos, desenvolvido como
experimento para explorar o uso de inteligência artificial na criação de
projetos web.

## Sobre o projeto

O site foi construído com auxílio de inteligência artificial, a partir das
ideias, instruções e decisões de um aluno de Tecnologia da Informação na
faculdade. A proposta foi aprender, na prática, como a IA pode ajudar no
desenvolvimento de um site: transformar uma ideia em estrutura, escrever e
ajustar código, criar estilos e iterar sobre o resultado.

A IA foi usada como ferramenta de apoio durante a criação; o tema, as
orientações e a avaliação do que deveria ser feito vieram do aluno. O projeto
tem caráter educativo e busca descobrir como funciona essa colaboração entre
uma pessoa e uma IA.

## O site

O conteúdo apresenta um breve panorama da história dos bolos, passando por:

- A história do bolo;
- O Egito Antigo;
- Grécia e Roma;
- A Idade Média;
- Os bolos na atualidade;
- Fontes históricas.

Um menu lateral permite navegar diretamente entre as seções. A identidade
visual usa cores e ilustrações relacionadas a bolos, com elementos de estilo
pixel art.

## Tecnologias utilizadas

- **HTML5** — estrutura e conteúdo das páginas, seções, imagens e navegação;
- **CSS3** — layout, cores, tipografia, responsividade e efeitos visuais;
- **JavaScript** — abertura e fechamento do menu lateral e comportamento dos
  links de navegação;
- **SVG** — ilustrações vetoriais dos bolos e imagens de fundo.

As fontes **Press Start 2P**, **Silkscreen** e **Archivo Black** são carregadas
do Google Fonts.

## Organização das pastas

```text
bolo2/
├── bolo_2.html
└── assets/
    ├── css/
    │   └── global/
    │       ├── fonts.css
    │       ├── global.css
    │       ├── normalise.css
    │       ├── variable.css
    │       └── partials/
    │           └── index/
    │               └── pages/
    │                   ├── barra_nav.css
    │                   ├── index.css
    │                   └── primeiroquadrado.css
    ├── IMG/
    │   ├── backbolo2.svg
    │   ├── bolo-atualidade.svg
    │   ├── bolo-egito.svg
    │   ├── bolo-grecia-roma.svg
    │   ├── bolo-historia.svg
    │   ├── bolo-idade-media.svg
    │   └── seta.svg
    └── javascript/
        └── barra_nav.js
```

- `bolo_2.html` contém a página e o conteúdo das seções.
- `assets/css/global/` reúne os estilos globais e os estilos específicos da
  navegação e do conteúdo.
- `assets/IMG/` guarda as ilustrações e imagens SVG.
- `assets/javascript/` contém o código de interação do menu.

## Como visualizar

Não é necessário instalar dependências ou executar um processo de build.

1. Baixe ou clone este repositório.
2. Abra o arquivo `bolo_2.html` em um navegador.

## Objetivo de aprendizagem

Este projeto foi criado para experimentar o desenvolvimento web com IA e
entender melhor como ela responde a instruções, sugere soluções e pode ser
orientada por uma pessoa. Também serve como exercício de organização de
arquivos e integração entre HTML, CSS, JavaScript e imagens.
