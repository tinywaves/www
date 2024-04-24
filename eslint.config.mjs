import dhzh from '@dhzh/eslint-config';

export default dhzh({
  formatters: true,
  react: true,
  rules: {
    'react-refresh/only-export-components': 'off',
  },
});
