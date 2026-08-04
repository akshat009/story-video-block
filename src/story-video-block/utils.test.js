import { parseVideoUrl, getAutoThumbnail, addAutoplay } from './utils';

describe( 'parseVideoUrl', () => {
	it( 'returns empty provider/id for an empty or missing URL', () => {
		expect( parseVideoUrl( '' ) ).toEqual( { provider: '', id: '' } );
		expect( parseVideoUrl( undefined ) ).toEqual( {
			provider: '',
			id: '',
		} );
	} );

	it( 'returns empty provider/id for an unrecognised URL', () => {
		expect( parseVideoUrl( 'https://example.com/video' ) ).toEqual( {
			provider: '',
			id: '',
		} );
	} );

	it.each( [
		[ 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'dQw4w9WgXcQ' ],
		[ 'https://youtu.be/dQw4w9WgXcQ', 'dQw4w9WgXcQ' ],
		[ 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'dQw4w9WgXcQ' ],
		[ 'https://www.youtube.com/shorts/dQw4w9WgXcQ', 'dQw4w9WgXcQ' ],
		[
			'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PL123',
			'dQw4w9WgXcQ',
		],
	] )( 'detects YouTube from %s', ( url, id ) => {
		expect( parseVideoUrl( url ) ).toEqual( { provider: 'youtube', id } );
	} );

	it.each( [
		[ 'https://vimeo.com/76979871', '76979871' ],
		[ 'https://vimeo.com/video/76979871', '76979871' ],
	] )( 'detects Vimeo from %s', ( url, id ) => {
		expect( parseVideoUrl( url ) ).toEqual( { provider: 'vimeo', id } );
	} );

	it.each( [
		[ 'https://www.dailymotion.com/video/x7tgcev', 'x7tgcev' ],
		[ 'https://dai.ly/x7tgcev', 'x7tgcev' ],
	] )( 'detects Dailymotion from %s', ( url, id ) => {
		expect( parseVideoUrl( url ) ).toEqual( {
			provider: 'dailymotion',
			id,
		} );
	} );

	it( 'detects Facebook video URLs', () => {
		expect(
			parseVideoUrl( 'https://www.facebook.com/someone/videos/123456789' )
		).toEqual( { provider: 'facebook', id: '123456789' } );
	} );

	it( 'detects fb.watch short links', () => {
		expect( parseVideoUrl( 'https://fb.watch/abc123' ) ).toEqual( {
			provider: 'facebook',
			id: 'abc123',
		} );
	} );

	it( 'detects Twitch VOD URLs', () => {
		expect(
			parseVideoUrl( 'https://www.twitch.tv/videos/123456789' )
		).toEqual( { provider: 'twitch', id: '123456789' } );
	} );

	it( 'detects Wistia URLs', () => {
		expect(
			parseVideoUrl( 'https://wistia.com/medias/abc123xyz' )
		).toEqual( { provider: 'wistia', id: 'abc123xyz' } );
	} );

	it( 'detects Loom URLs', () => {
		expect(
			parseVideoUrl( 'https://www.loom.com/share/abc123xyz' )
		).toEqual( { provider: 'loom', id: 'abc123xyz' } );
	} );

	it( 'detects TikTok URLs', () => {
		expect(
			parseVideoUrl( 'https://www.tiktok.com/@someuser/video/123456789' )
		).toEqual( { provider: 'tiktok', id: '123456789' } );
	} );

	it( 'detects VideoPress URLs', () => {
		expect( parseVideoUrl( 'https://videopress.com/v/abc123XY' ) ).toEqual(
			{ provider: 'videopress', id: 'abc123XY' }
		);
	} );

	it.each( [ 'mp4', 'webm', 'ogg', 'mov' ] )(
		'detects self-hosted .%s files',
		( ext ) => {
			const url = `https://example.com/videos/clip.${ ext }`;
			expect( parseVideoUrl( url ) ).toEqual( {
				provider: 'file',
				id: url,
			} );
		}
	);

	it( 'detects self-hosted files with a query string', () => {
		const url = 'https://example.com/videos/clip.mp4?v=2';
		expect( parseVideoUrl( url ) ).toEqual( { provider: 'file', id: url } );
	} );
} );

describe( 'getAutoThumbnail', () => {
	it( 'returns empty string when there is no id', () => {
		expect( getAutoThumbnail( 'youtube', '' ) ).toBe( '' );
	} );

	it( 'builds a YouTube thumbnail URL', () => {
		expect( getAutoThumbnail( 'youtube', 'dQw4w9WgXcQ' ) ).toBe(
			'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg'
		);
	} );

	it( 'builds a Dailymotion thumbnail URL', () => {
		expect( getAutoThumbnail( 'dailymotion', 'x7tgcev' ) ).toBe(
			'https://www.dailymotion.com/thumbnail/video/x7tgcev'
		);
	} );

	it( 'builds a Loom thumbnail URL', () => {
		expect( getAutoThumbnail( 'loom', 'abc123' ) ).toBe(
			'https://cdn.loom.com/sessions/thumbnails/abc123-with-play.gif'
		);
	} );

	it.each( [
		'vimeo',
		'facebook',
		'twitch',
		'wistia',
		'tiktok',
		'videopress',
	] )(
		'returns empty string for %s (no predictable thumbnail URL)',
		( provider ) => {
			expect( getAutoThumbnail( provider, 'abc123' ) ).toBe( '' );
		}
	);
} );

describe( 'addAutoplay', () => {
	it( 'returns falsy input unchanged', () => {
		expect( addAutoplay( '' ) ).toBe( '' );
		expect( addAutoplay( undefined ) ).toBe( undefined );
	} );

	it( 'adds ?autoplay=1 when the iframe src has no query string', () => {
		const html =
			'<iframe src="https://www.youtube.com/embed/abc123"></iframe>';
		expect( addAutoplay( html ) ).toBe(
			'<iframe src="https://www.youtube.com/embed/abc123?autoplay=1"></iframe>'
		);
	} );

	it( 'adds &autoplay=1 when the iframe src already has a query string', () => {
		const html =
			'<iframe src="https://www.youtube.com/embed/abc123?feature=oembed"></iframe>';
		expect( addAutoplay( html ) ).toBe(
			'<iframe src="https://www.youtube.com/embed/abc123?feature=oembed&autoplay=1"></iframe>'
		);
	} );

	it( 'leaves HTML without an iframe untouched', () => {
		const html = '<p>No video here</p>';
		expect( addAutoplay( html ) ).toBe( html );
	} );
} );
