/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    // "^.+\\.fluid$": "./build/fluid-core/src/JestFluidTransformer",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
