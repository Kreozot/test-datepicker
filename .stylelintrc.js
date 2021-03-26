module.exports = {
  "extends": [
    "stylelint-config-sass-guidelines",
    "stylelint-config-rational-order",
  ],
  "rules": {
    // Отключение правила в пользу rational-order
    "order/properties-alphabetical-order": null,
    // Отключение для возможности вставлять строки между переменными
    "custom-property-empty-line-before": null,
    // camelCase для удобного использования css-modules
    // ({styles.camelCase} вместо {styles['camel-case']})
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
  },
};