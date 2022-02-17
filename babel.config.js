module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@config": "./src/config",
          "@constants": "./src/constants",
          "@pages": "./src/pages",
          "@services": "./src/services",
          "@utils": "./src/utils",
          "@router": "./src",
        },
      },
    ],
  ],
};
