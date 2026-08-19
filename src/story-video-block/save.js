/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';

import { getAutoThumbnail, getEmbedUrl } from './utils';
import { PLAY_ICONS } from './icons';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * The facade/video swap on click is handled entirely by the Interactivity
 * API store in `view.js` (registered as a script module) — this file only
 * emits the static markup plus `data-wp-*` directives for it to hydrate.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-interactivity/
 *
 * @param {Object} props            Block save props.
 * @param {Object} props.attributes Current block attributes.
 * @return {Element|null} Element to save, or null to render nothing.
 */
export default function save( { attributes } ) {
	const {
		videoUrl,
		videoProvider,
		videoId,
		posterUrl,
		posterAlt,
		heading,
		headingTag,
		description,
		playButtonStyle,
		playIcon,
		videoPosition,
		showQuotationMarks,
		cardStyle,
		quoteText,
		authorName,
		authorTitle,
		avatarUrl,
		avatarAlt,
		transcriptUrl,
		transcriptName,
		backgroundColor,
		textColor,
	} = attributes;

	// Required fields — publishing is already blocked without these
	// (see edit.js's post-lock), but save() can still run for e.g.
	// autosaves/revisions, so stay defensive.
	if ( ! videoUrl ) {
		return null;
	}

	const isFile = videoProvider === 'file';
	const autoThumbnail = getAutoThumbnail( videoProvider, videoId );
	const effectivePoster = posterUrl || autoThumbnail;
	const embedUrl = isFile
		? ''
		: getEmbedUrl( videoProvider, videoId, videoUrl );

	const blockProps = useBlockProps.save( {
		className: clsx( {
			[ `has-media-${ videoPosition }` ]: videoPosition,
			[ `card-style-${ cardStyle }` ]: cardStyle,
		} ),
		style: {
			'--story-video-block-bg': backgroundColor || undefined,
			'--story-video-block-color': textColor || undefined,
		},
		...( ! isFile
			? {
					'data-wp-interactive': 'create-block/story-video-block',
					'data-wp-context': JSON.stringify( {
						isPlaying: false,
						embedUrl,
						videoSrc: '',
					} ),
			  }
			: {} ),
	} );

	return (
		<div { ...blockProps }>
			<div className="story-video-block__media">
				{ isFile ? (
					<video
						className="story-video-block__video"
						src={ videoUrl }
						poster={ effectivePoster || undefined }
						controls
						preload="none"
					/>
				) : (
					<>
						<a
							href={ videoUrl }
							target="_blank"
							rel="noopener noreferrer"
							className="story-video-block__facade"
							data-play-style={ playButtonStyle }
							data-wp-on--click="actions.play"
							data-wp-bind--hidden="state.isPlaying"
							aria-label={
								heading
									? __( 'Play video:', 'story-video-block' ) +
									  ' ' +
									  heading
									: __( 'Play video', 'story-video-block' )
							}
						>
							{ effectivePoster && (
								<img
									src={ effectivePoster }
									alt={ posterAlt || '' }
								/>
							) }
							<span
								className="story-video-block__play-btn"
								aria-hidden="true"
							>
								{ PLAY_ICONS[ playIcon ] ||
									PLAY_ICONS.triangle }
							</span>
						</a>
						<div
							className="story-video-block__video"
							hidden
							data-wp-bind--hidden="state.isNotPlaying"
						>
							<iframe
								title={
									heading ||
									__( 'Video', 'story-video-block' )
								}
								data-wp-bind--src="context.videoSrc"
								allow="autoplay; fullscreen; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</>
				) }
			</div>

			<div className="story-video-block__content">
				{ showQuotationMarks ? (
					<>
						<RichText.Content
							tagName="blockquote"
							className="story-video-block__quote"
							value={ quoteText }
						/>
						<div className="story-video-block__author">
							{ avatarUrl && (
								<img
									className="story-video-block__author-avatar"
									src={ avatarUrl }
									alt={ avatarAlt || '' }
								/>
							) }
							<div className="story-video-block__author-info">
								<RichText.Content
									tagName="p"
									className="story-video-block__author-name"
									value={ authorName }
								/>
								<RichText.Content
									tagName="p"
									className="story-video-block__author-title"
									value={ authorTitle }
								/>
							</div>
						</div>
					</>
				) : (
					<>
						<RichText.Content
							tagName={ headingTag || 'h2' }
							className="story-video-block__heading"
							value={ heading }
						/>
						<RichText.Content
							tagName="p"
							className="story-video-block__description"
							value={ description }
						/>
					</>
				) }
				{ transcriptUrl && (
					<a
						className="story-video-block__transcript"
						href={ transcriptUrl }
						target="_blank"
						rel="noopener noreferrer"
					>
						{ __( 'Download transcript', 'story-video-block' ) }
						{ transcriptName ? ` – ${ transcriptName }` : '' }
						<span className="screen-reader-text">
							{ __(
								'(opens in a new tab)',
								'story-video-block'
							) }
						</span>
					</a>
				) }
			</div>
		</div>
	);
}
