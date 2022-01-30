module.exports = {
    root: true,
    env: {
        node: true,
    },
    'extends': [
        'plugin:vue/recommended',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/member-delimiter-style': ['error',
            {
                'multiline': {
                    'delimiter': 'none'
                },
                'singleline': {
                    'delimiter': 'comma'
                }
            }
        ],
        'no-console': 'off',
        'no-debugger': 'off',
        'no-prototype-builtins': 'off',
        "@typescript-eslint/ban-ts-ignore": "off", // 允许我用这个： @ts-ignore
        'no-unused-expressions': 'off',
        'space-before-function-paren': ['error', 'never'],
        'vue/array-bracket-spacing': 'error',
        'vue/arrow-spacing': 'error',
        'vue/block-spacing': 'error',
        'vue/brace-style': 'error',
        'vue/camelcase': 'error',
        'vue/comma-dangle': 'error',
        'vue/component-name-in-template-casing': 'error',
        'vue/eqeqeq': 'error',
        'vue/key-spacing': 'error',
        'vue/match-component-file-name': 'error',
        'vue/object-curly-spacing': 'error',
        "no-use-before-define": ["error", { "functions": false, "classes": false }], // 关掉函数未声明就使用的报错
        "@typescript-eslint/no-use-before-define": ["error", { "functions": false, "classes": false }],
        'comma-dangle': [0, 'never'], // 关掉最后一个 , 的报错\
        "vue/max-attributes-per-line": ["error", {
            "singleline": 5, // 一行最多 n 个
            "multiline": {
                "max": 1,
                "allowFirstLine": true
            }
        }],
    },
    overrides: [{
        files: [
            '**/__tests__/*.{j,t}s?(x)',
            '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
            jest: true
        }
    }]
}