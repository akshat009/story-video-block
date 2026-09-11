/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/story-video-block/components/EmbedIframe.js"
/*!*********************************************************!*\
  !*** ./src/story-video-block/components/EmbedIframe.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmbedIframe)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


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

function EmbedIframe({
  html,
  title
}) {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const iframe = ref.current;
    if (!iframe || !html) {
      return;
    }
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`<!doctype html><html><head><style>html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;}iframe{position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:0;}</style></head><body>${html}</body></html>`);
    doc.close();
  }, [html]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe", {
    ref: ref,
    className: "story-video-block__video",
    title: title,
    sandbox: "allow-scripts allow-same-origin allow-presentation"
  });
}

/***/ },

/***/ "./src/story-video-block/components/VideoFacade.js"
/*!*********************************************************!*\
  !*** ./src/story-video-block/components/VideoFacade.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoFacade)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons */ "./src/story-video-block/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



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

function VideoFacade({
  posterUrl,
  playButtonStyle,
  playIcon,
  heading,
  onClick
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
    type: "button",
    className: "story-video-block__facade",
    "data-play-style": playButtonStyle,
    onClick: onClick,
    "aria-label": heading ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Play video:', 'story-video-block') + ' ' + heading : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Play video', 'story-video-block'),
    children: [posterUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: posterUrl,
      alt: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "story-video-block__play-btn",
      "aria-hidden": "true",
      children: _icons__WEBPACK_IMPORTED_MODULE_1__.PLAY_ICONS[playIcon] || _icons__WEBPACK_IMPORTED_MODULE_1__.PLAY_ICONS.triangle
    })]
  });
}

/***/ },

/***/ "./src/story-video-block/edit.js"
/*!***************************************!*\
  !*** ./src/story-video-block/edit.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/story-video-block/editor.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/story-video-block/utils.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons */ "./src/story-video-block/icons.js");
/* harmony import */ var _hooks_useOembedHtml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks/useOembedHtml */ "./src/story-video-block/hooks/useOembedHtml.js");
/* harmony import */ var _components_EmbedIframe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/EmbedIframe */ "./src/story-video-block/components/EmbedIframe.js");
/* harmony import */ var _components_VideoFacade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/VideoFacade */ "./src/story-video-block/components/VideoFacade.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */











/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object}   props               Block edit props.
 * @param {Object}   props.attributes    Current block attributes.
 * @param {Function} props.setAttributes Updates block attributes.
 * @param {string}   props.clientId      Unique id of this block instance.
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

