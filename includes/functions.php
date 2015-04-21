<?php 

/**
 * Ouro Landing Page Functions 
 * ---------------------------
 * @category   Functions File
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

function mail_body($data = null) {
    /**
     * Generate Content of Mail Body
     * -----------------------------
     * @param {string} $data The input data.
     * @return {string} $body The text of the email.
     */

    $body = '';

    if ($data === '') {
        return 'Message is blank';
    }

    $body .= '<strong>Name:</strong>&nbsp;' . $data['name'] . '<br />';
    $body .= '<strong>Email:</strong>&nbsp;' . $data['email'] . '<br />';
    $body .= '<strong>Message:</strong>&nbsp;' . $data['message'];
    return $body;
}

function mail_subject($data = null) {
    /**
     * Generate Email Subject 
     * ----------------------
     * @param {string} $data Raw data for email subject
     * @return {string} $subject The parsed subject.
     */
    $subject = '';

    if ($data === '') {
        return 'Subject blank';
    }

    $subject .= 'Message from ' . $data['name'];
    $subject .= ' (' . $data['email'] . ')';
    return $subject;
}

/*
 * Social Link Generation
 * ----------------------
 */

function generate_social_link($service, $handle = null, $title = null) {
    /**
     * Generate Site Social Links
     * --------------------------
     * Taken parameters of social link and return anchor code.
     * 
     * @param {string} $service The chosen service.
     * @param {string} $handle The social network handle, e.g. twitter.com/foo
     * @param {string} $title Optional title for the hyperlink.
     */

    $services = array(
        'facebook' => 'facebook.com',
        'youtube' => 'youtube.com',
        'github' => 'github.com',
        'twitter' => 'twitter.com',
        'discuss' => COMPANY_BLOG
    );

    $social_link = array();
    $service = strtolower($service);
    $social_link[] = '<a class="' . $service . '" ';

    if ($title !== '') {
        $social_link[] = 'title="' . $title . '" ';
    }

    $social_link[] = 'href="//' . $services[$service] . '/';
    $social_link[] = $handle . '" ';
    $social_link[] = 'rel="external nofollow">';
    $social_link[] = '</a>';
    printf(implode('', $social_link));
}

/*
 * Site Meta Tags
 * --------------
 */

function header_verification_tags($tags_array) { 
    /** 
     * Generate Site Verification Tags 
     * -------------------------------
     * Bing, etc. require a meta tag in the header to verify the site. 
     * Since this site is available concurrently across several doamins, 
     * I generate the correct one as needed.
     * 
     * @param {array} $tags_array Array of elements for the tag.
     * @return {string} The meta tag
     */

    foreach ($tags_array as $meta_tag) {
        printf('<meta name="%s" content="%s">', $meta_tag['name'], $meta_tag['content']); 
    }
}
?>
