<?php
include("connection.php");

$id = $_GET["id"];

try {
    mysqli_query($connection, "DELETE FROM pegawai WHERE id = $id");
    header("Location: list.php");
} catch(Exception $e) {
    echo "Gagal Hapus Data : " . $e->getMessage();
}






