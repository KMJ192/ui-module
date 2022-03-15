import rollup from './rollup.config';

const dir = 'build';

export default {
  input: './index.ts',
  output: [
    {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: `${dir}/index.js`,
    },
  ],
  ...rollup,
};
