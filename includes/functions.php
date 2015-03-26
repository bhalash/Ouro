<?php 

/*
 * PHPMmailer Functions
 * --------------------
 */

function mail_body($data = null) {
    // Body of email.
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
    // Subject of email.
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
    $services = array(
        'facebook' => 'facebook.com',
        'github' => 'github.com',
        'twitter' => 'twitter.com',
        'blog' => COMPANY_BLOG
    );

    $service = strtolower($service);

    $social_link = '<a class="' . $service . '" ';

    if ($title !== '') {
        $social_link .= 'title="' . $title . '" ';
    }

    $social_link .= 'href="//' . $services[$service] . '/';
    $social_link .= $handle . '" ';
    $social_link .= 'rel="external nofollow">';
    $social_link .= '</a>';

    printf($social_link);
}

/*
 * Site Meta Tags
 * --------------
 */

function header_verification_tags($tags_array) { 
    // Iterate through all meta tags.
    foreach ($tags_array as $meta_tag) {
        printf('<meta name="%s" content="%s">', $meta_tag['name'], $meta_tag['content']); 
    }
}
?>