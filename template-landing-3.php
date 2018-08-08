<?php
/**
* Template Name: Лендинг №3
*/

$context = Timber::get_context();
$post = new TimberPost();

$context['post'] = $post;

Timber::render( array( 'template-landing-3.twig' ), $context );