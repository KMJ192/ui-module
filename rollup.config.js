import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import copyAssets from 'postcss-copy-assets';

const extensions = ['.js', '.ts'];

const plugins = [
  typescript({
    useTsconfigDeclarationDir: true,
  }),
  peerDepsExternal(),
  analyze({
    summaryOnly: true,
  }),
  image(),
  resolve({ extensions }),
  commonjs({ include: /node_modules/ }),
  babel({ extensions, include: ['src/**/*'], babelHelpers: 'bundled' }),
  postcss({
    extract: true,
    modules: false,
    minimize: true,
    plugins: [autoprefixer(), copyAssets()],
  }),
  alias({
    entries: [
      {
        find: '@src',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@react',
        replacement: path.resolve(__dirname, 'src/custom_modules/react'),
      },
      {
        find: '@redux',
        replacement: path.resolve(__dirname, 'src/custom_modules/redux'),
      },
      {
        find: '@router',
        replacement: path.resolve(__dirname, 'src/custom_modules/router'),
      },
      {
        find: '@storage',
        replacement: path.resolve(__dirname, 'src/custom_modules/storage'),
      },
    ],
  }),
  terser(),
];

export default {
  plugins,
};
