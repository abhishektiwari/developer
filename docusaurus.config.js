module.exports = {
    title: 'Axioms Developer Hub',
    tagline: 'Add strong authentication, fine-grained authorization in your apps, devices, and APIs.',
    url: 'https://developer.axioms.io',
    baseUrl: '/',
    favicon: 'https://static.axioms.io/branding/favicon.png',
    organizationName: 'axioms-io',
    projectName: 'developer',
    themeConfig: {
        disableDarkMode: true,
        hideOnScroll: true,
        algolia: {
            apiKey: '9bfad31d9c97b28d4e5f0bfe57dbffaf',
            indexName: 'axioms_developer'
        },
        navbar: {
            title: "Axioms",
            links: [{
                    to: 'docs/getting-started/index',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/axioms-io',
                    label: 'GitHub',
                    position: 'left',
                },
                {
                    href: 'https://community.axioms.io',
                    label: 'Community',
                    position: 'left',
                },
                {
                    href: 'https://jwtdebugger.app/',
                    label: 'JWT Debugger',
                    position: 'right',
                },
                {
                    href: 'https://landing.axioms.io/beta',
                    label: 'Request Invite',
                    position: 'right',
                },
            ],
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
        },
        footer: {
            style: 'light',
            links: [{
                    title: 'Docs',
                    items: [{
                            label: 'Getting Started',
                            to: 'docs/getting-started/index',
                        },
                        {
                            label: 'SDKs & Samples',
                            to: 'docs/sdks-samples/index',
                        },
                        {
                            label: 'REST APIs',
                            href: '#',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/axioms',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/axioms-io',
                        },
                        {
                            label: 'Community',
                            href: 'https://community.axioms.io',
                        },
                    ],
                },
                {
                    title: 'Connect',
                    items: [{
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/company/axioms-io/',
                        },
                        {
                            label: 'Angel',
                            href: 'https://angel.co/company/axioms-io',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/axioms-io',
                        },
                    ],
                },
            ],
            logo: {
                alt: 'D3 Metalab',
                src: 'img/d3ml-logo.svg',
                href: 'https://d3ml.com',
            },
            copyright: `Copyright © ${new Date().getFullYear()} D3 Metalab. All rights reserved.`,
        },
        googleAnalytics: {
            trackingID: 'UA-155726247-2',
            // Optional fields.
            anonymizeIP: true, // Should IPs be anonymized?
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js')
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    stylesheets: [
        'https://fonts.googleapis.com/css?family=Sen|Source+Code+Pro',
        'https://at-ui.github.io/feather-font/css/iconfont.css'
    ],
    plugins: [
        [
            '@docusaurus/plugin-sitemap',
            {
                cacheTime: 600 * 1000, // 600 sec - cache purge period
                changefreq: 'weekly',
                priority: 0.5,
            },
        ],
    ],
};