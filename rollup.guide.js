import rollup from './rollup.config';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const dir = 'dist';
const plugins = [
  htmlTemplate({
    template: 'public/index.html',
    target: `${dir}/index.html`,
  }),
  serve({
    open: true,
    verbose: true,
    contentBase: ['', dir],
    historyApiFallback: true,
    host: 'localhost',
    port: 8084,
  }),
  livereload({
    watch: ['', dir],
  }),
];

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      file: `${dir}/index.js`,
    },
  ],
  plugins: [...rollup.plugins, ...plugins],
};