function Edit({
  attributes,
  setAttributes,
  clientId
}) {
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
    videoOnly,
    videoOnlyHeight,
    quoteText,
    authorName,
    authorTitle,
    avatarUrl,
    avatarId,
    avatarAlt,
    transcriptUrl,
    transcriptName,
    backgroundColor,
    textColor
  } = attributes;
  const onChangeVideoUrl = newUrl => {
    const {
      provider,
      id
    } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.parseVideoUrl)(newUrl);
    setAttributes({
      videoUrl: newUrl,
      videoProvider: provider,
      videoId: id
    });
  };
  const onSelectPoster = media => {
    setAttributes({
      posterUrl: media.url,
      posterId: media.id,
      posterAlt: media.alt || ''
    });
  };
  const onRemovePoster = () => {
    setAttributes({
      posterUrl: '',
      posterId: undefined,
      posterAlt: ''
    });
  };
  const onSelectAvatar = media => {
    setAttributes({
      avatarUrl: media.url,
      avatarId: media.id,
      avatarAlt: media.alt || ''
    });
  };
  const onRemoveAvatar = () => {
    setAttributes({
      avatarUrl: '',
      avatarId: undefined,
      avatarAlt: ''
    });
  };
  const onSelectTranscript = media => {
    setAttributes({
      transcriptUrl: media.url,
      transcriptName: media.title || media.filename || '',
      transcriptSize: media.filesizeHumanReadable || ''
    });
  };
  const onRemoveTranscript = () => {
    setAttributes({
      transcriptUrl: '',
      transcriptName: '',
      transcriptSize: ''
    });
  };
  const autoThumbnail = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getAutoThumbnail)(videoProvider, videoId);
  const effectivePoster = posterUrl || autoThumbnail;
  const embedHtml = (0,_hooks_useOembedHtml__WEBPACK_IMPORTED_MODULE_9__["default"])(videoUrl, videoProvider);

  // Block saving/publishing until both a video URL and a poster are set.
  const {
    lockPostSaving,
    unlockPostSaving
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/editor');
  const lockName = `story-video-block-required-${clientId}`;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!videoUrl || !effectivePoster) {
      lockPostSaving(lockName);
    } else {
      unlockPostSaving(lockName);
    }
    return () => unlockPostSaving(lockName);
  }, [videoUrl, effectivePoster, lockName, lockPostSaving, unlockPostSaving]);
  const [isPlaying, setIsPlaying] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);

  // Reset back to the poster whenever the video itself changes.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setIsPlaying(false);
  }, [videoUrl]);
  const showVideo = videoUrl && videoProvider !== 'file' && isPlaying;
  const showFacade = videoUrl && videoProvider !== 'file' && !isPlaying;
  let videoUrlHelp;
  if (!videoUrl) {
    videoUrlHelp = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
      style: {
        color: '#cc1818'
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Required.', 'story-video-block')
    });
  } else if (videoProvider) {
    videoUrlHelp = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Detected:', 'story-video-block') + ' ' + videoProvider;
  } else {
    videoUrlHelp = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('YouTube, Vimeo, or a direct video file URL.', 'story-video-block');
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video', 'story-video-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video URL', 'story-video-block') + ' *',
          value: videoUrl,
          onChange: onChangeVideoUrl,
          help: videoUrlHelp,
          type: "url"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          id: "story-video-block-poster-image",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Poster image', 'story-video-block') + ' *',
          children: [effectivePoster && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
            src: effectivePoster,
            alt: "",
            style: {
              width: '100%',
              marginBottom: '8px'
            }
          }), !effectivePoster && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
            className: "description",
            style: {
              color: '#cc1818'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A poster image is required.', 'story-video-block')
          }), !autoThumbnail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                onSelect: onSelectPoster,
                allowedTypes: ['image'],
                value: posterId,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  variant: "secondary",
                  onClick: open,
                  children: posterUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace poster', 'story-video-block') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select poster image', 'story-video-block')
                })
              })
            }), posterUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              variant: "link",
              isDestructive: true,
              onClick: onRemovePoster,
              style: {
                marginLeft: '8px'
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'story-video-block')
            })]
          }), !posterUrl && autoThumbnail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
            className: "description",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Using the video thumbnail automatically.', 'story-video-block')
          }), !posterUrl && videoProvider && !autoThumbnail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
            className: "description",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Automatic thumbnail is only available for YouTube, Dailymotion, and Loom. Please upload a poster image for this video.', 'story-video-block')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Play button style', 'story-video-block'),
          value: playButtonStyle,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'story-video-block'),
            value: 'default'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Minimal', 'story-video-block'),
            value: 'minimal'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Branded', 'story-video-block'),
            value: 'branded'
          }],
          onChange: v => setAttributes({
            playButtonStyle: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Play button icon', 'story-video-block'),
          value: playIcon,
          options: _icons__WEBPACK_IMPORTED_MODULE_8__.PLAY_ICON_OPTIONS,
          onChange: v => setAttributes({
            playIcon: v
          })
        })]
      }), !videoOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Testimonial Style', 'story-video-block'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
          style: {
            marginTop: 0,
            marginBottom: '12px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use as a video testimonial by adding quotation marks around the text.', 'story-video-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use as Video Testimonial', 'story-video-block'),
          checked: showQuotationMarks,
          onChange: newValue => setAttributes({
            showQuotationMarks: newValue
          })
        }), showQuotationMarks && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          id: "story-video-block-avatar-image",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author avatar', 'story-video-block'),
          children: [avatarUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
            src: avatarUrl,
            alt: "",
            style: {
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '8px'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
              onSelect: onSelectAvatar,
              allowedTypes: ['image'],
              value: avatarId,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "secondary",
                onClick: open,
                children: avatarUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace avatar', 'story-video-block') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select avatar image', 'story-video-block')
              })
            })
          }), avatarUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "link",
            isDestructive: true,
            onClick: onRemoveAvatar,
            style: {
              marginLeft: '8px'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'story-video-block')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout', 'story-video-block'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video only', 'story-video-block'),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide the heading, description, and testimonial content — just the video, full width.', 'story-video-block'),
          checked: videoOnly,
          onChange: newValue => setAttributes({
            videoOnly: newValue
          })
        }), videoOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fixed height (px)', 'story-video-block'),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Leave blank to keep the video’s natural 16:9 aspect ratio. When set, the video crops to fill this height instead.', 'story-video-block'),
          type: "number",
          value: videoOnlyHeight,
          onChange: newHeight => setAttributes({
            videoOnlyHeight: newHeight
          })
        }), !videoOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Media position', 'story-video-block'),
          value: videoPosition,
          options: [{
            label: 'Left',
            value: 'left'
          }, {
            label: 'Right',
            value: 'right'
          }],
          onChange: newPosition => setAttributes({
            videoPosition: newPosition
          })
        }), !videoOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card style', 'story-video-block'),
          value: cardStyle,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Standard', 'story-video-block'),
            value: 'standard'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overlapping media', 'story-video-block'),
            value: 'overlap'
          }],
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overlapping media makes the video/poster poke out above and below the card.', 'story-video-block'),
          onChange: newStyle => setAttributes({
            cardStyle: newStyle
          })
        })]
      }), !videoOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content', 'story-video-block'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading tag', 'story-video-block'),
          value: headingTag,
          options: [{
            label: 'H2',
            value: 'h2'
          }, {
            label: 'H3',
            value: 'h3'
          }, {
            label: 'H4',
            value: 'h4'
          }],
          onChange: newTag => setAttributes({
            headingTag: newTag
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          id: "story-video-block-transcript-file",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Transcript file', 'story-video-block'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
              onSelect: onSelectTranscript,
              allowedTypes: ['application/pdf', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "secondary",
                onClick: open,
                children: transcriptUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace transcript', 'story-video-block') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload transcript', 'story-video-block')
              })
            })
          }), transcriptUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "link",
            isDestructive: true,
            onClick: onRemoveTranscript,
            style: {
              marginLeft: '8px'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'story-video-block')
          }), transcriptUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
            className: "description",
            children: transcriptName
          }), !transcriptUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
            className: "description",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('For accessibility: lets visitors read along or download a transcript of the video.', 'story-video-block')
          })]
        })]
      })]
    }), !videoOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      group: "styles",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'story-video-block'),
        initialOpen: false,
        colorSettings: [{
          value: backgroundColor,
          onChange: v => setAttributes({
            backgroundColor: v
          }),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background color', 'story-video-block')
        }, {
          value: textColor,
          onChange: v => setAttributes({
            textColor: v
          }),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text color', 'story-video-block')
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])({
          [`has-media-${videoPosition}`]: videoPosition && !videoOnly,
          [`card-style-${cardStyle}`]: cardStyle && !videoOnly,
          'is-video-only': videoOnly
        }),
        style: {
          '--story-video-block-bg': backgroundColor || undefined,
          '--story-video-block-color': textColor || undefined,
          '--story-video-block-video-only-height': videoOnly && videoOnlyHeight ? `${videoOnlyHeight}px` : undefined
        }
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "story-video-block__media",
        children: [videoUrl && videoProvider === 'file' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("video", {
          className: "story-video-block__video",
          src: videoUrl,
          controls: true
        }), showVideo && embedHtml && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_EmbedIframe__WEBPACK_IMPORTED_MODULE_10__["default"], {
          html: embedHtml,
          title: heading || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video', 'story-video-block')
        }), showVideo && !embedHtml && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: "story-video-block__media-placeholder",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading video…', 'story-video-block')
        }), showFacade && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_VideoFacade__WEBPACK_IMPORTED_MODULE_11__["default"], {
          posterUrl: effectivePoster,
          playButtonStyle: playButtonStyle,
          playIcon: playIcon,
          heading: heading,
          onClick: () => setIsPlaying(true)
        }), !videoUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
          icon: "video-alt3",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video', 'story-video-block'),
          instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a video URL from the sidebar', 'story-video-block'),
          className: "story-video-block__media-placeholder"
        })]
      }), !videoOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "story-video-block__content",
        children: [showQuotationMarks ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "blockquote",
            className: "story-video-block__quote",
            value: quoteText,
            onChange: newQuote => setAttributes({
              quoteText: newQuote
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Testimonial quote…', 'story-video-block')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "story-video-block__author",
            children: [avatarUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
              className: "story-video-block__author-avatar",
              src: avatarUrl,
              alt: avatarAlt
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: "story-video-block__author-info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "p",
                className: "story-video-block__author-name",
                value: authorName,
                onChange: newName => setAttributes({
                  authorName: newName
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author name…', 'story-video-block')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "p",
                className: "story-video-block__author-title",
                value: authorTitle,
                onChange: newTitle => setAttributes({
                  authorTitle: newTitle
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author title / company…', 'story-video-block')
              })]
            })]
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: headingTag || 'h2',
            className: "story-video-block__heading",
            value: heading,
            onChange: newHeading => setAttributes({
              heading: newHeading
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading…', 'story-video-block')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "story-video-block__description",
            value: description,
            onChange: newDescription => setAttributes({
              description: newDescription
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sub text / description…', 'story-video-block')
          })]
        }), transcriptUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("a", {
          className: "story-video-block__transcript",
          href: transcriptUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Download transcript', 'story-video-block'), transcriptName ? ` – ${transcriptName}` : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
            className: "screen-reader-text",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('(opens in a new tab)', 'story-video-block')
          })]
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/story-video-block/hooks/useOembedHtml.js"
/*!******************************************************!*\
  !*** ./src/story-video-block/hooks/useOembedHtml.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useOembedHtml)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/story-video-block/utils.js");




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
function useOembedHtml(videoUrl, videoProvider) {
  const [embedHtml, setEmbedHtml] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!videoUrl || videoProvider === 'file') {
      setEmbedHtml('');
      return;
    }
    let cancelled = false;
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: `/oembed/1.0/proxy?url=${encodeURIComponent(videoUrl)}`
    }).then(response => {
      if (!cancelled && response && response.html) {
        setEmbedHtml((0,_utils__WEBPACK_IMPORTED_MODULE_2__.addAutoplay)(response.html));
      }
    }).catch(() => {
      if (!cancelled) {
        setEmbedHtml('');
      }
    });
    return () => {
      cancelled = true;
    };
  }, [videoUrl, videoProvider]);
  return embedHtml;
}

/***/ },

