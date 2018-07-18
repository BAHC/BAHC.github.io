<?php
require CMSIF_FILES.'/map_default.php';

$_data = [];
if(true == isAjax())
{
   $_data = json_decode(stripslashes(file_get_contents("php://input")), true);
}

$_town_id = 0;

if(isset($_matches) && isset($_matches[1]))
{
    $_town_id = (int) $_matches[1];
}

$_town = [];
$_town['name'] = isset($_data['mapTitle'])? $_data['mapTitle']: null;
$_town['map']  = isset($_data['mapData'])? $_data['mapData']: null;
$_town['id']   = isset($_data['mapId'])? (int) $_data['mapId']: null;

if(!is_null($_town['id']))
{
    $_town_id = $_town['id'];
}

$_file_password = null;
$_password = isset($_data['mapPassword']) && !empty($_data['mapPassword'])?  $_data['mapPassword']: null;

$_file_link = '_towns/id'. sprintf('%010d', $_town_id) .'.json';
$_file = fileRead($_file_link, 'json');

$_write = false;

$_out = [];

if(!is_null($_file))
{
    $_file_password = isset($_file['pass']) && !empty($_file['pass'])? $_file['pass']: null;

    if(!is_null($_file_password) && !is_null($_password))
    {
        $_write = ( $_file_password === $_password );
    }
}
else
{
    if(is_null($_file_password) && !is_null($_password))
    {
        $_write = true;
        $_out['town'] = $_town_id;
    }
}

if(true === $_write)
{
    if(!is_null($_password))
    {
        $_town['pass'] = $_password;
    }
    fileWrite($_file_link, $_town, 'json');
    $_out['success'] = 'success';
}
else
{
    $_out['error'] = 'error';
}

if(count($_out)) {
    echo json_encode($_out);
}