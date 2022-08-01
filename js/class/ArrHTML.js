// created htmlDom array object

export const htmlDom2 = [{
        // header
        tag: 'header',
        dest: '.main',
        methodProp: [
            { className: '"header"', cssText: '"background-color: #333"' },
        ],
    },
    {
        tag: 'div',
        dest: '.header',
        methodProp: [{ className: '"container"' }],
    },
    // logo
    {
        tag: 'a',
        dest: '.container',
        methodProp: [{
            className: '"logo"',
            href: '"/"',
        }, ],
    },
    // logo img
    {
        tag: 'img',
        dest: '.logo',
        methodProp: [{
            className: '"imgClass"',
            src: '"./img/logo.webp"',
            alt: '"logo"',
        }, ],
    },

    // navigation
    { tag: 'nav', dest: '.container', methodProp: [{ className: '"main-nav"' }] },
    //  mobile icon burger
    {
        tag: 'i',
        dest: '.main-nav',
        methodProp: [{
            className: '"fa fa-bars main-nav__burger"',
            ariaHidden: 'true',
        }, ],
    },
    // a links items
    {
        tag: 'a',
        dest: '.main-nav',
        methodProp: [{
            className: '"main-nav__item"',
            text: '"Home"',
            href: '"#"',
        }, ],
    },
    {
        tag: 'a',
        dest: '.main-nav',
        methodProp: [{
            className: '"main-nav__item"',
            text: '"About"',
            href: '"#"',
        }, ],
    },
    {
        tag: 'a',
        dest: '.main-nav',
        methodProp: [{
            className: '"main-nav__item"',
            text: '"Contact"',
            href: '"#"',
        }, ],
    },

    // section phill
    {
        tag: 'section',
        dest: '.main',
        methodProp: [{
            className: '"section phill"',
        }, ],
    },
    {
        tag: 'div',
        dest: '.section.phill',
        methodProp: [{ className: '"container"' }],
    },
    {
        tag: 'div',
        dest: '.section.phill .container',
    },
    {
        tag: 'h3',
        dest: '.section.phill .container div',
        methodProp: [
            { className: '"phill__subtitle"', textContent: '"This is me"' },
        ],
    },
    {
        tag: 'h1',
        dest: '.section.phill .container div',
        methodProp: [
            { className: '"phill__title"', textContent: '"Philip Gilbert"' },
        ],
    },
    {
        tag: 'p',
        dest: '.section.phill .container div',
        methodProp: [{
            textContent: '"You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures."',
        }, ],
    },
    {
        tag: 'button',
        dest: '.section.phill .container div',
        methodProp: [{ className: '"btn"', textContent: '"Discover now"' }],
    },
    {
        tag: 'img',
        dest: '.section.phill .container',
        methodProp: [{
            className: '"phill__image"',
            src: '"./img/hero-img.webp"',
            alt: '"Philip Gilber"',
        }, ],
    },

    // section services
    {
        tag: 'section',
        dest: '.main',
        methodProp: [{
            className: '"section services"',
            ariaLabel: '"services"',
        }, ],
    },
    {
        tag: 'div',
        dest: '.section.services',
        methodProp: [{
            className: '"container"',
        }, ],
    },
    {
        tag: 'h2',
        dest: '.section.services .container',
        methodProp: [
            { className: '"services__title"', textContent: '"My Offered Services"' },
        ],
    },
    {
        tag: 'p',
        dest: '.section.services .container',
        methodProp: [{
            className: '"services__under-title-text"',
            textContent: '"At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected."',
        }, ],
    },
    {
        tag: 'div',
        dest: '.section.services .container',
        methodProp: [{ className: '"services-cards-container"' }],
    },

    // s-card 1
    {
        tag: 'div',
        dest: '.services-cards-container',
        methodProp: [{ className: '"s-card"' }],
    },
    {
        tag: 'i',
        dest: '.s-card:last-child',
        methodProp: [
            { className: '"fa fa-bars s-card__icon"', ariaHidden: 'true' },
        ],
    },
    {
        tag: 'h3',
        dest: '.s-card:last-child',
        methodProp: [{ className: '"s-card__title"', textContent: '"Some title"' }],
    },
    {
        tag: 'p',
        dest: '.s-card:last-child',
        methodProp: [{
            textContent: '"It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult."',
        }, ],
    },
    // s-card 2
    {
        tag: 'div',
        dest: '.services-cards-container',
        methodProp: [{ className: '"s-card"' }],
    },
    {
        tag: 'i',
        dest: '.s-card:last-child',
        methodProp: [
            { className: '"fa fa-facebook s-card__icon"', ariaHidden: 'true' },
        ],
    },
    {
        tag: 'h3',
        dest: '.s-card:last-child',
        methodProp: [{ className: '"s-card__title"', textContent: '"Some title"' }],
    },
    {
        tag: 'p',
        dest: '.s-card:last-child',
        methodProp: [{
            textContent: '"It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult."',
        }, ],
    },

    // s-card 3
    {
        tag: 'div',

        dest: '.services-cards-container',
        methodProp: [{ className: '"s-card"' }],
    },
    {
        tag: 'i',
        dest: '.s-card:last-child',
        methodProp: [
            { className: '"fa fa-hotel s-card__icon"', ariaHidden: 'true' },
        ],
    },
    {
        tag: 'h3',
        dest: '.s-card:last-child',
        methodProp: [{ className: '"s-card__title"', textContent: '"Some title"' }],
    },
    {
        tag: 'p',
        dest: '.s-card:last-child',
        methodProp: [{
            textContent: '"It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult."',
        }, ],
    },

    // s-card 4
    {
        tag: 'div',

        dest: '.services-cards-container',
        methodProp: [{ className: '"s-card"' }],
    },
    {
        tag: 'i',
        dest: '.s-card:last-child',
        methodProp: [{ className: '"fa fa-bar s-card__icon"', ariaHidden: 'true' }],
    },
    {
        tag: 'h3',
        dest: '.s-card:last-child',
        methodProp: [{ className: '"s-card__title"', textContent: '"Some title"' }],
    },
    {
        tag: 'p',
        dest: '.s-card:last-child',
        methodProp: [{
            textContent: '"It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult."',
        }, ],
    },

    // s-card 5
    {
        tag: 'div',

        dest: '.services-cards-container',
        methodProp: [{ className: '"s-card"' }],
    },
    {
        tag: 'i',
        dest: '.s-card:last-child',
        methodProp: [
            { className: '"fa fa-facebook s-card__icon"', ariaHidden: 'true' },
        ],
    },
    {
        tag: 'h3',
        dest: '.s-card:last-child',
        methodProp: [{ className: '"s-card__title"', textContent: '"Some title"' }],
    },
    {
        tag: 'p',
        dest: '.s-card:last-child',
        methodProp: [{
            textContent: '"It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult."',
        }, ],
    },

    // s-card 6
    {
        tag: 'div',
        dest: '.services-cards-container',
        methodProp: [{ className: '"s-card"' }],
    },
    {
        tag: 'i',
        dest: '.s-card:last-child',
        methodProp: [
            { className: '"fa fa-hotel s-card__icon"', ariaHidden: 'true' },
        ],
    },
    {
        tag: 'h3',
        dest: '.s-card:last-child',
        methodProp: [{ className: '"s-card__title"', textContent: '"Some title"' }],
    },
    {
        tag: 'p',
        dest: '.s-card:last-child',
        methodProp: [{
            textContent: '"It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult."',
        }, ],
    },
];