/***/ "./src/story-video-block/icons.js"
/*!****************************************!*\
  !*** ./src/story-video-block/icons.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PLAY_ICONS: () => (/* binding */ PLAY_ICONS),
/* harmony export */   PLAY_ICON_OPTIONS: () => (/* binding */ PLAY_ICON_OPTIONS)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Retrieves the translation of text.
 */



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

const PLAY_ICONS = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('storyVideoBlock.playIcons', {
  triangle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M8 5v14l11-7z",
      fill: "currentColor"
    })
  }),
  circle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "9.5",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M10 8v8l6-4z",
      fill: "currentColor"
    })]
  }),
  rounded: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M8.5 5.6c0-1.1 1.2-1.8 2.2-1.2l9 6.4c.9.7.9 2 0 2.6l-9 6.4c-1 .6-2.2 0-2.2-1.2z",
      fill: "currentColor"
    })
  }),
  solid: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "currentColor"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M10 8v8l6-4z",
      fill: "#fff"
    })]
  })
});
const PLAY_ICON_OPTIONS = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('storyVideoBlock.playIconOptions', [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Triangle', 'story-video-block'),
  value: 'triangle'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Circle outline', 'story-video-block'),
  value: 'circle'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rounded', 'story-video-block'),
  value: 'rounded'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Solid circle', 'story-video-block'),
  value: 'solid'
}]);

