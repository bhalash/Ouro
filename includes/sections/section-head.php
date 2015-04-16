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
        <li><?php generate_social_link('youtube', COMPANY_YOUTUBE, COMPANY_NAME . ' on YouTube'); ?></li>
        <li><?php generate_social_link('discuss', '', COMPANY_NAME . ' blog'); ?></li>
    </ul>
</nav>
<section id="home">
    <div id="timelapse">
        <video preload loop autoplay poster="/assets/images/video-timelapse-poster.jpg">
            <source src="/assets/videos/video-timelapse.mp4" type="video/mp4">
            Your browser can't show you our awesome video, sorry. D:
        </video>
    </div>
    <div class="header-brand" id="brand"></div> 
    <div id="funders">
        <a class="funder haxlr8r header-brand" rel="external nofollow" href="http://www.haxlr8r.com/" title="Haxlr8r"></a> 
        <a class="funder sosventures header-brand" rel="external nofollow" href="http://www.sosventures.com/" title="Sosventures"></a> 
    </div>
</section>