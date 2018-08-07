<?php
/**
* Template Name: Лендинг №1
*/

$context = Timber::get_context();
$post = new TimberPost();

$context['post'] = $post;

Timber::render( array( 'template-landing-1.twig' ), $context );