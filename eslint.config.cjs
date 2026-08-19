// Re-export wp-scripts' default flat config so the VSCode ESLint
// extension checks the exact same rules as `npm run lint:js`.
const base = require( '@wordpress/scripts/config/eslint.config.cjs' );

module.exports = [
	// scripts/ is gitignored dev-only tooling (local screenshot/asset
	// generation) — not part of the plugin's shipped code, so it isn't
	// held to the same lint bar.
	{ ignores: [ 'scripts/**' ] },
	...base,
];
