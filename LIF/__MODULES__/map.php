<?php

function mapView($_map=[])
{
    $s_out = '';
    if(is_array($_map) && count($_map))
    {
        foreach($_map as $_i=>$_row)
        {
            $s_out .= getRow($_i, $_row);
        }
    }
    return $s_out;
}

function getRow($_i, $_opt=[])
{
    $_out = '';
    if(is_array($_opt) && 41 == count($_opt))
    {
        foreach($_opt as $i=>$_col)
        {
            $_out .= getCol($i, $_col[0], $_col[1]);
        }
    }
    
    if(!empty($_out))
    {
        $_i_symbol = $_i;
        if(0 == $_i)
        {
            $_i_symbol = '<i class="far fa-arrow-alt-circle-down"></i>';
        }
        else if(42 == $_i)
        {
            $_i_symbol = '<i class="far fa-arrow-alt-circle-up"></i>';
        }

        $_left = '    <div class="'. (21==$_i? 'd west_cell': 'e d') .'">'. (21==$_i? 'W': $_i_symbol) .'</div>';
        $_right = '    <div class="'. (21==$_i? 'd east_cell': 'e d') .'">'. (21==$_i? 'E': $_i_symbol) .'</div>';
        $_out = '<div class="row">'. EOL . $_left . EOL . $_out . EOL . $_right .'</div>' . EOL;
    }

    return $_out;
}

function getCol($_i, $_cell=[], $_val='&nbsp;')
{
    $_out = '    <div alt="'. $_i .'" class="'. implode(' ', $_cell).'">'. $_val .'</div>'. EOL;
    return $_out;
}