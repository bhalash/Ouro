<nav id="menu">
    <h4 id="ouro-name"><a class="current-nav nav" href="#home"><span>Ouro_</span><span>botics</span></a></h4>
    <ul id="nav-sections">
        <li><a class="nav" href="#bioprint">Bioprinting</a></li>
        <li><a class="nav" href="#product">The <?php printf(PRODUCT_NAME); ?></a></li>
        <li><a class="nav" href="#team"><?php printf(COMPANY_NAME); ?> Team</a></li>
        <li><a class="nav" href="#contact">Contact Us!</a></li>
    </ul>
    <ul id="nav-social">
        <li><?php generate_social_link('twitter', COMPANY_TWITTER, COMPANY_NAME . ' on Twitter'); ?></li>
        <li><?php generate_social_link('facebook', COMPANY_FACEBOOK, COMPANY_NAME . ' on Facebook'); ?></li>
        <li><?php generate_social_link('blog', '', COMPANY_NAME . ' blog'); ?></li>
    </ul>
</nav>