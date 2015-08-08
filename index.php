<?php
/**
 * Site Index 
 * ----------
 * Main point of entry into the theme.
 * 
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

require_once('config.php'); 
require_once(INCLUDES . '/functions.php');

/*
 * Site Structure
 * --------------
 */

// Site header
require_once('header.php');
// Site sections.
include_once('sections/section-bioprinting.php');
include_once('sections/section-product.php');
include_once('sections/section-team.php');
include_once('sections/section-contact.php');
// Site footer.
require_once('footer.php');
?>
