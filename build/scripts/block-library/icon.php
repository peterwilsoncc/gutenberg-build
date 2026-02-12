<?php
/**
 * Server-side rendering of the `core/icon` block.
 *
 * @package WordPress
 */

/**
 * Renders the `core/icon` block on server.
 *
 * @since 7.0.0
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The block content.
 * @param WP_Block $block      The block instance.
 *
 * @return string Returns the Icon.
 */
function gutenberg_render_block_core_icon( $attributes ) {
	if ( empty( $attributes['icon'] ) ) {
		return;
	}

	$registry = WP_Icons_Registry::get_instance();
	$icon     = $registry->get_registered_icon( $attributes['icon'] );

	if ( is_null( $icon ) ) {
		return;
	}

	$aria_label = ! empty( $attributes['ariaLabel'] ) ? $attributes['ariaLabel'] : '';

	// Process the markup.
	$processor = new WP_HTML_Tag_Processor( $icon['content'] );
	$processor->next_tag( 'svg' );
	if ( ! $aria_label ) {
		// Icon is decorative, hide it from screen readers.
		$processor->set_attribute( 'aria-hidden', 'true' );
		$processor->set_attribute( 'focusable', 'false' );
	} else {
		$processor->set_attribute( 'role', 'img' );
		$processor->set_attribute( 'aria-label', $aria_label );
	}

	// Return the updated SVG markup.
	$svg        = $processor->get_updated_html();
	$attributes = get_block_wrapper_attributes();
	return sprintf( '<div %s>%s</div>', $attributes, $svg );
}


/**
 * Registers the `core/icon` block on server.
 *
 * @since 7.0.0
 */
function gutenberg_register_block_core_icon() {
	register_block_type_from_metadata(
		__DIR__ . '/icon',
		array(
			'render_callback' => 'gutenberg_render_block_core_icon',
		)
	);
}
add_action( 'init', 'gutenberg_register_block_core_icon', 20 );
