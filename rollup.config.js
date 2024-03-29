import babel from "@rollup/plugin-babel"
import dts from "rollup-plugin-dts"
import commonjs from "@rollup/plugin-commonjs"
import css from "rollup-plugin-import-css"
import image from "@rollup/plugin-image"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import external from "rollup-plugin-peer-deps-external"
import { terser } from "rollup-plugin-terser"

const input = "src/index.tsx"

const plugins = [
  babel({
    exclude: "node_modules/**",
    presets: ["@babel/preset-react"],
    babelHelpers: "runtime",
    plugins: ["@babel/plugin-transform-runtime"]
  }),
  external(),
  resolve(),
  commonjs({
    include: ["node_modules/**"]
  }),
  typescript(),
  image(),
  css(),
  terser()
]

export default [
  {
    input,
    output: {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true
    },
    plugins
  },
  {
    input,
    output: {
      file: "dist/index.es.js",
      format: "es",
      exports: "named",
      sourcemap: true
    },
    plugins
  },
  {
    input: 'src/index.tsx',
    output: {
      file: "dist/index.d.ts",
      format: "es"
    },
    plugins: [dts()]
  }
]
