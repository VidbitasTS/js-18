'use strict';

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
            href: '/',
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
        dest: '.section.phill',
        methodProp: [{ className: 'container' }],
    },
    {
        tag: 'div',
        dest: '.section.phill .container',
    },
    {
        tag: 'h3',
        dest: '.section.phill .container div',
        methodProp: [{ className: 'phill__subtitle', textContent: 'This is me' }],
    },
    {
        tag: 'h1',
        dest: '.section.phill .container div',
        methodProp: [{ className: 'phill__title', textContent: 'Philip Gilbert' }],
    },
    {
        tag: 'p',
        dest: '.section.phill .container div',
        methodProp: [{
            textContent: 'You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.',
        }, ],
    },
    {
        tag: 'button',
        dest: '.section.phill .container div',
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
        methodProp: [{ className: 'filterCard' }],
    },

    // Sort
    {
        tag: 'select',
        dest: '.section.services .container :last-child',
        methodProp: [
            { className: 'select_filter', onclick: 'appf.selectFilter()' },
        ],
    },
    {
        tag: 'option',
        dest: '.section.services .container .select_filter',
        methodProp: [{ textContent: 'Visi', value: 'all' }],
    },
    {
        tag: 'option',
        dest: '.section.services .container .select_filter',
        methodProp: [{ textContent: 'A-Z', value: 'a-z' }],
    },
    {
        tag: 'option',
        dest: '.section.services .container .select_filter',
        methodProp: [{ textContent: 'Z-A', value: 'z-a' }],
    },
    // {
    //     tag: 'option',
    //     dest: '.section.services .container .select_filter',
    //     methodProp: [{ textContent: 'Poriniai', value: 'pairs' }],
    // },
    // {
    //     tag: 'option',
    //     dest: '.section.services .container .select_filter',
    //     methodProp: [{ textContent: 'Neporiniai', value: 'unpaired' }],
    // },
    {
        tag: 'button',
        dest: '.section.services .container .filterCard',
        methodProp: [{ className: 'btn_filter', textContent: 'Sort' }],
    },

    // s-card

    {
        tag: 'div',
        dest: '.section.services .container',
        methodProp: [{ className: 'services-cards-container' }],
    },
];

// create cards array and object and puching in htmlDom
function createCard() {
    // cardsValue array
    const cardsValue = [{
            iClassName: 'bars',
            h3Text: 'Some title-1',
            pText: 'It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.',
        },
        {
            iClassName: 'facebook',
            h3Text: 'Some title-2',
            pText: 'It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.',
        },
        {
            iClassName: 'hotel',
            h3Text: 'Some title-3',
            pText: 'It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.',
        },
        {
            iClassName: 'bars',
            h3Text: 'Some title-4',
            pText: 'It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.',
        },
        {
            iClassName: 'facebook',
            h3Text: 'Some title-5',
            pText: 'It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.',
        },
        {
            iClassName: 'hotel',
            h3Text: 'Some title-6',
            pText: 'It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.',
        },
    ];

    // template array
    let template;
    for (const key in cardsValue) {
        template = [{
                tag: 'div',
                dest: '.services-cards-container',
                methodProp: [{ className: 's-card' }],
            },
            {
                tag: 'i',
                dest: '.s-card:last-child',
                methodProp: [{
                    className: 'fa fa-' + cardsValue[key].iClassName + ' s-card__icon',
                    ariaHidden: 'true',
                }, ],
            },
            {
                tag: 'h3',
                dest: '.s-card:last-child',
                methodProp: [
                    { className: 's-card__title', textContent: cardsValue[key].h3Text },
                ],
            },
            {
                tag: 'p',
                dest: '.s-card:last-child',
                methodProp: [{
                    textContent: cardsValue[key].pText,
                }, ],
            },
        ];

        // pushing cardsValue in htmlDom
        for (const key2 in template) {
            htmlDom.push({
                tag: template[key2].tag,
                dest: template[key2].dest,
                methodProp: template[key2].methodProp,
            });
        }
    }
    return htmlDom;
}

createCard();