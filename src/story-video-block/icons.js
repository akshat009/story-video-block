/**
 * Retrieves the translation of text.
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Built-in play-button glyphs (no external icon library required out of
 * the box). Each fills its own box and uses currentColor so the
 * play-button-style colors still apply.
 *
 * Both the icon set and the dropdown options are run through WordPress
 * filters, so any theme/plugin can add icons from **whichever** icon
 * library it prefers — this block has no opinion on which one. Add the
 * filters in a small JS file enqueued after this block's editor script
 * (`wp-hooks` as a dependency). A few examples:
 *
 * — Font Awesome (webfont/class-based, e.g. via @fortawesome/fontawesome-free):
 *   wp.hooks.addFilter( 'storyVideoBlock.playIcons', 'my-plugin/fa', ( icons ) => ( {
 *       ...icons,
 *       faPlay: <i className="fa-solid fa-circle-play"></i>,
 *   } ) );
 *
 * — Bootstrap Icons (SVG sprite, e.g. via bootstrap-icons package):
 *   wp.hooks.addFilter( 'storyVideoBlock.playIcons', 'my-plugin/bi', ( icons ) => ( {
 *       ...icons,
 *       biPlay: <svg><use href="/icons/bootstrap-icons.svg#play-circle-fill" /></svg>,
 *   } ) );
 *
 * — Feather Icons (inline SVG, e.g. via react-feather / feather-icons):
 *   wp.hooks.addFilter( 'storyVideoBlock.playIcons', 'my-plugin/feather', ( icons ) => ( {
 *       ...icons,
 *       featherPlay: <PlayCircle />, // from 'react-feather'
 *   } ) );
 *
 * — Material Symbols (Google, ligature-font based):
 *   wp.hooks.addFilter( 'storyVideoBlock.playIcons', 'my-plugin/material', ( icons ) => ( {
 *       ...icons,
 *       materialPlay: <span className="material-symbols-outlined">play_circle</span>,
 *   } ) );
 *
 * Whichever you pick, also add a matching dropdown entry:
 *   wp.hooks.addFilter( 'storyVideoBlock.playIconOptions', 'my-plugin/icons', ( options ) => [
 *       ...options,
 *       { label: 'My custom icon', value: 'faPlay' }, // value = key used above
 *   ] );
 */
export const PLAY_ICONS = applyFilters( 'storyVideoBlock.playIcons', {
	triangle: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
			<path d="M8 5v14l11-7z" fill="currentColor" />
		</svg>
	),
	circle: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
			<circle
				cx="12"
				cy="12"
				r="9.5"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path d="M10 8v8l6-4z" fill="currentColor" />
		</svg>
	),
	rounded: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
			<path
				d="M8.5 5.6c0-1.1 1.2-1.8 2.2-1.2l9 6.4c.9.7.9 2 0 2.6l-9 6.4c-1 .6-2.2 0-2.2-1.2z"
				fill="currentColor"
			/>
		</svg>
	),
	solid: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
			<circle cx="12" cy="12" r="10" fill="currentColor" />
			<path d="M10 8v8l6-4z" fill="#fff" />
		</svg>
	),
} );

export const PLAY_ICON_OPTIONS = applyFilters(
	'storyVideoBlock.playIconOptions',
	[
		{ label: __( 'Triangle', 'story-video-block' ), value: 'triangle' },
		{ label: __( 'Circle outline', 'story-video-block' ), value: 'circle' },
		{ label: __( 'Rounded', 'story-video-block' ), value: 'rounded' },
		{ label: __( 'Solid circle', 'story-video-block' ), value: 'solid' },
	]
);
