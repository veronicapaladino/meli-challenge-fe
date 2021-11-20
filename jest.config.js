module.exports = {
    setupFiles: [
      "./tests-setup.ts"
    ],
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json"
    ],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
      "^.+\\.svg$": "./svgTransform.ts",
      "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
    }
  }