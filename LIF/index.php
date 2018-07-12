<?php
define('CMSIF_ASSETS', '/lif/');
require __DIR__.'/cmsif.php';

init();

router('get', '/lif/town/', CMSIF_MODULES.'/town.php');

router('get', '/lif/town.html', function(){
    echo fileRead('town.html');
});