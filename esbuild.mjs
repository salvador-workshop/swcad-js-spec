import * as esbuild from 'esbuild'

// Build the main library

await esbuild.buildSync({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/swcad-spec.js',
  target: 'es2020',
  format: 'cjs',
})

await esbuild.buildSync({
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: true,
  outfile: 'dist/swcad-spec.min.js',
  target: 'es2020',
  format: 'cjs',
})


// Build the debug versions

await esbuild.buildSync({
  entryPoints: ['src/debug.js'],
  bundle: true,
  outfile: 'dist/swcad-spec.debug.js',
  target: 'es2020',
  format: 'cjs',
})

await esbuild.buildSync({
  entryPoints: ['src/debug.js'],
  bundle: true,
  minify: true,
  outfile: 'dist/swcad-spec.debug.min.js',
  target: 'es2020',
  format: 'cjs',
})
