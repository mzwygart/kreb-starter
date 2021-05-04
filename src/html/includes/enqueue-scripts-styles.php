<?php
function kreb_styles_scripts() {
  wp_enqueue_style('main', get_template_directory_uri() . '/css/style.css', array(), filemtime(get_template_directory() . '/css/style.css'), false);

	wp_enqueue_script('myjquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js');
	wp_enqueue_script('app', get_template_directory_uri() . '/js/app.js', array(), filemtime(get_template_directory() . '/js/app.js'), false);
}
add_action('wp_enqueue_scripts', 'kreb_styles_scripts');
