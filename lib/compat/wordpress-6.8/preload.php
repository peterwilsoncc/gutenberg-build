<?php

/**
 * Preload theme and global styles paths to avoid flash of variation styles in
 * post editor.
 *
 * @param array                   $paths REST API paths to preload.
 * @param WP_Block_Editor_Context $context Current block editor context.
 * @return array Filtered preload paths.
 */
function gutenberg_block_editor_preload_paths_6_8( $paths, $context ) {
	$excluded_paths = array();
	if ( 'core/edit-site' === $context->name || 'core/edit-post' === $context->name ) {
		$stylesheet       = get_stylesheet();
		$global_styles_id = WP_Theme_JSON_Resolver_Gutenberg::get_user_global_styles_post_id();
		$paths[]          = '/wp/v2/global-styles/themes/' . $stylesheet . '?context=view';
		$paths[]          = '/wp/v2/global-styles/themes/' . $stylesheet . '/variations?context=view';
		$paths[]          = array( '/wp/v2/global-styles/' . $global_styles_id, 'OPTIONS' );
		$excluded_paths[] = '/wp/v2/global-styles/themes/' . $stylesheet;
		$excluded_paths[] = '/wp/v2/global-styles/' . $global_styles_id;
	}
	foreach ( $paths as $key => $path ) {
		if ( in_array( $path, $excluded_paths, true ) ) {
			unset( $paths[ $key ] );
		}
	}
	return $paths;
}
add_filter( 'block_editor_rest_api_preload_paths', 'gutenberg_block_editor_preload_paths_6_8', 10, 2 );
