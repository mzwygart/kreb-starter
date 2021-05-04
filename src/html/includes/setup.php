<?php
show_admin_bar(false);



add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('html5');



function kreb_load_theme_textdomain() {
  load_theme_textdomain( 'kreb', get_template_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'kreb_load_theme_textdomain' );
