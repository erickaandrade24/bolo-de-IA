 const botaoMenu = document.querySelector('.botao-menu');
    const barraNav = document.querySelector('.barra_nav');
    const linksSecoes = document.querySelectorAll('.navegador a[href^="#"]');

 botaoMenu.addEventListener('click', () => {
     const aberta = barraNav.classList.toggle('aberta');
        botaoMenu.classList.toggle('aberta', aberta);

        botaoMenu.setAttribute('aria-expanded', aberta);
        botaoMenu.setAttribute(
            'aria-label',
            aberta ? 'Fechar menu' : 'Abrir menu'
        );
    });

    linksSecoes.forEach((link) => {
        link.addEventListener('click', () => {
            barraNav.classList.remove('aberta');
            botaoMenu.classList.remove('aberta');
            botaoMenu.setAttribute('aria-expanded', 'false');
            botaoMenu.setAttribute('aria-label', 'Abrir menu');
        });
    });