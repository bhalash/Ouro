<?php 
/**
 * Section: Product
 * ----------------
 * @category   Product Section Script
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

<section id="product">
    <div class="content">
        <h3 class="sec-title">The <?php printf(PRODUCT_NAME); ?> Prototype</h3>
        <p>The <?php printf(PRODUCT_NAME); ?> bioprinter will be coming to the market in 2015.</p>
        <div class="feature gallery" id="gallery">
            <?php 
            /* Lazy iteration of images. There are no descriptions
             * available for images. */
            $ouro_images = array(
                'full' => ASSETS . '/images/gallery/full/',
                'thumb' => ASSETS . '/images/gallery/thumb/',
                'alt' => 'The ' . PRODUCT_NAME . ' Bioprinter',
                'extension' => '.jpg'
            );

            for ($i = 0; $i <= 23; $i++) {
                printf('<a class="image" href="%s"><img data-src="%s" alt="%s" /></a>', 
                    $ouro_images['full'] . $i . $ouro_images['extension'], 
                    $ouro_images['thumb'] . $i . $ouro_images['extension'], 
                    $ouro_images['alt'] 
                );
            } 
            ?>
        </div>
    </div>
</section>
