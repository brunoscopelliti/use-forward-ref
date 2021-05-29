import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "package/src/index.js",
  output: [
    {
      exports: "default",
      file: "package/dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "package/dist/index.es.js",
      format: "es",
      sourcemap: true,
    },
  ],
  external: [
    "react",
  ],
  plugins: [
    babel({ babelHelpers: "bundled" }),
    commonjs(),
  ],
};
