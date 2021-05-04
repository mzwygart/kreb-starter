<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <?php wp_head(); ?>

  <script>window.MSInputMethodContext && document.documentMode && document.write('<script src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js"><\x2fscript>');</script>

</head>

<body <?php body_class(); ?> id="top">

  <div class="el-invisible" hidden>
    <?php
    $arrContextOptions=array(
      "ssl"=>array(
        "verify_peer"=>false,
        "verify_peer_name"=>false,
      ),
    );

    $response = file_get_contents(get_template_directory_uri().'/img/icons.svg', false, stream_context_create($arrContextOptions));

    echo $response;
    ?>
  </div>
