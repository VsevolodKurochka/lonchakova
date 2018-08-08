<?php
/**
* Template Name: Лендинг №2
*/

$context = Timber::get_context();
$post = new TimberPost();

$context['post'] = $post;

Timber::render( array( 'template-landing-2.twig' ), $context );