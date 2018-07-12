<?php

require __DIR__.'/cmsif.php';
init();

/**/
//Simple route to include module file
router('get', '/about', CMSIF_MODULES.'/about.php');

//Simple HTML page
router('get', '/main', function(){

	headerHTML();

    echo 'User: ', getUser(), '<br />'.EOL;
	echo date_default_timezone_get(), '<br />'.EOL;
	echo cookie('language'), '<br />'.EOL;
	echo version(), '<br />'.EOL;
	echo getId(), '<br />'.EOL;
	echo getModule(), '<br />'.EOL;
	echo getMethod(), '<br />'.EOL;

});

//Routing with IDs
router('get', '/article/([0-9]*)', function($_matches){
	$_out = '';
	switch( $_matches[1] )
	{
		case 1:
			$_out .= '<h3>Article '. (int) $_matches[1].'</h3>'.EOL;
			$_out .= view('This is my article number 1');
			break;
		case 2:
			$_out .= '<h3>Article '. (int) $_matches[1].'</h3>'.EOL;
			$_out .= view( ['This is my second article.', 'This is my second paragraph.'] );
			break;
		default:
			error404();
			break;
	}
	
	if(!empty($_out))
	{
		headerHTML();
		echo $_out;
	}
});

//Rendering of Form template with external and internal assets
router('get', '/', function(){
	assetExternal('http://necolas.github.com/normalize.css');
	assetExternal('//fonts.googleapis.com/css?family=Roboto', 'css');
	asset('style.css');

	$_form_fields = [
		'text'     => '{"name": "username", "id": "Username"}',
		'password' => '{"name": "password", "id": "Password"}',
		'submit'   => '{"name": "submit", "id": "Submit"}'
	];
	form(['method'=>'POST', 'action'=>getHost().'/form', 'fields'=>$_form_fields]);
	renderHTML('form');
});

//POST action proccessing
router('post', '/', function(){ 
	dump(filterPOST());
});

error404();