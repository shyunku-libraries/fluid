import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import fluid from "./build/fluid-core/src/RollupFluidPlugin.js";

const packages = [
  { name: "fluid", entry: "./packages/fluid/index.ts" },
  { name: "fluid-dom", entry: "./packages/fluid-dom/index.ts" },
  { name: "fluid-core", entry: "./packages/fluid-core/index.ts" },
];

export default packages.map(({ name, entry }) => ({
  input: entry,
  output: [
    {
      file: `./dist/${name}/bundle.cjs.js`, // CommonJS 형식의 번들 파일
      format: "cjs",
    },
    {
      file: `./dist/${name}/bundle.esm.js`, // ES 모듈 형식의 번들 파일
      format: "es",
    },
    {
      file: `./dist/${name}/bundle.umd.js`, // UMD 형식의 번들 파일
      name, // UMD 모듈의 이름
      format: "umd",
    },
  ],
  plugins: [typescript(), resolve(), commonjs(), fluid()],
}));
