module.exports = {
    docs: [{
            type: 'category',
            label: 'Getting Started',
            items: [
                "getting-started/index",
                {
                    type: 'category',
                    label: 'Tenant',
                    items: [
                        "getting-started/tenant/index",
                        "getting-started/tenant/subscription",
                        "getting-started/tenant/custom-domain",
                        "getting-started/tenant/pages-endpoints",
                        "getting-started/tenant/invite-management-users",
                        {
                            type: 'category',
                            label: 'Configure',
                            items: [
                                "getting-started/tenant/configure/branding-options",
                                "getting-started/tenant/configure/password-policies",
                                "getting-started/tenant/configure/password-options",
                                "getting-started/tenant/configure/registration-options",
                                "getting-started/tenant/configure/login-and-logout-urls",
                                "getting-started/tenant/configure/jwt-token-options",
                                "getting-started/tenant/configure/multi-factor-options",
                                "getting-started/tenant/configure/passwordless-options",
                                "getting-started/tenant/configure/token-endpoint-options",
                                "getting-started/tenant/configure/authorization-endpoint-options",
                                "getting-started/tenant/configure/captcha-options",
                            ]
                        },
                        "getting-started/tenant/delete",
                    ],
                },
                {
                    type: 'category',
                    label: 'Client',
                    items: [
                        "getting-started/client/index",
                        {
                            type: 'category',
                            label: 'Configure',
                            items: [
                                "getting-started/client/configure/general-options",
                                "getting-started/client/configure/redirect-uris",
                                "getting-started/client/configure/logout-redirect-uris",
                                "getting-started/client/configure/id-token-options",
                                "getting-started/client/configure/branding-options",
                            ]
                        },
                        "getting-started/client/delete",
                    ],
                },
                {
                    type: 'category',
                    label: 'Resource',
                    items: [
                        "getting-started/resource/index",
                        {
                            type: 'category',
                            label: 'Configure',
                            items: [
                                "getting-started/resource/configure/general",
                                "getting-started/resource/configure/permissions",
                                "getting-started/resource/configure/clients",
                            ]
                        },
                        "getting-started/resource/delete",
                    ],
                },
                {
                    type: 'category',
                    label: 'Role',
                    items: [
                        "getting-started/role/index",
                        {
                            type: 'category',
                            label: 'Configure',
                            items: [
                                "getting-started/role/configure/general",
                                "getting-started/role/configure/permissions",
                            ]
                        },
                        "getting-started/role/delete",
                    ],
                },
                {
                    type: 'category',
                    label: 'Key',
                    items: [
                        "getting-started/key/index",
                    ],
                },
                {
                    type: 'category',
                    label: 'User',
                    items: [
                        "getting-started/user/index",
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'SDKs & Samples',
            items: [
                "sdks-samples/index",
                {
                    type: 'category',
                    label: 'Use with SPAs',
                    items: [
                        "sdks-samples/use-with-spas/index",
                        "sdks-samples/use-with-spas/web-js",
                        "sdks-samples/use-with-spas/web-js-with-vue",
                        "sdks-samples/use-with-spas/web-js-with-react",
                        "sdks-samples/use-with-spas/web-js-with-angular"
                    ],
                },
                {
                    type: 'category',
                    label: 'Use with APIs',
                    items: [
                        "sdks-samples/use-with-apis/index",
                        {
                            type: 'category',
                            label: 'Python',
                            items: [
                                "sdks-samples/use-with-apis/python/flask-apis",
                                "sdks-samples/use-with-apis/python/django-apis"
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Node.js',
                            items: [
                                "sdks-samples/use-with-apis/nodejs/express-apis",
                                "sdks-samples/use-with-apis/nodejs/sails-apis"
                            ],
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Use with Native Apps',
                    items: [
                        "sdks-samples/use-with-native-apps/index",
                    ],
                },
                {
                    type: 'category',
                    label: 'Use with Devices',
                    items: [
                        "sdks-samples/use-with-devices/index",
                    ],
                },
                "sdks-samples/jose-standards",
            ],
        },
        {
            type: 'category',
            label: 'OpenID Connect',
            items: [
                "openid-connect/index",
                {
                    type: 'category',
                    label: 'Scopes and Claims',
                    items: [
                        "openid-connect/scopes-claims/index",
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'OAuth 2.0',
            items: [
                "oauth-2.0/index",
                {
                    type: 'category',
                    label: 'JSON Web Algorithms',
                    items: [
                        "oauth-2.0/json-web-algorithms/index",
                    ]
                },
                {
                    type: 'category',
                    label: 'JSON Web Tokens',
                    items: [
                        "oauth-2.0/json-web-tokens/index",
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'REST APIs',
            items: [
                "rest-apis/index",
            ]
        },
    ]
};