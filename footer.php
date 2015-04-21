<?php 
/**
 * Site Footer
 * -----------
 * @category   Website Footer
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

        </div> <?php // End #content ?>
        <?php // modernizr needs to load first or it will cause an erronous detection of touch support ?>
        <script src="<?php printf('%s', ASSETS . '/js/modernizr_touch.min.js'); ?>"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script>
            $(document).bind("mobileinit", function(){
                $.mobile.ignoreContentEnabled = true;
            });
        </script>
        <script src="//ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>
        <script src="<?php printf('%s', ASSETS . '/js/browser_detect.min.js'); ?>"></script>
        <script src="<?php printf('%s', ASSETS . '/js/main.min.js'); ?>"></script>
        <script src="<?php printf('%s', ASSETS . '/js/nav.min.js'); ?>"></script>
        <script src="<?php printf('%s', ASSETS . '/js/gallery.min.js'); ?>"></script>
        <script src="<?php printf('%s', ASSETS . '/js/team.min.js'); ?>"></script>
    </body>
</html>
