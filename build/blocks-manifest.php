<?php
// This file is generated. Do not modify it manually.
return array(
	'story-video-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/story-video-block',
		'version' => '0.1.0',
		'title' => 'Story Video Block',
		'category' => 'media',
		'icon' => 'video-alt3',
		'description' => 'A video and text section with lazy-loaded video embeds.',
		'keywords' => array(
			'video',
			'youtube',
			'story',
			'testimonial'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'attributes' => array(
			'align' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'videoUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'videoProvider' => array(
				'type' => 'string',
				'default' => 'youtube'
			),
			'videoId' => array(
				'type' => 'string',
				'default' => ''
			),
			'posterUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'posterId' => array(
				'type' => 'number'
			),
			'posterAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'heading' => array(
				'type' => 'string',
				'default' => ''
			),
			'headingTag' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'description' => array(
				'type' => 'string',
				'default' => ''
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'transcriptUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'transcriptName' => array(
				'type' => 'string',
				'default' => ''
			),
			'transcriptSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'playButtonStyle' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'playIcon' => array(
				'type' => 'string',
				'default' => 'triangle'
			),
			'videoPosition' => array(
				'type' => 'string',
				'default' => 'right'
			),
			'showQuotationMarks' => array(
				'type' => 'boolean',
				'default' => false
			),
			'cardStyle' => array(
				'type' => 'string',
				'default' => 'standard'
			),
			'quoteText' => array(
				'type' => 'string',
				'default' => ''
			),
			'authorName' => array(
				'type' => 'string',
				'default' => ''
			),
			'authorTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'avatarUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'avatarId' => array(
				'type' => 'number'
			),
			'avatarAlt' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'story-video-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScriptModule' => 'file:./view.js'
	)
);
