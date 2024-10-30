<?php

/**
 * Preload necessary resources for the editors.
 *
 * @param array                   $paths   REST API paths to preload.
 * @param WP_Block_Editor_Context $context Current block editor context
 *
 * @return array Filtered preload paths.
 */
function gutenberg_block_editor_preload_paths_6_8( $paths, $context ) {
	if ( 'core/edit-site' === $context->name ) {
		// Core already preloads both of these for `core/edit-post`.
		$paths[] = '/wp/v2/settings';
		$paths[] = array( '/wp/v2/settings', 'OPTIONS' );
		$paths[] = '/?_fields=' . implode(
			',',
			// @see packages/core-data/src/entities.js
			array(
				'description',
				'gmt_offset',
				'home',
				'name',
				'site_icon',
				'site_icon_url',
				'site_logo',
				'timezone_string',
				'url',
			)
		);
	}
	return $paths;
}
add_filter( 'block_editor_rest_api_preload_paths', 'gutenberg_block_editor_preload_paths_6_8', 10, 2 );
