module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                corejs: { version: 3.19 },
                targets: 'defaults',
                useBuiltIns: 'usage'
            }
        ],
        '@babel/preset-typescript'
    ]
};
