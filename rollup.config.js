import resolve from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/skinview3d.ts",
    output: {
        file: "bundles/skinview3d.bundle.js",
        format: "umd",
        name: "skinview3d",
        banner: "/* @preserve skinview3d / MIT License / https://github.com/bs-community/skinview3d */",
        sourcemap: true,
        compact: true
    },
    plugins: [
        typescript(),
        resolve(),
        terser()
    ]
};
