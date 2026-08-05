import { __ } from '@wordpress/i18n';
import { PLAY_ICONS } from '../icons';

/**
 * Poster image with a play button overlay, shown before the real
 * video/embed is played.
 *
 * @param {Object}   props
 * @param {string}   props.posterUrl       Poster image URL.
 * @param {string}   props.playButtonStyle Play button style variant.
 * @param {string}   props.playIcon        Key into PLAY_ICONS.
 * @param {string}   props.heading         Optional heading, used for the aria-label.
 * @param {Function} props.onClick         Called when the facade is clicked.
 */
export default function VideoFacade( {
	posterUrl,
	playButtonStyle,
	playIcon,
	heading,
	onClick,
} ) {
	return (
		<button
			type="button"
			className="story-video-block__facade"
			data-play-style={ playButtonStyle }
			onClick={ onClick }
			aria-label={
				heading
					? __( 'Play video:', 'story-video-block' ) + ' ' + heading
					: __( 'Play video', 'story-video-block' )
			}
		>
			{ posterUrl && <img src={ posterUrl } alt="" /> }
			<span className="story-video-block__play-btn" aria-hidden="true">
				{ PLAY_ICONS[ playIcon ] || PLAY_ICONS.triangle }
			</span>
		</button>
	);
}
