module.exports = {
  testEnvironment: 'jsdom',
    transform: {
        '^.+\\.css$': '<rootDir>/jest/cssTransform.js',
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
      transformIgnorePatterns: [
        '^.+\\.module\\.(css|sass|scss)$',
        // '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|mjs|cjs)$',
      ],
  };