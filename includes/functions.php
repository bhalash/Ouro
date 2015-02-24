<?php 
function mail_body($data = null) {
    // Body of email.
    $body = '';

    if ($data === '') {
        return 'Message is blank';
    }

    $body .= '<strong>Name:</strong>&nbsp;' . $data['name'] . '<br />';
    $body .= '<strong>Email:</strong>&nbsp;' . $data['email'] . '<br />';

    if ($data['website'] !== '') {
        $body .= '<strong>Website:</strong>&nbsp;' . $data['website'] . '<br />';
    }

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
?>