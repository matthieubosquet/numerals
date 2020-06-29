import typescript from "rollup-plugin-typescript2";
import loadz0r from "rollup-plugin-loadz0r";

export default {
    input: ['./src/numerals.ts', './src/ui.ts'],
    output: [
        {
            dir: './dist',
            format: 'amd'
        }
    ],
    plugins: [
      typescript({
        // Use our own version of TypeScript, rather than the one bundled with the plugin:
        typescript: require("typescript"),
        tsconfigOverride: {
          compilerOptions: {
            module: "esnext",
          }
        }
      }),
      loadz0r()
    ]
}
