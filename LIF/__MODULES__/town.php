<?php
$_version = 'v.4.5';
require CMSIF_MODULES.'/map.php';
require CMSIF_FILES.'/map_default.php';

$s_out =  mapView($_map);
renderBlock($s_out, 'table');

$s_out = fileRead('map_interface.html');
renderBlock($s_out, 'legendForm');

assetExternal('https://use.fontawesome.com/releases/v5.1.0/css/all.css', ['integrity'=>'sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt', 'crossorigin'=>'anonymous']);
asset('town.css',['version'=>$_version]);
asset('town.js',['version'=>$_version]);

renderHTML('main');