/***/ },

/***/ "./src/story-video-block/index.js"
/*!****************************************!*\
  !*** ./src/story-video-block/index.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/story-video-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/story-video-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/story-video-block/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/story-video-block/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/story-video-block/save.js"
/*!***************************************!*\
  !*** ./src/story-video-block/save.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/story-video-block/utils.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/story-video-block/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */






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

function save({
  attributes
}) {
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
    videoOnly,
    videoOnlyHeight,
    quoteText,
    authorName,
    authorTitle,
    avatarUrl,
    avatarAlt,
    transcriptUrl,
    transcriptName,
    backgroundColor,
    textColor
  } = attributes;

  // Required fields — publishing is already blocked without these
  // (see edit.js's post-lock), but save() can still run for e.g.
  // autosaves/revisions, so stay defensive.
  if (!videoUrl) {
    return null;
  }
  const isFile = videoProvider === 'file';
  const autoThumbnail = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getAutoThumbnail)(videoProvider, videoId);
  const effectivePoster = posterUrl || autoThumbnail;
  const embedUrl = isFile ? '' : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getEmbedUrl)(videoProvider, videoId, videoUrl);
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])({
      [`has-media-${videoPosition}`]: videoPosition && !videoOnly,
      [`card-style-${cardStyle}`]: cardStyle && !videoOnly,
      'is-video-only': videoOnly
    }),
    style: {
      '--story-video-block-bg': backgroundColor || undefined,
      '--story-video-block-color': textColor || undefined,
      '--story-video-block-video-only-height': videoOnly && videoOnlyHeight ? `${videoOnlyHeight}px` : undefined
    },
    ...(!isFile ? {
      'data-wp-interactive': 'create-block/story-video-block',
      'data-wp-context': JSON.stringify({
        isPlaying: false,
        embedUrl,
        videoSrc: ''
      })
    } : {})
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "story-video-block__media",
      children: isFile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("video", {
        className: "story-video-block__video",
        src: videoUrl,
        poster: effectivePoster || undefined,
        controls: true,
        preload: "none"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
          href: videoUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "story-video-block__facade",
          "data-play-style": playButtonStyle,
          "data-wp-on--click": "actions.play",
          "data-wp-bind--hidden": "state.isPlaying",
          "aria-label": heading ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Play video:', 'story-video-block') + ' ' + heading : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Play video', 'story-video-block'),
          children: [effectivePoster && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: effectivePoster,
            alt: posterAlt || ''
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "story-video-block__play-btn",
            "aria-hidden": "true",
            children: _icons__WEBPACK_IMPORTED_MODULE_4__.PLAY_ICONS[playIcon] || _icons__WEBPACK_IMPORTED_MODULE_4__.PLAY_ICONS.triangle
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "story-video-block__video",
          hidden: true,
          "data-wp-bind--hidden": "state.isNotPlaying",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("iframe", {
            title: heading || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video', 'story-video-block'),
            "data-wp-bind--src": "context.videoSrc",
            allow: "autoplay; fullscreen; picture-in-picture",
            allowFullScreen: true
          })
        })]
      })
    }), !videoOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "story-video-block__content",
      children: [showQuotationMarks ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: "blockquote",
          className: "story-video-block__quote",
          value: quoteText
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "story-video-block__author",
          children: [avatarUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "story-video-block__author-avatar",
            src: avatarUrl,
            alt: avatarAlt || ''
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "story-video-block__author-info",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              tagName: "p",
              className: "story-video-block__author-name",
              value: authorName
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              tagName: "p",
              className: "story-video-block__author-title",
              value: authorTitle
            })]
          })]
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: headingTag || 'h2',
          className: "story-video-block__heading",
          value: heading
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: "p",
          className: "story-video-block__description",
          value: description
        })]
      }), transcriptUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
        className: "story-video-block__transcript",
        href: transcriptUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Download transcript', 'story-video-block'), transcriptName ? ` – ${transcriptName}` : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "screen-reader-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('(opens in a new tab)', 'story-video-block')
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/story-video-block/utils.js"
/*!****************************************!*\
  !*** ./src/story-video-block/utils.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAutoplay: () => (/* binding */ addAutoplay),
