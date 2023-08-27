module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Mematikan peringatan untuk memungkinkan pengembalian tanpa tipe eksplisit di fungsi React
    '@typescript-eslint/no-explicit-any': 'warn', // Memberikan peringatan untuk penggunaan tipe 'any'
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
