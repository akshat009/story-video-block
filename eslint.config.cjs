// Re-export wp-scripts' default flat config so the VSCode ESLint
// extension checks the exact same rules as `npm run lint:js`.
module.exports = require( '@wordpress/scripts/config/eslint.config.cjs' );
