<?php 

require '../../config.php';

$cidades = new app\models\Cidade;

$cidadesEncontradas = $cidades->find('estado', $_GET['id']);

echo json_encode($cidadesEncontradas);

?>