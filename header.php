<?php 
/**
 * Site Header 
 * -----------
 * @category   Site Header Code
 * @package    Ouro_botics landing page
 * @author     Mark Grealish <mark@bhalash.com>
 * @copyright  Copyright (c) 2015, Ouro_botics
 * @license    https://www.gnu.org/copyleft/gpl.html The GNU General Public License v3.0
 * @version    1.0
 * @link       https://github.com/bhalash/ouro.ie
 * 
 * This file is part of ouro.ie
 * 
 * ouro.ie is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * ouro.ie is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Ouro_botics. If not, see <http://www.gnu.org/licenses/>.
 */
?>

<!DOCTYPE html>
<html lang="en-US">
<head>
    <!-- Whether a thought is spoken or not it is a real thing with powers of reality. -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="no">

    <?php // Change site title on the sandbox, because occasionally I forget and goof up. Whoops. ?>
    <title><?php printf('%s', (IS_DEV_SITE) ? 'Ix Sandbox' : COMPANY_NAME); ?></title>

    <?php // Stylesheets and favicon ?>
    <link href="//fonts.googleapis.com/css?family=Source+Sans+Pro|Open+Sans:400,300|Fjalla+One" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="<?php printf('%s', ASSETS . '/sass/style.css'); ?>">
    <!-- [if IE]><link rel="shortcut icon" href="images/favicon.ico"><![endif] -->
    <link rel="icon" href="<?php printf('%s', ASSETS . '/images/favicon.png'); ?>">

    <?php // Site verificaiton ?>
    <?php header_verification_tags($meta_verification); ?>

    <?php 
    // Open Graph and Twitter Card Information
    $card_url = 'http' . (isset($_SERVER['https']) ? 's' : '') . '://' . $_SERVER['SERVER_NAME'];
    $card_desc = 'Bioprinting-tissue engineering-is the next step: skin grafts,' 
        . 'bones and eventually whole replacement organs will be grown '
        . 'on demand from scratch. ' . COMPANY_NAME . ' plans to be at '
        . 'the forefront of this field with the ' . PRODUCT_NAME . '.';

    $card_image = array(
        'src' => $card_url . '/ouro.jpg',
        'width' => '1920',
        'height' => '1080'
    );

    // Open Graph ?>
    <meta property="og:site_name" content="<?php printf(COMPANY_NAME); ?>">
    <meta property="og:title" content="<?php printf(COMPANY_NAME); ?>">
    <meta property="og:url" content="<?php printf($card_url); ?>">
    <meta property="og:description" content="<?php printf($card_desc); ?>">
    <meta property="og:image" content="<?php printf($card_image['src']); ?>">
    <meta property="og:image:width" content="<?php printf($card_image['width']); ?>">
    <meta property="og:image:height" content="<?php printf($card_image['height']); ?>">
    <meta property="og:type" content="website">
    <?php // en_IE exists, but some Open Graph scrapers *coughfacebookandgooglecough* don't recognize it. ?>
    <meta property="og:locale" content="en_GB">

    <?php // Twitter Cards ?>
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="<?php printf('@%s', COMPANY_TWITTER); ?>">
    <meta name="twitter:title" content="<?php printf(COMPANY_NAME); ?>">
    <meta name="twitter:description" content="<?php printf($card_desc); ?>">
    <meta name="twitter:url" content="<?php printf($card_url); ?>">
</head>
    <body>
        <?php include_once(INCLUDES . '/sections/section-head.php'); ?>
        <div id="content">
