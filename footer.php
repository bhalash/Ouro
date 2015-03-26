        </div> <?php // End #content ?>
        <?php // modernizr needs to load first or it will cause an erronous detection of touch support ?>
        <script src="<?php printf('%s', ASSETS . '/js/modernizr_touch.js'); ?>"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="<?php printf('%s', ASSETS . '/js/browser_detect.js'); ?>"></script>
        <script src="<?php printf('%s', ASSETS . '/js/main.js'); ?>"></script>
        <script src="<?php printf('%s', ASSETS . '/js/nav.js'); ?>"></script>
        <script src="<?php printf('%s', ASSETS . '/js/gallery.js'); ?>"></script>
        <script src="<?php printf('%s', ASSETS . '/js/team.js'); ?>"></script>
        <?php // Load /all/ the scripts! ?>
    </body>
</html>