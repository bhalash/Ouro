<?php 
/**
 * Ouro Landing Page Functions 
 * ----------------------------
 * @category   Configuration File
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

define('ROOT', __DIR__);
define('INCLUDES', ROOT . '/includes');
define('ASSETS', '/ouro/assets');
define('IS_DEV_SITE', ($_SERVER['SERVER_NAME'] === 'ix.bhalash.com'));
define('COMPANY_TWITTER', 'ouro_botics');
define('COMPANY_FACEBOOK', 'ourobotics');
define('COMPANY_YOUTUBE', 'channel/UC0_5AybJ9uL8ZRaN_jvHA5g');
define('COMPANY_NAME', 'Ouro_botics');
define('PRODUCT_NAME', 'Ouro');
define('COMPANY_BLOG', 'blog.ouro-botics.com');
define('COMPANY_GREETER_EMAIL', 'hello@ouro.ie');

/**
 * Error Reporting
 * ---------------
 */

// if (IS_DEV_SITE) {
    ini_set('error_reporting', 1);
    ini_set('display_errors', 1);
    ini_set('log_errors', 1);
    error_reporting(E_ALL|E_STRICT);
// }

/** 
 * Domain Verification Meta Tags
 * -----------------------------
 * 
 */

$meta_verification = array(
    array(
        // Bing Webmaster Tools for ouro.ie
        'name' => 'msvalidate.01',
        'content' => '205E68696E2A0E9A5E633C8D8FEA45CA'
    ),
    array(
        // Google Apps for ouro-botics.com
        'name' => 'google-site-verification',
        'content' => 'guoTklbsmbMb1tR2usJX3nhvwf-bcUK72M552mge2yU'
    ),
    array(
        // Google Apps for ouro-botics.co.uk
        'name' => 'google-site-verification',
        'content' => '0hc6jStyjhUEMhRC0g32lgbp1DulLu5U9MJ0vDmCSsE'
    )
);

/*
 * The Ouro Team
 * -------------
 */

$avatar_path = ASSETS . '/images/team/';

$ouro_team = array(
    'jemma' => array(
        'name' => 'Jemma Redmond',
        'title' => 'Ouro CEO',
        'avatar' => $avatar_path . 'team-jemma.jpg',
        'social' => array(
            'twitter' => 'sciencegirlg'
        )
    ),
    'alanna' => array(
        'name' => 'Alanna Kelly',
        'title' => 'Chief Engineer',
        'avatar' => $avatar_path . 'team-alanna.jpg',
        'social' => array()
    ),
    'joe' => array(
        'name' => 'Joe Keane',
        'title' => 'Mechanical Engineer',
        'avatar' => $avatar_path . 'team-joe.jpg',
        'social' => array()
    ),
);

/*
 * PHP Mailer Configuration
 * ------------------------
 */

require_once(INCLUDES . '/PHPMailer/PHPMailerAutoload.php');

// Debug.
$mail = new PHPMailer;
$mail->SMTPDebug = 3;
// Set mailer to use SMTP
$mail->isSMTP();
// Specify main and backup SMTP servers
$mail->Host = 'smtp.gmail.com';
// Enable SMTP authentication
$mail->SMTPAuth = true;
// SMTP username                         
$mail->Username = COMPANY_GREETER_EMAIL;
// SMTP password       
$mail->Password = 'CHANGE ME CHANGE ME CHANGE ME CHANGE ME CHANGE ME CHANGE ME';
// Enable TLS encryption, `ssl` also accepted                           
$mail->SMTPSecure = 'tls';
// TCP port to connect to                
$mail->Port = 587;
// Set email format to HTML                 
$mail->isHTML(true);

$mailer_messages = array(
    // Form messages
    'empty' => array(
        // Empty $_POST messages.
        'name' => 'A name is required!',
        'email' => 'An email address is required!',
        'message' => 'Please enter a message!'
    ),
    'invalid' => array(
        // Invalid $_POST messages.
        'email' => 'A valid email address is required!'
    ),
    'mail' => array(
        // Sendmail messages.
        'subject' => 'Message from ', 
        'sent' => 'Your message has been dispatched to Ouro! Thank you for your interest in us.'
    )
);
?>
