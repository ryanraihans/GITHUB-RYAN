<?php

try {
    $connection = mysqli_connect("localhost", "root", "", "kepegawaian");
    
} catch (Exception $e) {
    echo "gagal", $e->getMassage();
}
