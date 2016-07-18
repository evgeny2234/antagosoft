<?php
	$json = file_get_contents('../json/mail_source.json');
	// Декодируем
	$json = json_decode($json, true);
	// Добавляем элемент
	$json[] = $_POST['param1'];
	$json[] = $_POST['param2'];
	// Превращаем опять в JSON
	$json = json_encode($json);
	// Перезаписываем файл
	file_put_contents('../json/mail_source.json', $json);
?>