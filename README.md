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
visual usa cores e tipografia retrô inspiradas em pixel art, combinadas com
fotografias e imagens históricas de fontes externas verificáveis.

## Tecnologias utilizadas

- **HTML5** — estrutura e conteúdo das páginas, seções, imagens e navegação;
- **CSS3** — layout, cores, tipografia, responsividade e efeitos visuais;
- **JavaScript** — abertura e fechamento do menu lateral e comportamento dos
  links de navegação;
- **JPG** — fotografias e imagens históricas usadas nas seções.

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
    │   ├── bread-pompeii.jpg
    │   ├── cake-at-teatime.jpg
    │   ├── cake-modern.jpg
    │   ├── egyptian-fresh-bread.jpg
    │   └── medieval-baker.jpg
    └── javascript/
        └── barra_nav.js
```

- `bolo_2.html` contém a página e o conteúdo das seções.
- `assets/css/global/` reúne os estilos globais e os estilos específicos da
  navegação e do conteúdo.
- `assets/IMG/` guarda as imagens locais usadas pelo site.
- `assets/javascript/` contém o código de interação do menu.

## Créditos das imagens

As imagens abaixo foram obtidas no [Wikimedia Commons](https://commons.wikimedia.org/).
As cópias usadas pelo site estão em `assets/IMG/`; consulte a página de cada
arquivo para ver os detalhes e condições de uso:

| Arquivo no projeto | Imagem e autoria | Licença e fonte |
| --- | --- | --- |
| `cake-at-teatime.jpg` | *Cake at Teatime*, pintura de Ludwig Knaus | Domínio público — [página do arquivo](https://commons.wikimedia.org/wiki/File:Ludwig_Knaus_-_Cake_at_Teatime.jpg) |
| `egyptian-fresh-bread.jpg` | Pães egípcios atuais, foto de Dina Said | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — [página do arquivo](https://commons.wikimedia.org/wiki/File:Egyptian_Fresh_Bread.jpg) |
| `bread-pompeii.jpg` | Gravura de 1832 sobre o pão encontrado em Pompeia, de William Clark; digitalização creditada a benoitb | Domínio público — [página do arquivo](https://commons.wikimedia.org/wiki/File:Bread_discovered_in_Pompeii.jpg) |
| `medieval-baker.jpg` | *Medieval baker*; autoria não informada na página do arquivo | Domínio público — [página do arquivo](https://commons.wikimedia.org/wiki/File:Medieval_bakerFXD.jpg) |
| `cake-modern.jpg` | Bolo de chocolate e bolo Victoria, foto de Acabashi | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — [página do arquivo](https://commons.wikimedia.org/wiki/File:Chocolate_cake_and_Victoria_sponge.jpg) |

A imagem de pão egípcio mostra um alimento atual, não um artefato do Egito
Antigo. Ela é usada como referência visual, sem sugerir que seja uma fotografia
histórica. As imagens sob CC BY-SA devem manter a atribuição e os termos da
licença ao serem reutilizadas.

## Como visualizar

Não é necessário instalar dependências ou executar um processo de build.

1. Baixe ou clone este repositório.
2. Abra o arquivo `bolo_2.html` em um navegador.

## Objetivo de aprendizagem

Este projeto foi criado para experimentar o desenvolvimento web com IA e
entender melhor como ela responde a instruções, sugere soluções e pode ser
orientada por uma pessoa. Também serve como exercício de organização de
arquivos e integração entre HTML, CSS, JavaScript e imagens.
