<?php
/**
 * Contact Form
 * ------------
 * This functionality was replaced with Mailchimp, but the original site contact
 * form used PHPMailer. This handles input, sanitization and output.
 *  
 * @category   Contact Form Input
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

$errors = array();
$data = array();

foreach ($_POST as $key => $post) {
    // Sanitize $_POST
    if (empty($post)) {
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

// https://github.com/PHPMailer/PHPMailer
$mail->From = $data['email'];
$mail->FromName = $data['name'];
$mail->addAddress('hello@tr3life.eu', 'Tr3life');
$mail->addReplyTo($data['email'], $data['name']);
$mail->Subject = mail_subject($data);
$mail->Body = mail_body($data);

if ($mail->send()) {
    $data['success'] = true;
    $data['message'] = $mailer_messages['mail']['sent'];
} else {
    $data['success'] = false;
    $data['message'] = $mail->ErrorInfo;
}

printf('%s', json_encode($data));
?>
