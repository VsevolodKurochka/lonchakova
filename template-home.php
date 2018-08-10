<?php
/**
* Template Name: Главная
*/

$context = Timber::get_context();
$post = new TimberPost();

$context['post'] = $post;

$calendar_events_json = json_encode(get_field('calendar_events'));
//$calendar_events_json = preg_replace('/"([^"]+)"\s*:\s*/', '$1:', $calendar_events_json);

$context['calendar_events'] = $calendar_events_json;

Timber::render( array( 'template-home.twig' ), $context );