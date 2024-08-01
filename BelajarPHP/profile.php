<?php 
include("connection.php");

$id = $_GET["id"];
$query = mysqli_query($connection , "SELECT * FROM pegawai WHERE id =$id");

$pegawai = mysqli_fetch_assoc($query);
?>

<html>
    <body>
    <h3><?=$pegawai["nama"]?></h3>

    <a href="list.php">Kembali</a><br/><br/>

    <label>Jenis Kelamin : </label>
    <label><?=$pegawai["jenis_kelamin"]?></label>
    <br/>

    <label>Alamat : </label>
    <label><?=$pegawai["alamat"]?></label>
    <br/>

    <label>Tempat Lahir : </label>
    <label><?=$pegawai["tempat_lahir"]?></label>
    <br/>

    <label>Tanggal Lahir : </label>
    <label><?=date("d M Y", strtotime($pegawai["tanggal_lahir"]))?></label>
    <br/>

    <label>Nomor Seluler : </label>
    <label><?=$pegawai["nomor_seluler"]?></label>
    <br/>

    
    <label>status_perkawinan : </label>
    <label><?=$pegawai["status_perkawinan"]?></label>
    <br/>
    </body>
</html>

