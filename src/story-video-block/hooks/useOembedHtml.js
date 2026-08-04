import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { addAutoplay } from '../utils';

/**
 * Fetches oEmbed HTML for a video URL via WordPress's own oEmbed proxy
 * (the same mechanism the core Embed block uses), and injects
 * `autoplay=1` into the embedded iframe's src so playback starts as soon
 * as our own play button is clicked, instead of requiring a second click
 * on the provider's own play button inside the embed.
 *
 * @param {string} videoUrl      The raw video URL.
 * @param {string} videoProvider Detected provider ('file' is skipped — it
 *                               doesn't use oEmbed, just a <video> tag).
 * @return {string} The (possibly empty, while loading/on error) embed HTML.
 */
export default function useOembedHtml( videoUrl, videoProvider ) {
	const [ embedHtml, setEmbedHtml ] = useState( '' );

	useEffect( () => {
		if ( ! videoUrl || videoProvider === 'file' ) {
			setEmbedHtml( '' );
			return;
		}

		let cancelled = false;

		apiFetch( {
			path: `/oembed/1.0/proxy?url=${ encodeURIComponent( videoUrl ) }`,
		} )
			.then( ( response ) => {
				if ( ! cancelled && response && response.html ) {
					setEmbedHtml( addAutoplay( response.html ) );
				}
			} )
			.catch( () => {
				if ( ! cancelled ) {
					setEmbedHtml( '' );
				}
			} );

		return () => {
			cancelled = true;
		};
	}, [ videoUrl, videoProvider ] );

	return embedHtml;
}
