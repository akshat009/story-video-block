<?php
/**
 * Plugin Name:       Story Video Block
 * Description:       A video + text block for testimonial and story-style sections. Paste a YouTube, Vimeo, Dailymotion, Facebook, Twitch, Wistia, Loom, TikTok, VideoPress, or direct video-file URL and it lazy-loads a click-to-play embed.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            Akshat Saxena
 * Author URI:        https://github.com/akshat009
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       story-video-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function story_video_block_init() {
	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'story_video_block_init' );

/**
 * This is a static block (its markup is saved into post_content, not
 * server-rendered), so `render_block_{$block_name}` is the hook that lets
 * PHP still touch its frontend HTML/CSS on every page load — it runs
 * whenever WordPress renders parsed block content (e.g. via `the_content`),
 * static or dynamic blocks alike.
 *
 * Two ways to customize from a theme's functions.php (or a snippet plugin),
 * without editing this plugin:
 *
 * 1) `story_video_block_css_vars` — return CSS custom properties (background,
 *    font-family, gap, or any property you also reference in your own CSS)
 *    to apply to the block wrapper:
 *
 *        add_filter( 'story_video_block_css_vars', function ( $vars, $attributes, $block ) {
 *            $vars['--story-video-block-gap']         = '60px';
 *            $vars['--story-video-block-font-family'] = '"Poppins", sans-serif';
 *            return $vars;
 *        }, 10, 3 );
 *
 * 2) `story_video_block_content` — return modified HTML for full control
 *    beyond CSS (markup, wrapping, extra attributes, etc.):
 *
 *        add_filter( 'story_video_block_content', function ( $html, $attributes, $block ) {
 *            return $html; // Adjust and return.
 *        }, 10, 3 );
 *
 * @param string $block_content The block's saved HTML.
 * @param array  $block         Parsed block, including `attrs`.
 * @return string
 */
function story_video_block_render_hooks( $block_content, $block ) {
	if ( empty( $block_content ) ) {
		return $block_content;
	}

	$attributes = isset( $block['attrs'] ) ? $block['attrs'] : array();

	/**
	 * Filters the CSS custom properties applied to the block wrapper.
	 * Empty by default — nothing is added unless something hooks in.
	 *
	 * @param array $vars       Associative array of `--custom-property` => value.
	 * @param array $attributes The block's saved attributes.
	 * @param array $block      The full parsed block array.
	 */
	$css_vars = apply_filters( 'story_video_block_css_vars', array(), $attributes, $block );

	if ( ! empty( $css_vars ) ) {
		$declarations = '';
		foreach ( $css_vars as $property => $value ) {
			if ( '' === $value || null === $value || ! preg_match( '/^--[a-zA-Z0-9-]+$/', $property ) ) {
				continue;
			}
			$declarations .= sprintf( '%s:%s;', $property, esc_html( $value ) );
		}

		if ( '' !== $declarations ) {
			/**
			 * Filters the CSS selector the custom properties above are scoped to.
			 *
			 * @param string $selector   Defaults to the block's wrapper class.
			 * @param array  $attributes The block's saved attributes.
			 * @param array  $block      The full parsed block array.
			 */
			$selector = apply_filters(
				'story_video_block_css_selector',
				'.wp-block-create-block-story-video-block',
				$attributes,
				$block
			);

			$block_content .= sprintf( '<style>%s{%s}</style>', esc_html( $selector ), $declarations );
		}
	}

	/**
	 * Filters the block's final frontend HTML.
	 *
	 * @param string $block_content The rendered HTML (including the <style> tag above, if any).
	 * @param array  $attributes    The block's saved attributes.
	 * @param array  $block         The full parsed block array.
	 */
	return apply_filters( 'story_video_block_content', $block_content, $attributes, $block );
}
add_filter( 'render_block_create-block/story-video-block', 'story_video_block_render_hooks', 10, 2 );
