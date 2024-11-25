<?php
/**
 * PHP and WordPress configuration compatibility functions for the Gutenberg
 * editor plugin changes related to REST API.
 *
 * @package gutenberg
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Silence is golden.' );
}

if ( ! function_exists( 'gutenberg_add_post_type_rendering_mode' ) ) {
	/**
	 * Add Block Editor default rendering mode to the post type response.
	 */
	function gutenberg_add_post_type_rendering_mode() {
		$controller = new Gutenberg_REST_Post_Types_Controller_6_8();
		$controller->register_routes();
	}
}
add_action( 'rest_api_init', 'gutenberg_add_post_type_rendering_mode' );

// When querying terms for a given taxonomy in the REST API, respect the default
// query arguments set for that taxonomy upon registration.
function gutenberg_respect_taxonomy_default_args_in_rest_api( $args ) {
	// If a `post` argument is provided, the Terms controller will use
	// `wp_get_object_terms`, which respects the default query arguments,
	// so we don't need to do anything.
	if ( ! empty( $args['post'] ) ) {
		return $args;
	}

	$t = get_taxonomy( $args['taxonomy'] );
	if ( isset( $t->args ) && is_array( $t->args ) ) {
		$args = array_merge( $args, $t->args );
	}
	return $args;
}
add_action(
	'registered_taxonomy',
	function ( $taxonomy ) {
		add_filter( "rest_{$taxonomy}_query", 'gutenberg_respect_taxonomy_default_args_in_rest_api' );
	}
);
add_action(
	'unregistered_taxonomy',
	function ( $taxonomy ) {
		remove_filter( "rest_{$taxonomy}_query", 'gutenberg_respect_taxonomy_default_args_in_rest_api' );
	}
);
