import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";

export default [
  // Package
  {
    input: './src/index.ts',
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true
      },
      {
        file: pkg.module,
        format: "esm",
        exports: "named"
      }
    ],
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            module: "ES2015",
            strict: true,
            target: "ES2015"
          },
          exclude: [
            "./src/numerals-ui.ts",
            "./**/*.test.ts"
          ]
        },
        // Use package's dev-dependencies TypeScript rather than the one bundled with rollup-plugin-typescript2
        typescript: require("typescript")
      })
    ]
  },
  // UI
  {
    input: './src/numerals-ui.ts',
    output: [
      {
        dir: "./script/",
        format: "esm",
        exports: "named"
      }
    ],
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            module: "esnext",
            strict: false,
            target: "es2020"
          }
        },
        typescript: require("typescript")
      })
    ]
  }
]
