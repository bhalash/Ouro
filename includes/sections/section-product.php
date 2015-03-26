<section id="product">
    <div class="content">
        <h3 class="sec-title">The <?php printf(PRODUCT_NAME); ?> prototype</h3>
        <p>The <?php printf(PRODUCT_NAME); ?> bioprinter will be coming to the market in 2015.</p>
        <div class="feature gallery" id="gallery">
            <?php 
            /* Lazy iteration of images. There are no descriptions
             * available for images. */
            $ouro_images = array(
                'full' => '/assets/images/gallery/full/',
                'thumb' => '/assets/images/gallery/thumb/',
                'alt' => 'The ' . PRODUCT_NAME . ' Bioprinter',
                'extension' => '.jpg'
            );

            for ($i = 0; $i <= 23; $i++) {
                printf('<a class="image" href="%s"><img src="%s" alt="%s" /></a>', 
                    $ouro_images['full'] . $i . $ouro_images['extension'], 
                    $ouro_images['thumb'] . $i . $ouro_images['extension'], 
                    $ouro_images['alt'] 
                );
            } 
            ?>
        </div>
    </div>
</section>