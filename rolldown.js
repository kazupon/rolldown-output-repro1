import { rolldown } from '@rolldown/node'

const bundle = await rolldown({
  input: 'app.js',
})

await bundle.write({
  format: 'esm',
  sourcemap: true,
  // dir: 'build',
  file: 'rolldown_build/rolldown.js'
})
