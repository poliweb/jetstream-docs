module.exports = {
    title: "Laravel Jetstream",
    description: "Beautifully designed application scaffolding for Laravel",
    base: '/',

    head: require('./head'),

    themeConfig: {
        logo: '/assets/img/logo.svg',
        displayAllHeaders: true,
        activeHeaderLinks: false,
        searchPlaceholder: 'Press / to search',
        lastUpdated: false, // string | boolean
        sidebarDepth: 1,

        repo: 'laravel/jetstream',

        docsRepo: 'laravel/jetstream-docs',
        editLinks: true,
        editLinkText: 'Help us improve this page!',

        nav: [
            { text: 'Home', link: '/', target: '_self' },
        ],

        sidebar: {
            '/1.x/': require('./1.x')
        },
    },
}
