/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	PanelColorSettings,
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import {
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
	Button,
	BaseControl,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import clsx from 'clsx';

import './editor.scss';
import { parseVideoUrl, getAutoThumbnail } from './utils';
import { PLAY_ICONS, PLAY_ICON_OPTIONS } from './icons';
import useOembedHtml from './hooks/useOembedHtml';
import EmbedIframe from './components/EmbedIframe';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object}   props               Block edit props.
 * @param {Object}   props.attributes    Current block attributes.
 * @param {Function} props.setAttributes Updates block attributes.
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const {
		videoUrl,
		videoProvider,
		videoId,
		posterUrl,
		posterId,
		heading,
		headingTag,
		description,
		playButtonStyle,
		playIcon,
		videoPosition,
		showQuotationMarks,
		cardStyle,
		transcriptUrl,
		transcriptName,
		backgroundColor,
		textColor,
	} = attributes;

	const onChangeVideoUrl = ( newUrl ) => {
		const { provider, id } = parseVideoUrl( newUrl );
		setAttributes( {
			videoUrl: newUrl,
			videoProvider: provider,
			videoId: id,
		} );
	};

	const onSelectPoster = ( media ) => {
		setAttributes( {
			posterUrl: media.url,
			posterId: media.id,
			posterAlt: media.alt || '',
		} );
	};

	const onRemovePoster = () => {
		setAttributes( { posterUrl: '', posterId: undefined, posterAlt: '' } );
	};

	const onSelectTranscript = ( media ) => {
		setAttributes( {
			transcriptUrl: media.url,
			transcriptName: media.title || media.filename || '',
			transcriptSize: media.filesizeHumanReadable || '',
		} );
	};

	const onRemoveTranscript = () => {
		setAttributes( {
			transcriptUrl: '',
			transcriptName: '',
			transcriptSize: '',
		} );
	};

	const autoThumbnail = getAutoThumbnail( videoProvider, videoId );
	const effectivePoster = posterUrl || autoThumbnail;
	const embedHtml = useOembedHtml( videoUrl, videoProvider );

	const [ isPlaying, setIsPlaying ] = useState( false );

	// Reset back to the poster whenever the video itself changes.
	useEffect( () => {
		setIsPlaying( false );
	}, [ videoUrl ] );

	const showVideo =
		videoUrl &&
		videoProvider !== 'file' &&
		( isPlaying || ! effectivePoster );
	const showFacade =
		videoUrl && videoProvider !== 'file' && ! isPlaying && effectivePoster;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Video', 'story-video-block' ) }
					initialOpen
				>
					<TextControl
						label={ __( 'Video URL', 'story-video-block' ) }
						value={ videoUrl }
						onChange={ onChangeVideoUrl }
						help={
							videoProvider
								? __( 'Detected:', 'story-video-block' ) +
								  ' ' +
								  videoProvider
								: __(
										'YouTube, Vimeo, or a direct video file URL.',
										'story-video-block'
								  )
						}
						type="url"
					/>

					<BaseControl
						id="story-video-block-poster-image"
						label={ __( 'Poster image', 'story-video-block' ) }
					>
						{ effectivePoster && (
							<img
								src={ effectivePoster }
								alt=""
								style={ { width: '100%', marginBottom: '8px' } }
							/>
						) }
						{ ! autoThumbnail && (
							<>
								<MediaUploadCheck>
									<MediaUpload
										onSelect={ onSelectPoster }
										allowedTypes={ [ 'image' ] }
										value={ posterId }
										render={ ( { open } ) => (
											<Button
												variant="secondary"
												onClick={ open }
											>
												{ posterUrl
													? __(
															'Replace poster',
															'story-video-block'
													  )
													: __(
															'Select poster image',
															'story-video-block'
													  ) }
											</Button>
										) }
									/>
								</MediaUploadCheck>
								{ posterUrl && (
									<Button
										variant="link"
										isDestructive
										onClick={ onRemovePoster }
										style={ { marginLeft: '8px' } }
									>
										{ __( 'Remove', 'story-video-block' ) }
									</Button>
								) }
							</>
						) }
						{ ! posterUrl && autoThumbnail && (
							<p className="description">
								{ __(
									'Using the video thumbnail automatically.',
									'story-video-block'
								) }
							</p>
						) }
						{ ! posterUrl && videoProvider && ! autoThumbnail && (
							<p className="description">
								{ __(
									'Automatic thumbnail is only available for YouTube, Dailymotion, and Loom. Please upload a poster image for this video.',
									'story-video-block'
								) }
							</p>
						) }
					</BaseControl>

					<SelectControl
						label={ __( 'Play button style', 'story-video-block' ) }
						value={ playButtonStyle }
						options={ [
							{
								label: __( 'Default', 'story-video-block' ),
								value: 'default',
							},
							{
								label: __( 'Minimal', 'story-video-block' ),
								value: 'minimal',
							},
							{
								label: __( 'Branded', 'story-video-block' ),
								value: 'branded',
							},
						] }
						onChange={ ( v ) =>
							setAttributes( { playButtonStyle: v } )
						}
					/>
					<SelectControl
						label={ __( 'Play button icon', 'story-video-block' ) }
						value={ playIcon }
						options={ PLAY_ICON_OPTIONS }
						onChange={ ( v ) => setAttributes( { playIcon: v } ) }
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'Layout', 'story-video-block' ) }
					initialOpen={ false }
				>
					<SelectControl
						label={ __( 'Media position', 'story-video-block' ) }
						value={ videoPosition }
						options={ [
							{ label: 'Left', value: 'left' },
							{ label: 'Right', value: 'right' },
						] }
						onChange={ ( newPosition ) =>
							setAttributes( { videoPosition: newPosition } )
						}
					/>
					<SelectControl
						label={ __( 'Card style', 'story-video-block' ) }
						value={ cardStyle }
						options={ [
							{
								label: __( 'Standard', 'story-video-block' ),
								value: 'standard',
							},
							{
								label: __(
									'Overlapping media',
									'story-video-block'
								),
								value: 'overlap',
							},
						] }
						help={ __(
							'Overlapping media makes the video/poster poke out above and below the card.',
							'story-video-block'
						) }
						onChange={ ( newStyle ) =>
							setAttributes( { cardStyle: newStyle } )
						}
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'Content', 'story-video-block' ) }
					initialOpen={ false }
				>
					<SelectControl
						label={ __( 'Heading tag', 'story-video-block' ) }
						value={ headingTag }
						options={ [
							{ label: 'H2', value: 'h2' },
							{ label: 'H3', value: 'h3' },
							{ label: 'H4', value: 'h4' },
						] }
						onChange={ ( newTag ) =>
							setAttributes( { headingTag: newTag } )
						}
					/>

					<BaseControl
						id="story-video-block-transcript-file"
						label={ __( 'Transcript file', 'story-video-block' ) }
					>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectTranscript }
								allowedTypes={ [
									'application/pdf',
									'text/plain',
									'application/msword',
									'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
								] }
								render={ ( { open } ) => (
									<Button
										variant="secondary"
										onClick={ open }
									>
										{ transcriptUrl
											? __(
													'Replace transcript',
													'story-video-block'
											  )
											: __(
													'Upload transcript',
													'story-video-block'
											  ) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
						{ transcriptUrl && (
							<Button
								variant="link"
								isDestructive
								onClick={ onRemoveTranscript }
								style={ { marginLeft: '8px' } }
							>
								{ __( 'Remove', 'story-video-block' ) }
							</Button>
						) }
						{ transcriptUrl && (
							<p className="description">{ transcriptName }</p>
						) }
						{ ! transcriptUrl && (
							<p className="description">
								{ __(
									'For accessibility: lets visitors read along or download a transcript of the video.',
									'story-video-block'
								) }
							</p>
						) }
					</BaseControl>
				</PanelBody>

				<PanelBody
					title={ __( 'Show Quotation Marks', 'story-video-block' ) }
					initialOpen={ false }
				>
					<p style={ { marginTop: 0, marginBottom: '12px' } }>
						{ __(
							'Toggle the display of quotation marks around the text. When enabled, quotation marks will be shown, and when disabled, they will be hidden.',
							'story-video-block'
						) }
					</p>
					<ToggleControl
						label={ __(
							'Show Quotation Marks',
							'story-video-block'
						) }
						checked={ showQuotationMarks }
						onChange={ ( newValue ) =>
							setAttributes( { showQuotationMarks: newValue } )
						}
					/>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color', 'story-video-block' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: backgroundColor,
							onChange: ( v ) =>
								setAttributes( { backgroundColor: v } ),
							label: __(
								'Background color',
								'story-video-block'
							),
						},
						{
							value: textColor,
							onChange: ( v ) =>
								setAttributes( { textColor: v } ),
							label: __( 'Text color', 'story-video-block' ),
						},
					] }
				/>
			</InspectorControls>

			<div
				{ ...useBlockProps( {
					className: clsx( {
						[ `has-media-${ videoPosition }` ]: videoPosition,
						[ `card-style-${ cardStyle }` ]: cardStyle,
					} ),
					style: {
						backgroundColor: backgroundColor || undefined,
						color: textColor || undefined,
					},
				} ) }
			>
				<div className="story-video-block__media">
					{ videoUrl && videoProvider === 'file' && (
						<video
							className="story-video-block__video"
							src={ videoUrl }
							controls
						/>
					) }
					{ showVideo && embedHtml && (
						<EmbedIframe
							html={ embedHtml }
							title={
								heading || __( 'Video', 'story-video-block' )
							}
						/>
					) }
					{ showVideo && ! embedHtml && (
						<div className="story-video-block__media-placeholder">
							{ __( 'Loading video…', 'story-video-block' ) }
						</div>
					) }
					{ showFacade && (
						<button
							type="button"
							className="story-video-block__facade"
							data-play-style={ playButtonStyle }
							onClick={ () => setIsPlaying( true ) }
							aria-label={
								heading
									? __( 'Play video:', 'story-video-block' ) +
									  ' ' +
									  heading
									: __( 'Play video', 'story-video-block' )
							}
						>
							<img src={ effectivePoster } alt="" />
							<span
								className="story-video-block__play-btn"
								aria-hidden="true"
							>
								{ PLAY_ICONS[ playIcon ] ||
									PLAY_ICONS.triangle }
							</span>
						</button>
					) }
					{ ! videoUrl && (
						<div className="story-video-block__media-placeholder">
							{ __(
								'Add a video URL from the sidebar',
								'story-video-block'
							) }
						</div>
					) }
				</div>

				<div className="story-video-block__content">
					<RichText
						tagName={ headingTag || 'h2' }
						className="story-video-block__heading"
						value={ heading }
						onChange={ ( newHeading ) =>
							setAttributes( { heading: newHeading } )
						}
						placeholder={ __( 'Heading…', 'story-video-block' ) }
					/>
					<RichText
						tagName="p"
						className="story-video-block__description"
						value={ description }
						onChange={ ( newDescription ) =>
							setAttributes( { description: newDescription } )
						}
						placeholder={ __(
							'Sub text / description…',
							'story-video-block'
						) }
					/>
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
		</>
	);
}
