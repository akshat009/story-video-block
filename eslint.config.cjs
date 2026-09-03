// Re-export wp-scripts' default flat config so the VSCode ESLint
// extension checks the exact same rules as `npm run lint:js`.
const defaultConfig = require( '@wordpress/scripts/config/eslint.config.cjs' );

module.exports = [
	...defaultConfig,
	{
		// WIP local tooling, never shipped, not lint-clean.
		ignores: [ 'scripts/**' ],
	},
];
