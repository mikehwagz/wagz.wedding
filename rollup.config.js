import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import terser from '@rollup/plugin-terser'
import styles from 'rollup-plugin-styles'
import manifest from 'rollup-plugin-output-manifest'

const prod = process.env.NODE_ENV === 'production'

export default {
  input: 'client/main.js',
  output: {
    dir: 'build/static',
    entryFileNames: prod ? '[name].[hash].js' : '[name].js',
    chunkFileNames: prod ? '[name].[hash].js' : '[name].js',
    assetFileNames: prod ? '[name].[hash].[ext]' : '[name].[ext]',
    format: 'iife',
    sourcemap: !prod,
  },
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    resolve(),
    commonjs(),
    esbuild({
      minify: false,
      jsxFactory: 'h',
    }),
    prod && terser({ format: { comments: false } }),
    styles({ mode: 'extract', url: false }),
    manifest({
      fileName: '../../manifest.json',
      keyValueDecorator: (k, v) => ({
        [k.split('.').length === 1 ? [k, v.split('.').pop()].join('.') : k]: v,
      }),
    }),
  ],
}
