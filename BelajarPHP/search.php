<?php 

include("connection.php");

$keyword = $_GET["keyword"];
$query = mysqli_query($connection, "SELECT * FROM pegawai WHERE nama LIKE '%$keyword%' OR alamat like '%$keyword%'");
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);
?>
<html>
<body>
    <h1>List </h1>

    <form method="GET" action="search.php">
        <input type="text" name="keyword" placeholder="Cari Disini"/>
        <button type="submit">Cari</button>
    </form>

    <a href="add.php">Tambah Data</a>
    <br/><br/>
    <table border="1">
        <thread>
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Jenis Kelamin</th>
            <th>Alamat</th>
            <th>   </th>
        </tr>
        </thread>
        <?php foreach($result as $index => $pegawai) : ?>
            <tr>
            <td><?php echo $index +1 ?> </td>
            <td><a href="profile.php?id=<?=$pegawai["id"]?>"><?= $pegawai["nama"] ?> </td>
            <td><?=$pegawai["jenis_kelamin"] ?> </td>
            <td><?=$pegawai["alamat"] ?> </td>
            <td><a href="edit.php?id=<?=$pegawai["id"]?>">Ubah Data</a> |
                <a href ="delete.php?id=<?=$pegawai["id"]?>">Hapus Data</a></td>
            </tr>
        <?php endforeach ?>
    </table>
</body>
</html>



