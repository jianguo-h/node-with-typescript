module.exports = {
  '*.{ts,js}': ['prettier --ignore-path .eslintignore --write', 'eslint --fix'],
};
