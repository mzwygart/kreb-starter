<?php
function kreb_enable_svg_upload($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'kreb_enable_svg_upload');