/* harmony export */   getAutoThumbnail: () => (/* binding */ getAutoThumbnail),
/* harmony export */   getEmbedUrl: () => (/* binding */ getEmbedUrl),
/* harmony export */   parseVideoUrl: () => (/* binding */ parseVideoUrl)
/* harmony export */ });
/**
 * Detects the provider + id from a pasted video URL.
 *
 * @param {string} Url Raw URL typed/pasted by the user.
 * @return {{provider: string, id: string}} Detected provider and id.
 */
function parseVideoUrl(Url) {
  if (!Url) {
    return {
      provider: '',
      id: ''
    };
  }
  const youtubeMatch = Url.match(/(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (youtubeMatch) {
    return {
      provider: 'youtube',
      id: youtubeMatch[1]
    };
  }
  const vimeoMatch = Url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    return {
      provider: 'vimeo',
      id: vimeoMatch[1]
    };
  }
  const dailymotionMatch = Url.match(/(?:dailymotion\.com\/video\/|dai\.ly\/)([a-zA-Z0-9]+)/);
  if (dailymotionMatch) {
    return {
      provider: 'dailymotion',
      id: dailymotionMatch[1]
    };
  }
  const facebookMatch = Url.match(/(?:facebook\.com\/.+\/videos\/|fb\.watch\/)([a-zA-Z0-9_-]+)/);
  if (facebookMatch) {
    return {
      provider: 'facebook',
      id: facebookMatch[1]
    };
  }
  const twitchMatch = Url.match(/twitch\.tv\/videos\/(\d+)/);
  if (twitchMatch) {
    return {
      provider: 'twitch',
      id: twitchMatch[1]
    };
  }
  const wistiaMatch = Url.match(/wistia\.com\/medias\/([a-zA-Z0-9]+)/);
  if (wistiaMatch) {
    return {
      provider: 'wistia',
      id: wistiaMatch[1]
    };
  }
  const loomMatch = Url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
  if (loomMatch) {
    return {
      provider: 'loom',
      id: loomMatch[1]
    };
  }
  const tiktokMatch = Url.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);
  if (tiktokMatch) {
    return {
      provider: 'tiktok',
      id: tiktokMatch[1]
    };
  }
  const videopressMatch = Url.match(/videopress\.com\/v\/([a-zA-Z0-9]+)/);
  if (videopressMatch) {
    return {
      provider: 'videopress',
      id: videopressMatch[1]
    };
  }
  if (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(Url)) {
    return {
      provider: 'file',
      id: Url
    };
  }
  return {
    provider: '',
    id: ''
  };
}

