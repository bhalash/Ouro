<?php 
/**
 * Section: Team
 * -------------
 * @category   Team Section Script
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

<section id="team">
    <div class="content">
        <h3 class="sec-title">The <?php printf(COMPANY_NAME); ?> Team</h3>
        <p>Staffed by rugged beards and fearsome pirate queens, <?php printf(COMPANY_NAME); ?>'s diverse team is drawn from two continents. Hover over or tap to find out more!</p>
        <div class="feature teamlist">
            <?php foreach($ouro_team as $member) : ?>
                <div class="member">
                    <a class="avatar" target="_blank" href="javascript:void(0)">
                        <img data-src="<?php printf($member['avatar']); ?>" alt="<?php printf($member['name']); ?>" />
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
