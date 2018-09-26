<?php
/**
* Template Name: Анализ гардероба
*/

$context = Timber::get_context();
$post = new TimberPost();

$context['post'] = $post;

Timber::render( array( 'template-landing-analiz.twig' ), $context );