<?php

function turkey_exchange_rate($_opt='', $_precise=2)
{
	$res = null;
	$url = 'http://www.tcmb.gov.tr/kurlar/today.xml';
	$xml = @simplexml_load_file($url, 'SimpleXMLElement', LIBXML_NOCDATA);
	
	$_errors = libxml_get_errors();
	
	if(!count($_errors))
	{
		$_count = count($xml->Currency);
		$_currency = [];
		for($i=0;$i<$_count;$i++)
		{
			$_code = (string) $xml->Currency[$i]->attributes()->CurrencyCode;
			$_price = (string) $xml->Currency[$i]->BanknoteBuying;
			$_currency[ $_code ] = $_price;
		}
		
		if(isset($_currency[$_opt]))
		{
			$res = number_format($_currency[$_opt], (int)$_precise, '.', '');
		}
	}

	return $res;
}

//Examples:
//print_r( exchange_rate(['EUR'=>'USD','USD'=>'EUR']) );
function exchange_rate($_opt=[], $_precise=2)
{
	$_pairs = [];
	foreach($_opt as $_k=>$_v)
	{
		$_pairs[] = $_k.'_'.$_v;
	}
	if(!count($_pairs)) return null;
	$_pair = implode(',', $_pairs);
	$_url = 'http://free.currencyconverterapi.com/api/v5/convert?q='.$_pair.'&compact=y';
	
	$a_json = json_decode( file_get_contents($_url), true);
	
	$_res = [];
	foreach($a_json as $_k => $_v)
	{
		$_res[$_k] = number_format($_v['val'], $_precise, '.', '');
	}
	
	return ($_res);
}

function getExchangeRate($_from=null, $_to=null, $_precise=2) 
{
    $_res = null;
    $_pair = $_from.'_'.$_to;
    $_pairs = exchange_rate([ $_from => $_to ], $_precise);
    if(isset($_pairs[$_pair]))
    {
        $_res = $_pairs[$_pair];
    }
    return $_res;
}
