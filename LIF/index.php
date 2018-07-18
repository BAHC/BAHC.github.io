<?php
//define('CMSIF_ASSETS', '/lif/'); //if your project live in subdirectory

define('CMSIF_WEBROOT', __DIR__);
define('CMSIF_COOKIE_LTIME', 3600);
define('CMSIF_TIMEZONE', 'Europe/Moscow');
define('CMSIF_DEFAULT_LANG', 'en');

define('CMSIF_FILES', __DIR__.'/__FILES__/');
define('CMSIF_MODULES', __DIR__.'/__MODULES__/');
define('CMSIF_TEMPLATES', __DIR__.'/__TEMPLATES__/');

//DB
define('CMSIF_DB_HOST', 'localhost');
define('CMSIF_DB_USER', 'root');
define('CMSIF_DB_PASS', 'toor');
define('CMSIF_DB_NAME', 'app');

require __DIR__.'/vendors/cmsif/cmsif.php';

init();

router('get', '/town/', CMSIF_MODULES.'/town.php');
router('post', '/town/', CMSIF_MODULES.'/town_post.php');

router('get', '/town/([0-9]*)', CMSIF_MODULES.'/town.php');
router('post', '/town/([0-9]*)', CMSIF_MODULES.'/town_post.php');

router('get', '/town.html', CMSIF_MODULES.'/town.php');

router('get', '/town_old.html', function(){
    echo fileRead('town.html');
});
