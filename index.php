<?php
/*
 * Configuration and Functions
 * ---------------------------
 */

require_once('config.php'); 
require_once(INCLUDES . '/functions.php');

/*
 * Site Structure
 * --------------
 */

// Site header
require_once('header.php');
// Site sections.
include_once(INCLUDES . '/sections/section-product.php');
include_once(INCLUDES . '/sections/section-team.php');
include_once(INCLUDES . '/sections/section-contact.php');
// Site footer.
require_once('footer.php');
?>