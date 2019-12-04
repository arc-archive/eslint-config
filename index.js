module.exports = {
  extends: [
    'plugin:wc/best-practice',
    'eslint:recommended',
    'google',
    'eslint-config-prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    require.resolve('./src/eslint-plugin-wc-export')
  ],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8
  },
  env: {
    browser: true,
    mocha: true,
    node: true,
    es6: true
  },
  plugins: ['html'],
  rules: {
    'require-jsdoc': 0,
    'comma-dangle': 0,
    'new-cap': ['error', { properties: false, capIsNew: false }],
    'max-len': ['error', { code: 120 }],
    'object-curly-spacing': ['error', 'always'],
    'no-console': ['error'],
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/test/**/*.js', '**/stories/**/*.js', '**/*.config.js'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/test/**/*.js', '**/demo/**/*.js', '**/test/**/*.html', '**/demo/**/*.html', '**/stories/**/*.js'],
      rules: {
        'no-console': 'off',
        'no-unused-expressions': 'off',
        'class-methods-use-this': 'off',
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ]
};