export const htmlDom = [{
        // header
        tag: 'header',
        dest: '.main',
        methodProp: [{ className: 'header' }],
    },
    {
        tag: 'div',
        dest: '.header',
        methodProp: [{ className: 'container' }],
    },
    // logo
    {
        tag: 'a',
        dest: '.container',
        methodProp: [{
            className: 'logo',
            href: 'indexf.html',
        }, ],
    },
    // logo img
    {
        tag: 'img',
        dest: '.logo',
        methodProp: [{
            className: 'imgClass',
            src: './img/logo.webp',
            alt: 'logo',
        }, ],
    },

    // navigation
    {
        tag: 'nav',
        dest: '.container',
        methodProp: [{ className: 'main-nav' }],
    },
    //  mobile icon burger
    {
        tag: 'i',
        dest: '.main-nav',
        methodProp: [{
            className: 'fa fa-bars main-nav__burger',
            ariaHidden: 'true',
        }, ],
    },
    // a links items
    {
        tag: 'a',
        dest: '.main-nav',
        methodProp: [{
            className: 'main-nav__item',
            text: 'Home',
            href: '#',
        }, ],
    },
    {
        tag: 'a',
        dest: '.main-nav',
        methodProp: [{
            className: 'main-nav__item',
            text: 'About',
            href: '#',
        }, ],
    },
    {
        tag: 'a',
        dest: '.main-nav',
        methodProp: [{
            className: 'main-nav__item',
            text: 'Contact',
            href: '#',
        }, ],
    },

    // section phill
    {
        tag: 'section',
        dest: '.main',
        methodProp: [{
            className: 'section phill',
        }, ],
    },
    {
        tag: 'div',
        //        dest: '.section.phill:last-child',
        dest: '.section.phill:last-child',
        methodProp: [{ className: 'container' }],
    },
    {
        tag: 'div',
        //        dest: '.section.phill:last-child',
        dest: '.section.phill .container:last-child',
        methodProp: [{ className: 'container2' }],
    },

    //  {
    //    tag: 'div',
    //       dest: '.section.phill .container div',
    //    dest: '.section.phill .container div:last-child',
    //  },

    {
        tag: 'h3',
        //        dest: '.section.phill .container div',
        dest: '.section.phill .container2:last-child',
        methodProp: [{ className: 'phill__subtitle', textContent: 'This is me' }],
    },
    {
        tag: 'h1',
        // dest: '.section.phill .container div',
        dest: '.section.phill .container2:last-child',
        methodProp: [{ className: 'phill__title', textContent: 'Philip Gilbert' }],
    },
    {
        tag: 'p',
        dest: '.section.phill .container2:last-child',
        methodProp: [{
            textContent: 'You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.',
        }, ],
    },
    {
        tag: 'button',
        dest: '.section.phill .container2:last-child',
        methodProp: [{ className: 'btn', textContent: 'Discover now' }],
    },
    {
        tag: 'img',
        dest: '.section.phill .container',
        methodProp: [{
            className: 'phill__image',
            src: './img/hero-img.webp',
            alt: 'Philip Gilber',
        }, ],
    },

    // section services
    {
        tag: 'section',
        dest: '.main',
        methodProp: [{
            className: 'section services',
            ariaLabel: 'services',
        }, ],
    },
    {
        tag: 'div',
        dest: '.section.services',
        methodProp: [{
            className: 'container',
        }, ],
    },
    {
        tag: 'h2',
        dest: '.section.services .container',
        methodProp: [{
            className: 'services__title',
            textContent: 'My Offered Services',
        }, ],
    },
    {
        tag: 'p',
        dest: '.section.services .container',
        methodProp: [{
            className: 'services__under-title-text',
            textContent: 'At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected.',
        }, ],
    },
    {
        tag: 'div',
        dest: '.section.services .container',
        methodProp: [{ className: 'services-cards-container' }],
    },

    // s-card 1
];