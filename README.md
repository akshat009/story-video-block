# Story Video Block

[![CI](https://github.com/akshat009/story-video-block/actions/workflows/ci.yaml/badge.svg)](https://github.com/akshat009/story-video-block/actions/workflows/ci.yaml)
[![License: GPL v2+](https://img.shields.io/badge/license-GPL--2.0--or--later-blue.svg)](LICENSE)

A custom [WordPress Gutenberg block](https://developer.wordpress.org/block-editor/) for pairing a video (YouTube, Vimeo, Dailymotion, and more) with a heading, description, and attribution — built for testimonial and story-style sections.

## Features

- **One field, auto-detected** — paste a URL from YouTube, Vimeo, Dailymotion, Facebook, Twitch, Wistia, Loom, TikTok, VideoPress, or a self-hosted `.mp4`/`.webm`/`.ogg`/`.mov` file. The provider and video ID are detected automatically.
- **Poster image** — auto-pulled from YouTube/Dailymotion/Loom, or upload your own for any provider.
- **Click-to-load playback** — no video player loads until the visitor clicks play, keeping the page fast.
- **No React, no jQuery on the front end** — the click-to-play interaction runs on WordPress's native [`@wordpress/interactivity`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-interactivity/) module ([`view.js`](src/story-video-block/view.js)), not a framework. Nothing is shipped to visitors just to swap a poster image for a video embed.
- **Configurable play button** — 4 built-in icon shapes × 3 color styles, and fully extendable via WordPress filters if you want to bring your own icon library (Font Awesome, Bootstrap Icons, etc. — see [`icons.js`](src/story-video-block/icons.js)).
- **Editable heading & description** — inline rich text, with a selectable heading tag (H2–H4) and optional quotation marks.
- **Media position** — video on the left or right of the content.
- **Card style** — standard, or an "overlapping media" look where the video pokes out above/below the card.
- **Background & text color** controls.
- **Transcript upload** — attach a PDF/Word/text file for accessibility; renders as a labeled download link.
- **Accessible by default** — labeled controls, `aria-label`s on interactive elements, decorative images marked as such, and visible "opens in a new tab" hints for screen readers.

## Requirements

- WordPress 6.8+
- PHP 7.4+

## Development

This block is built with [`@wordpress/create-block`](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-create-block/) tooling.

```bash
npm install       # install dependencies
npm start         # start the dev build with file watching
npm run build     # production build (outputs to /build)
npm run test:unit # run the Jest unit tests
npm run lint:js   # lint JavaScript
npm run lint:css  # lint styles
```

### Project structure

```
src/story-video-block/
├── block.json              # Block metadata & attribute schema
├── edit.js                 # Editor UI (React)
├── save.js                 # Front-end markup
├── view.js                 # Front-end interactivity
├── utils.js                 # Pure helpers: URL parsing, thumbnails, autoplay
├── icons.js                 # Play button icon set (filter-extendable)
├── hooks/useOembedHtml.js   # oEmbed fetch + autoplay hook
├── components/EmbedIframe.js
├── style.scss                # Shared editor + front-end styles
└── editor.scss               # Editor-only styles
```

### Tests

Unit tests cover the URL-parsing/thumbnail/autoplay logic in `utils.js`:

```bash
npm run test:unit
```

## Extending

Play button icons are exposed through WordPress hooks, so you can add icons from whichever library you prefer without touching this plugin's code — see the doc comment at the top of [`icons.js`](src/story-video-block/icons.js) for examples using Font Awesome, Bootstrap Icons, Feather Icons, and Material Symbols.

## License

[GPL-2.0-or-later](https://www.gnu.org/licenses/gpl-2.0.html)
