<?php
/**
 * Section: Contact
 * --------------------
 * @category   Contact Section Script
 * @package    Ouro_botics landing page
 * @author     Mark Grealish <mark@bhalash.com>
 * @copyright  2015 Mark Grealish
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

<section class="inverse" id="contact">
    <div class="content">

        <h3 class="sec-title">Would you like to know more?</h3>
        <p>Stay in the loop on the latest Ouro developments on our mailing list, email <a href="mailto:<?php printf(COMPANY_GREETER_EMAIL); ?>"><?php printf(COMPANY_GREETER_EMAIL); ?></a>, check out <a href="<?php printf(COMPANY_BLOG); ?>">our blog</a>, or follow <a title="<?php printf('@%s', COMPANY_TWITTER); ?>" href="https://www.twitter.com/<?php printf('%s', COMPANY_TWITTER); ?>"><?php printf('@%s', COMPANY_TWITTER); ?></a> on Twitter!</p>

        <div id="mc_embed_signup">
            <form action="//ouro.us10.list-manage.com/subscribe/post?u=d09d427a327a7172115624240&amp;id=c48802699f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                    <input type="email" value="" name="EMAIL" class="contact-email" id="mce-EMAIL" placeholder="email address" required>
                    <div style="position: absolute; left: -5000px;">
                        <input type="text" name="b_d09d427a327a7172115624240_c48802699f" tabindex="-1" value="">
                    </div>
                    <div class="clear">
                        <input data-enhance="false" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" role="button" class="button">
                    </div>
                </div>
            </form>
        </div>

    </div>
    <div id="footer">
        <p>Copyright &copy; 2015 <a title="Tr3life home" href="http://tr3life.eu/">Tr3life</a><small>&trade;</small>. All rights reserved.</p>
    </div>
</section>