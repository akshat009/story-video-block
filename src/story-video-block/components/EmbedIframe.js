import { useEffect, useRef } from '@wordpress/element';

/**
 * Renders embed HTML the same way WordPress core's <Sandbox> component
 * does: an empty (about:blank) iframe that we then write the HTML into
 * directly via document.write(), instead of using the src/srcdoc
 * attributes. This is what actually makes the nested iframe inherit a
 * trusted origin (needed inside the block editor's own nested canvas
 * iframe — a plain `src`/`srcDoc` iframe gets rejected by YouTube etc.
 * with a "video player configuration error").
 *
 * @param {Object} props
 * @param {string} props.html  oEmbed HTML returned by WordPress's oEmbed proxy.
 * @param {string} props.title Accessible title for the iframe.
 */
export default function EmbedIframe( { html, title } ) {
	const ref = useRef( null );

	useEffect( () => {
		const iframe = ref.current;
		if ( ! iframe || ! html ) {
			return;
		}
		const doc = iframe.contentWindow.document;
		doc.open();
		doc.write(
			`<!doctype html><html><head><style>html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;}iframe{position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:0;}</style></head><body>${ html }</body></html>`
		);
		doc.close();
	}, [ html ] );

	return (
		<iframe
			ref={ ref }
			className="story-video-block__video"
			title={ title }
			sandbox="allow-scripts allow-same-origin allow-presentation"
		/>
	);
}
