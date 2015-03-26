<nav id="menu">
    <h4 class="ouro-brand"><a class="current-nav nav" href="#home"><span>Ouro_</span><span>botics</span></a></h4>
    <ul class="navigation">
        <li><a class="nav" href="#product">The <?php printf(PRODUCT_NAME); ?></a></li>
        <li><a class="nav" href="#team"><?php printf(COMPANY_NAME); ?> Team</a></li>
        <li><a class="nav" href="#contact">Contact Us!</a></li>
    </ul>
    <ul class="social">
        <li><?php generate_social_link('twitter', COMPANY_TWITTER, COMPANY_NAME . ' on Twitter'); ?></li>
        <li><?php generate_social_link('facebook', COMPANY_FACEBOOK, COMPANY_NAME . ' on Facebook'); ?></li>
        <li><?php generate_social_link('blog', '', COMPANY_NAME . ' blog'); ?></li>
    </ul>
</nav>
<section id="home">
    <h1 class="brand">ouro</h1>
    <div class="blurbs">
        <div class="content">
            <h3>Introducing the <?php printf(PRODUCT_NAME); ?> bioprinter:</h3>
            <p>
                <?php printf(PRODUCT_NAME); ?> is the next generation of bioprinting technology: a lower-cost tissue engineering platform with superior print resolution. 
                Find out more about how Ouro can help you on <a title="The <?php printf(COMPANY_NAME); ?> blog" rel="external" href="<?php printf(COMPANY_BLOG); ?>">our blog.</a>
            </p>
            <h5>
                Tweet <a title="<?php printf('@%s', COMPANY_TWITTER); ?>" rel="external nofollow" href="//www.twitter.com/<?php printf('%s', COMPANY_TWITTER); ?>">
                    <?php printf('@%s', COMPANY_TWITTER); ?>
                </a>
            </h5>
        </div>
    </div>
</section>