<?php

/*
** Customize WordPress
*/
require_once( get_template_directory() . '/includes/hooks/disable-pages.php' );
require_once( get_template_directory() . '/includes/hooks/enable-svg-upload.php' );
require_once( get_template_directory() . '/includes/hooks/filter_yoast_breadcrumbs_separator.php' );





/*
** Customize theme
*/
require_once( get_template_directory() . '/includes/setup.php' );
require_once( get_template_directory() . '/includes/enqueue-scripts-styles.php' );
require_once( get_template_directory() . '/includes/soil.php' );
require_once( get_template_directory() . '/includes/images-sizes.php' );
require_once( get_template_directory() . '/includes/register-menus.php' );
require_once( get_template_directory() . '/includes/template-tags.php' );
