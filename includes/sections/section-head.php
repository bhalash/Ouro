<nav id="menu">
    <h4 class="ouro-brand"><a class="current-nav nav" href="#home"><span>ouro_</span><span>botics</span></a></h4>
    <ul class="navigation">
        <li><a class="nav" href="#product">The <?php printf(PRODUCT_NAME); ?></a></li>
        <li><a class="nav" href="#team"><?php printf(COMPANY_NAME); ?> Team</a></li>
        <li><a class="nav" href="#contact">Contact Us!</a></li>
    </ul>
    <ul class="social">
        <li><?php generate_social_link('twitter', COMPANY_TWITTER); ?></li>
        <li><?php generate_social_link('facebook', COMPANY_FACEBOOK); ?></li>
        <li><a class="comments" href="<?php printf(COMPANY_BLOG); ?>"></a></li>
    </ul>
</nav>
<section id="home">
    <div class="brand">
        <h1>ouro</h1>
    </div>
    <div class="blurbs">
        <h3>Introduciing the <?php printf(PRODUCT_NAME); ?> Bioprinter:</h3>
        <p><?php printf(PRODUCT_NAME); ?> is the next generation of bioprinting technology: a lower-cost tissue engineering platform with superior print resolution.<br />
        Follow <a title="<?php printf('@%s', COMPANY_TWITTER); ?>" rel="external nofollow" href="//www.twitter.com/<?php printf('%s', COMPANY_TWITTER); ?>"><?php printf('@%s', COMPANY_TWITTER); ?></a> on Twitter or check out <a title="The <?php printf(COMPANY_NAME); ?> blog" rel="external" href="<?php printf(COMPANY_BLOG); ?>">our blog</a>.</p>
        <?php // Mailing list link here ?>
    </div>
</section>