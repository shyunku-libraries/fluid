import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "index.ts", // 프로젝트의 엔트리 파일
  output: [
    {
      file: "dist/bundle.cjs.js", // CommonJS 형식의 번들 파일
      format: "cjs", // CommonJS 모듈 형식
    },
    {
      file: "dist/bundle.esm.js", // ES 모듈 형식의 번들 파일
      format: "es", // ES 모듈 형식
    },
    {
      file: "dist/bundle.umd.js", // UMD 형식의 번들 파일, 브라우저와 Node.js 양쪽에서 사용 가능
      name: "MyLibrary", // UMD 형식에서 사용될 전역 변수명
      format: "umd",
    },
  ],
  plugins: [
    typescript(), // TypeScript 파일을 컴파일합니다.
    resolve(), // node_modules 안의 패키지를 불러올 수 있게 합니다.
    commonjs(), // CommonJS 모듈을 ES6로 변환합니다.
  ],
};
