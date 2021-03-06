<?php

$_version = 'v.7.'.(date('Ymdhi', time()));
require CMSIF_MODULES.'/map.php';
require CMSIF_FILES.'/map_default.php';

$_town_id = substr(time(), -5, 5);
if(isset($_matches) && isset($_matches[1]))
{
    $_town_id = (int) $_matches[1];
}
renderBlock('<input id="mapId" type="hidden" value="'.$_town_id.'">');

$s_out =  mapView($_map);
renderBlock($s_out, 'table');

$s_out = ($_town_id)? '<small>Town '. $_town_id.'</small>': '';
$s_out .= fileRead('map_interface.html');
renderBlock($s_out, 'legendForm');

$s_out = '';
$_file_link = '_towns/id'. sprintf('%010d', $_town_id) .'.json';
$_mapData = fileRead($_file_link, 'json');
$s_name = '';
$s_cells = [];
if(is_array($_mapData))
{
    if(isset($_mapData['map']))
    {
        foreach($_mapData['map'] as $_k=>$_v)
        {
            $s_cells[] = '    {"id": "'.$_k.'","classes": "'. $_v['classes'] .'", "content":"'. $_v['content'] .'"}';
        }
    }
}

$s_out = EOL .'<script>'. EOL . 'var mapName = "'.(isset($_mapData['name'])? $_mapData['name']: '').'";'. EOL .'var getMapName = function(){ return mapName; }'. EOL;

$s_out .= 'var readyMap = new Array;'. EOL .'var getReadyMap = function() { readyMap = ['. EOL . implode(','.EOL, $s_cells).']; return readyMap; }'.EOL;

$s_out .= '</script>'. EOL;

renderBlock($s_out, 'mapUpdate');


assetExternal('https://use.fontawesome.com/releases/v5.1.0/css/all.css', ['integrity'=>'sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt', 'crossorigin'=>'anonymous']);
asset('town.css',['version'=>$_version]);
asset('town.js',['version'=>$_version]);

renderHTML('main');