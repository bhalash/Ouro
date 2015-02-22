<?php
require_once('config.php');

$errors = array();
$data = array();

foreach ($_POST as $key => $post) {
    // Sanitize $_POST
    if (empty($post) && $key !== 'website') {
        $errors[$key] = $messages['empty'][$key];
    } else {
        switch ($key) {
            case 'email':
                $data[$key] = filter_var($post, FILTER_SANITIZE_EMAIL); break;
            default:
                $data[$key] = filter_var($post, FILTER_SANITIZE_STRING); break;
        }
    }
}

if (!empty($errors)) {
    // If we have errors.
}

// Leave unused fields until final recipient is decided.
$mail->addAddress('mark@bhalash.com', 'Mark Grealish');
// $mail->addReplyTo('info@example.com', 'Information');
// $mail->addCC('cc@example.com');
// $mail->addBCC('bcc@example.com');

$mail->Subject = mail_subject($data);
$mail->Body = mail_body($data);

if ($mail->send()) {
    $data['success'] = true;
    $data['message'] = $messages['mail']['sent'];
} else {
    $data['success'] = false;
    $data['message'] = $mail->ErrorInfo;
}

printf('%s', json_encode($data));
?>