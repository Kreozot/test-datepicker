module.exports = {
  extends: ['eslint-config-airbnb-typescript', 'eslint-config-airbnb/hooks'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
  },
  ignorePatterns: ['node_modules/**/*', '/.eslintrc.js'],
  rules: {
    // Отключение для того, чтобы не копипастить API взятых за основу компонентов
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  overrides: [
    {
      files: ['./webpack.*.js'],
      env: {
        browser: false,
        node: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-console': 'off',
      },
    },
  ],
};
