<?php get_header(); ?>

<main id="siteMain" class="siteMain">
  <?php if( have_posts() ): ?>
    <?php while( have_posts() ): the_post() ?>
      <h1><?php the_title() ?></h1>
    <?php endwhile; ?>
  <?php else: ?>
    <?php _e('Aucun article', 'kreb'); ?>
  <?php endif; ?>
</main>

<?php get_footer(); ?>
