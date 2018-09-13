<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header("Content-type: charset=utf-8");

function getStringBetween($start = "",$end = "", $string) {
	$temp = strpos($string, $start) + strlen($start);
	$result = substr($string, $temp, strlen($string));
	$dd = strpos($result, $end);
	if($dd == 0){
	$dd = strlen($result);
	}
	return substr($result, 0 ,$dd);
}

//Procesa Google Translate
function traductor( $url ) {
	//Procesamos la URL
	$contenido = file_get_contents( $url );
//echo $contenido;

/*$cabeceras = get_headers ($url);
$longitud = count($cabeceras);

for($i=0; $i<$longitud; $i++){
		echo "***$i***";
		echo $cabeceras[$i];
}
*/
	$response = getStringBetween("onmouseout=\"this.style.backgroundColor='#fff'\">", "</span></div>", strval($contenido));
	//Procesamos la respuesta
	//$contenido = preg_replace( '/,,,|,,/', ',"0",', $contenido );
	//$contenido = json_decode( $contenido );
	$response = substr($response, 0, strlen($respnse)-7);
echo (utf8_encode($response));
//echo json_encode($response);	
	return trim( $contenido[0][0][0] );
}
//Traduce las descripciones a otros idiomas
function traduce( $descripcion ) {
	//Codificamos la descripción para que Google la entienda
//echo("$descripcion = ");
	$descripcion = urlencode( $descripcion );

	//Traducimos de Español a inglés
	//$url = "https://translate.google.es/translate_a/single?client=t&amp;sl=es&amp;tl=en&amp;hl=es&amp;dt=bd&amp;dt=ex&amp;dt=ld&amp;dt=md&amp;dt=qca&amp;dt=rw&amp;dt=rm&amp;dt=ss&amp;dt=t&amp;dt=at&amp;ie=UTF-8&amp;oe=UTF-8&amp;srcrom=0&amp;ssel=3&amp;tsel=6&amp;tk=519297|902558&amp;q=$descripcion";
	$url = "https://translate.google.com/?&sl=en&tl=es&js=n&prev=_t&hl=en&ie=UTF-8&text=$descripcion&file=&edit-text=";
	$ingles = traductor( $url );

	
}
traduce($_GET['texto']);
?>
