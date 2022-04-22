module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    // 'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-undef': 0,
    // 'prettier/prettier': 1,
    'react/self-closing-comp': 0,
    'no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_|^err|^ev', // _xxx, err, error, ev, event
      },
    ],
    'vue/no-unused-components': 1,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    semi: 0,
    'no-empty-function': 1, // 禁止空函数
    eqeqeq: 2,
    'no-multi-spaces': 2, // 禁止使用多个空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-in-parens': 2, // 强制在圆括号内使用一致的空格
    'no-var': 2, // 要求使用 let 或 const 而不是 var,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': 1,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
