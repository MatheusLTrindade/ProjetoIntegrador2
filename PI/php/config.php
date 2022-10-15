<?php

    $dbHost = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
try{
    $conexao = new PDO("mysql: host=$dbHost,dbname=pi",$dbUsername,$dbPassword);

    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "CONEXÃO EFETUADA COM SUCESSO!";
}catch(PDOException $e){
        echo "ERRO!" . $e->getMessage();
}
    
?>