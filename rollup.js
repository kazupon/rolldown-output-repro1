import { rollup } from 'rollup'

const bundle = await rollup({
  input: 'app.js',
})

await bundle.write({
  format: 'esm',
  sourcemap: true,
  file: 'rollup_build/rollup.js'
})
