import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const config = [
  {
    input: "src/index.tsx",
    external: ["react", "styled-components", /@babel\/runtime/],

    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      commonjs(),
      babel({
        babelHelpers: "runtime",
        plugins: ["@babel/plugin-transform-runtime"],
      }),
      nodeResolve({ extensions }),
      peerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    // external: [/\.css$/],
    plugins: [dts()],
  },
];

export default config;
