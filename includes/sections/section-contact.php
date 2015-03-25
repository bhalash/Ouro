<section class="inverse" id="contact">
    <h3 class="sec-title">Would you like to know more?</h3>
    <p>Stay in the loop on the latest Ouro developments on our mailing list, check out <a href="<?php printf(COMPANY_BLOG); ?>">our blog</a>, or follow <a title="<?php printf('@%s', COMPANY_TWITTER); ?>" href="https://www.twitter.com/<?php printf('%s', COMPANY_TWITTER); ?>"><?php printf('@%s', COMPANY_TWITTER); ?></a> on Twitter!</p>
    <p class="messages">&nbsp;</p>
    <form action="/contact.php" autocomplete="off" id="sendmessage" method="post" novalidate>
        <p>
            <span class="form-inputs">
                <input id="name" name="name" type="text" placeholder="Name" required>
                <input id="email" name="email" type="email" placeholder="Email" required>
            </span>
            <textarea id="message" name="message" placeholder="Message" required></textarea>
            <input id="unseen" name="unseen" type="hidden">
            <button id="submit" type="submit">Submit</button>
        </p>
    </form>
    <div id="footer">
        <p>Copyright &copy; 2015 <a title="Tr3life home" href="http://tr3life.eu/">Tr3life</a><small>&trade;</small>. All rights reserved.</p>
    </div>
</section>