/**
 * YouTube/Dailymotion/Loom expose a predictable static thumbnail URL —
 * everything else needs a manually uploaded poster image.
 *
 * @param {string} provider Detected video provider.
 * @param {string} id       Provider-specific video id.
 * @return {string} Thumbnail URL, or an empty string if unavailable.
 */
function getAutoThumbnail(provider, id) {
  if (!id) {
    return '';
  }
  if (provider === 'youtube') {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
  if (provider === 'dailymotion') {
    return `https://www.dailymotion.com/thumbnail/video/${id}`;
  }
  if (provider === 'loom') {
    return `https://cdn.loom.com/sessions/thumbnails/${id}-with-play.gif`;
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
function getEmbedUrl(provider, id, videoUrl = '') {
  if (!id) {
    return '';
  }
  switch (provider) {
    case 'youtube':
      return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1`;
    case 'vimeo':
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    case 'dailymotion':
      return `https://www.dailymotion.com/embed/video/${id}?autoplay=1`;
    case 'loom':
      return `https://www.loom.com/embed/${id}?autoplay=1`;
    case 'wistia':
      return `https://fast.wistia.net/embed/iframe/${id}?autoPlay=true`;
    case 'videopress':
      return `https://videopress.com/embed/${id}?autoPlay=true`;
    case 'facebook':
      return videoUrl ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&autoplay=true&show_text=false` : '';
    case 'twitch':
      {
        const parent = typeof window !== 'undefined' ? window.location.hostname : '';
        return parent ? `https://player.twitch.tv/?video=${id}&parent=${parent}&autoplay=true` : '';
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
function addAutoplay(html) {
  if (!html) {
    return html;
  }
  return html.replace(/(<iframe[^>]*\bsrc="[^"]*)(")/, (match, srcStart, quote) => srcStart + (srcStart.includes('?') ? '&' : '?') + 'autoplay=1' + quote);
}

/***/ },

/***/ "./src/story-video-block/editor.scss"
/*!*******************************************!*\
  !*** ./src/story-video-block/editor.scss ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/story-video-block/style.scss"
/*!******************************************!*\
  !*** ./src/story-video-block/style.scss ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/api-fetch"
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["apiFetch"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

module.exports = window["wp"]["hooks"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./node_modules/clsx/dist/clsx.mjs"
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ },

/***/ "./src/story-video-block/block.json"
/*!******************************************!*\
  !*** ./src/story-video-block/block.json ***!
  \******************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/story-video-block","version":"0.1.1","title":"Story Video Block","category":"media","icon":"video-alt3","description":"A video and text section with lazy-loaded video embeds — or a standalone video player with Video only mode.","keywords":["video","player","youtube","story","testimonial"],"example":{},"supports":{"html":false,"align":["wide","full"]},"attributes":{"align":{"type":"string","default":"full"},"videoUrl":{"type":"string","default":""},"videoProvider":{"type":"string","default":"youtube"},"videoId":{"type":"string","default":""},"posterUrl":{"type":"string","default":""},"posterId":{"type":"number"},"posterAlt":{"type":"string","default":""},"heading":{"type":"string","default":""},"headingTag":{"type":"string","default":"h2"},"description":{"type":"string","default":""},"backgroundColor":{"type":"string","default":""},"textColor":{"type":"string","default":""},"transcriptUrl":{"type":"string","default":""},"transcriptName":{"type":"string","default":""},"transcriptSize":{"type":"string","default":""},"playButtonStyle":{"type":"string","default":"default"},"playIcon":{"type":"string","default":"triangle"},"videoPosition":{"type":"string","default":"right"},"showQuotationMarks":{"type":"boolean","default":false},"cardStyle":{"type":"string","default":"standard"},"videoOnly":{"type":"boolean","default":false},"videoOnlyHeight":{"type":"string","default":""},"quoteText":{"type":"string","default":""},"authorName":{"type":"string","default":""},"authorTitle":{"type":"string","default":""},"avatarUrl":{"type":"string","default":""},"avatarId":{"type":"number"},"avatarAlt":{"type":"string","default":""}},"textdomain":"story-video-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScriptModule":"file:./view.js"}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			let notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn, priority] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"story-video-block/index": 0,
/******/ 			"story-video-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = globalThis["webpackChunkstory_video_block"] ||= [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["story-video-block/style-index"], () => (__webpack_require__("./src/story-video-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map