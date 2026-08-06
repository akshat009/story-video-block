/**
 * Detects the provider + id from a pasted video URL.
 *
 * @param {string} Url Raw URL typed/pasted by the user.
 * @return {{provider: string, id: string}} Detected provider and id.
 */
export function parseVideoUrl( Url ) {
	if ( ! Url ) {
	return { provider: '', id: '' };
	}

	const youtubeMatch = Url.match(
		/(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
	);

	if ( youtubeMatch ) {
		return { provider: 'youtube', id: youtubeMatch[ 1 ] };
	}

	const vimeoMatch = Url.match( /vimeo\.com\/(?:video\/)?(\d+)/ );

	if ( vimeoMatch ) {
		return { provider: 'vimeo', id: vimeoMatch[ 1 ] };
	}

	const dailymotionMatch = Url.match(
		/(?:dailymotion\.com\/video\/|dai\.ly\/)([a-zA-Z0-9]+)/
	);

	if ( dailymotionMatch ) {
		return { provider: 'dailymotion', id: dailymotionMatch[ 1 ] };
	}

	const facebookMatch = Url.match(
		/(?:facebook\.com\/.+\/videos\/|fb\.watch\/)([a-zA-Z0-9_-]+)/
	);

	if ( facebookMatch ) {
		return { provider: 'facebook', id: facebookMatch[ 1 ] };
	}

	const twitchMatch = Url.match( /twitch\.tv\/videos\/(\d+)/ );

	if ( twitchMatch ) {
		return { provider: 'twitch', id: twitchMatch[ 1 ] };
	}

	const wistiaMatch = Url.match( /wistia\.com\/medias\/([a-zA-Z0-9]+)/ );

	if ( wistiaMatch ) {
		return { provider: 'wistia', id: wistiaMatch[ 1 ] };
	}

	const loomMatch = Url.match( /loom\.com\/share\/([a-zA-Z0-9]+)/ );

	if ( loomMatch ) {
		return { provider: 'loom', id: loomMatch[ 1 ] };
	}

	const tiktokMatch = Url.match( /tiktok\.com\/@[\w.-]+\/video\/(\d+)/ );

	if ( tiktokMatch ) {
		return { provider: 'tiktok', id: tiktokMatch[ 1 ] };
	}

	const videopressMatch = Url.match( /videopress\.com\/v\/([a-zA-Z0-9]+)/ );

	if ( videopressMatch ) {
		return { provider: 'videopress', id: videopressMatch[ 1 ] };
	}

	if ( /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test( Url ) ) {
		return { provider: 'file', id: Url };
	}

	return { provider: '', id: '' };
}

/**
 * YouTube/Dailymotion/Loom expose a predictable static thumbnail URL —
 * everything else needs a manually uploaded poster image.
 *
 * @param {string} provider Detected video provider.
 * @param {string} id       Provider-specific video id.
 * @return {string} Thumbnail URL, or an empty string if unavailable.
 */
export function getAutoThumbnail( provider, id ) {
	if ( ! id ) {
		return '';
	}
	if ( provider === 'youtube' ) {
		return `https://img.youtube.com/vi/${ id }/hqdefault.jpg`;
	}
	if ( provider === 'dailymotion' ) {
		return `https://www.dailymotion.com/thumbnail/video/${ id }`;
	}
	if ( provider === 'loom' ) {
		return `https://cdn.loom.com/sessions/thumbnails/${ id }-with-play.gif`;
	}
	return '';
}

/**
 * Builds a direct, embeddable iframe URL (with autoplay already on) for a
 * detected provider + id, so the frontend can lazy-load the real player on
 * click without an oEmbed round-trip (WordPress's `/oembed/1.0/proxy` REST
 * route requires `edit_posts`, so it isn't reachable by anonymous visitors).
 *
 * @param {string} provider Detected video provider.
 * @param {string} id       Provider-specific video id.
 * @param {string} videoUrl Original pasted URL — needed as-is by providers
 *                          (Facebook) whose embed URL wraps the full URL
 *                          rather than just an id.
 * @return {string} Embeddable iframe URL, or an empty string if the
 *                   provider has no simple direct-embed URL (e.g. TikTok) —
 *                   callers should fall back to linking to the original URL.
 */
export function getEmbedUrl( provider, id, videoUrl = '' ) {
	if ( ! id ) {
		return '';
	}
	switch ( provider ) {
		case 'youtube':
			return `https://www.youtube-nocookie.com/embed/${ id }?autoplay=1&playsinline=1`;
		case 'vimeo':
			return `https://player.vimeo.com/video/${ id }?autoplay=1`;
		case 'dailymotion':
			return `https://www.dailymotion.com/embed/video/${ id }?autoplay=1`;
		case 'loom':
			return `https://www.loom.com/embed/${ id }?autoplay=1`;
		case 'wistia':
			return `https://fast.wistia.net/embed/iframe/${ id }?autoPlay=true`;
		case 'videopress':
			return `https://videopress.com/embed/${ id }?autoPlay=true`;
		case 'facebook':
			return videoUrl
				? `https://www.facebook.com/plugins/video.php?href=${ encodeURIComponent(
						videoUrl
				  ) }&autoplay=true&show_text=false`
				: '';
		case 'twitch': {
			const parent =
				typeof window !== 'undefined' ? window.location.hostname : '';
			return parent
				? `https://player.twitch.tv/?video=${ id }&parent=${ parent }&autoplay=true`
				: '';
		}
		default:
			// No simple direct-embed URL (e.g. TikTok) — caller should fall
			// back to linking to the original video URL instead.
			return '';
	}
}

/**
 * Adds `autoplay=1` to the embedded iframe's `src` inside a chunk of
 * oEmbed HTML, so playback starts immediately once our own play button
 * is clicked, instead of requiring a second click on the provider's own
 * play button inside the embed. If the HTML has no iframe (or no src),
 * it's returned unchanged.
 *
 * @param {string} html Raw oEmbed HTML (expected to contain an <iframe src="...">).
 * @return {string} The same HTML with autoplay=1 appended to the iframe's src.
 */
export function addAutoplay( html ) {
	if ( ! html ) {
		return html;
	}
	return html.replace(
		/(<iframe[^>]*\bsrc="[^"]*)(")/,
		( match, srcStart, quote ) =>
			srcStart +
			( srcStart.includes( '?' ) ? '&' : '?' ) +
			'autoplay=1' +
			quote
	);
}
