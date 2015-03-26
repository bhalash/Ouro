<section id="team">
    <div class="content">
        <h3 class="sec-title">The <?php printf(COMPANY_NAME); ?> team</h3>
        <p>Staffed by rugged beards and fearsome pirate queeens, <?php printf(COMPANY_NAME); ?>'s diverse team is drawn from two continents. Hover over or tap to find out more!</p>
        <div class="feature teamlist">
            <?php foreach($ouro_team as $member) : ?>
                <div class="member">
                    <a class="avatar" target="_blank" href="javascript:void(0)">
                        <img src="<?php printf($member['avatar']); ?>" alt="<?php printf($member['name']); ?>" />
                    </a>
                    <div class="description">
                        <?php if (!empty($member['social'])) : ?>
                            <ul class="team-social">
                                <?php foreach ($member['social'] as $service => $handle) : ?>
                                    <li><?php generate_social_link($service, $handle); ?></li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>
                        <p>
                            <span class="name"><?php printf($member['name']); ?></span><br />
                            <span class="title"><?php printf($member['title']); ?></span>
                        </p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>