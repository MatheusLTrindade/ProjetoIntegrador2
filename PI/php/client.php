<?php

    $dbUsername = 'root';
    $dbPassword = '';
    
try{
    $conexao = new PDO('mysql:host=localhost;port=3306;dbname=pi',$dbUsername,$dbPassword);

    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "CONEXÃO EFETUADA COM SUCESSO!";
}catch(PDOException $e){
        echo "ERRO!" . $e->getMessage();
}

if(isset($_POST['submit'])){

    $cpf = $_POST['cpf'];
    $name = $_POST['name'];
    $birthDate = $_POST['birth-date'];
    $gender = $_POST['gender'];
    $cep = $_POST['cep'];
    $address = $_POST['address'];
    $district = $_POST['district'];
    $numberAddress = $_POST['number-address'];
    $complement = $_POST['complement'];
    $state = $_POST['state'];
    $city = $_POST['city'];
    $cell = $_POST['cell'];
    $email = $_POST['email'];
    $password = $_POST['password'];


    $result = "INSERT INTO clients(CPF,NomeCompleto,DataNascimento,Genero,CEP,Endereco,Bairro,Numero,Complemento,Estado,Cidade,Celular,Email,Senha) 
    VALUES('$cpf','$name','$birthDate','$gender','$cep','$address','$district','$numberAddress','$complement','$state','$city','$cell','$email','$password');";
try{
    if($conexao->query($result)){     
        // echo "sucesso";
        header("Location: ../home.html");
    }
    } catch(PDOException $e){
        // echo "ERRO" . $result . "<br>" . $conexao->error;
        header("Location: ../Cadastro.html");
    }

    $conexao = null;
}
?>