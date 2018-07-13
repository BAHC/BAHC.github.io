<?php
define('CMSIF_ASSETS', '/lif/');
require __DIR__.'/cmsif.php';

init();

router('get', '/town/', CMSIF_MODULES.'/town.php');

router('get', '/town/([0-9]*)',  function($_matches){
    require CMSIF_MODULES.'/town.php';
});

router('get', '/town.html', CMSIF_MODULES.'/town.php');

router('get', '/town_old.html', function(){
    echo fileRead('town.html');
});
