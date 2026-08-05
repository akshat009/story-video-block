/**
 * Frontend behavior for the Story Video Block, built on the Interactivity
 * API. Registered as a script module (`viewScriptModule` in block.json) —
 * `@wordpress/interactivity` only works when loaded as a module, not as a
 * classic script.
 *
 * The block's `save.js` renders both the poster/play-button facade and an
 * empty (no `src`) iframe, linked together by `data-wp-*` directives below.
 * Clicking the facade sets the iframe's `src` for the first time — so the
 * embed is only fetched once the visitor actually presses play, matching
 * this block's "lazy-loaded video embeds" description.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-interactivity/
 */
import { store, getContext } from '@wordpress/interactivity';

store( 'create-block/story-video-block', {
	state: {
		get isPlaying() {
			return getContext().isPlaying;
		},
		get isNotPlaying() {
			return ! getContext().isPlaying;
		},
	},
	actions: {
		play( event ) {
			const context = getContext();

			if ( context.isPlaying ) {
				return;
			}

			// No direct-embed URL for this provider (e.g. TikTok) — let the
			// facade's own href navigate to the original video URL instead.
			if ( ! context.embedUrl ) {
				return;
			}

			event.preventDefault();
			context.videoSrc = context.embedUrl;
			context.isPlaying = true;
		},
	},
} );
