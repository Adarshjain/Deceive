import path from 'path';
import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';
import VuePlugin from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import postcss from "rollup-plugin-postcss";
import resolve from '@rollup/plugin-node-resolve';

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

export default {
    input: './src/lib/index.ts',
    output: [
        {
            file: './build/deceive.esm.js',
            format: 'es',
            sourcemap: false
        },
        {
            file: './build/deceive.min.js',
            format: 'iife',
            name: 'bundle'
        }
    ],
    plugins: [
        typescript(),
        babel({
            exclude: 'node_modules/**'
        }),
        alias({
            extensions: ['.ts', '.js', '.vue', '.json', '.styl', '.scss'],
            alias: {
                vue$: 'vue/dist/vue.esm.js',
                '@': resolve('src'),
                '@@': resolve('.')
            }
        }),
        VuePlugin(),
        postcss({
            extensions: ['.css'],
            extract: true,
            modules: true,
            config: {
                path: './postcss.config.js'
            }
        }),
        resolve()
    ]
}