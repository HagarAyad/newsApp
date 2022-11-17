module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // plugins: ['react-native-reanimated/plugin'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          ,
        ],
        alias: {
          '~api': './src/api',
          '~navigation': './src/navigation',
          '~screens': './src/screens',
          '~theme': './src/theme',
          '~types': './src/types',
          '~locals': './src/locals',
        },
      },
    ],
  ],
};
