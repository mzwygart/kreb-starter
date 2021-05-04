<?php
function kreb_filter_wpseo_breadcrumb_separator($this_options_breadcrumbs_sep) {
    return '<svg class="breadcrumbs__separator"><use xlink:href="#ic-chevron-right"></use></svg>';
};

// add the filter
add_filter('wpseo_breadcrumb_separator', 'kreb_filter_wpseo_breadcrumb_separator', 10, 1);
