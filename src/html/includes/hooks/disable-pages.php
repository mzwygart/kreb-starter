<?php
function kreb_disable_pages() {
  global $wp_query;
  if ( is_author() || is_attachment() ) {
    $wp_query->set_404();
    status_header( 404 );
    get_template_part( 404 ); exit();
  }
}
add_action('template_redirect', 'kreb_disable_pages');
