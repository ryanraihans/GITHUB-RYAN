<?php 
include("connection.php");

$id = $_GET["id"];
$query = mysqli_query($connection , "SELECT * FROM pegawai WHERE id =$id");
$pegawai = mysqli_fetch_assoc($query);
?>

<html>
    <body>
    <h1>Ubah Data</h1>    

    <form method="POST" action="update.php">

    <input type="hidden" name="id" value="<?=$pegawai["id"]?>"/>
        <label>Nama</label> <br/>
        <input type="text" name="nama" value="<?=$pegawai["nama"]?>"/>
        <br/><br/>

        <label>Jenis Kelamin</label> <br/>
        <select name="jenis_kelamin" >
            <option value="Laki-Laki" <?php if($pegawai["jenis_kelamin"] == "Laki-Laki") echo "selected"?>>Laki-Laki</option>
            <option value="Perempuan" <?php if($pegawai["jenis_kelamin"] == "Perempuan") echo "selected"?>>Perempuan</option>
        </select>
        <br/><br/>
        
        <label>Alamat</label> <br/>
        <textarea name="alamat"><?=$pegawai["alamat"]?></textarea>
        <br/><br/>

        <label>Tempat Lahir</label> <br/>
        <input type="text" name="tempat_lahir" value="<?=$pegawai["tempat_lahir"]?>"/>
        <br/><br/>
        
        <label>Tanggal Lahir</label> <br/>
        <input type="date" name="tanggal_lahir" value="<?=$pegawai["tanggal_lahir"]?>"/>
        <br/><br/>

        <label>Nomor Seluler</label> <br/>
        <input type="text" name="nomor_seluler" value="<?=$pegawai["nomor_seluler"]?> "/>
        <br/><br/>

        <label>Status Perkawina</label> <br/>
        <select name="status_perkawinan" >
            <option value="Kawin" <?php if($pegawai["status_perkawinan"] == "Kawin") echo "selected"?>>Kawin</option>
            <option value="Belum Kawin" <?php if($pegawai["status_perkawinan"] == "Belum Kawin") echo "selected"?>>Belum Kawin</option>
        </select>
        <br/><br/>

        <button type="submit">Ubah Data</button>
        <a href="list.php">Kembali</a>
    </form>

    </body>
</html>

