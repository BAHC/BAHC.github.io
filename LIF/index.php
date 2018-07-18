<?php
//define('CMSIF_ASSETS', '/lif/'); //if your project live in subdirectory
require __DIR__.'/cmsif.php';

init();

router('get', '/town/', CMSIF_MODULES.'/town.php');
router('post', '/town/', CMSIF_MODULES.'/town_post.php');

router('get', '/town/([0-9]*)', CMSIF_MODULES.'/town.php');
router('post', '/town/([0-9]*)', CMSIF_MODULES.'/town_post.php');

router('get', '/town.html', CMSIF_MODULES.'/town.php');

router('get', '/town_old.html', function(){
    echo fileRead('town.html');
});
