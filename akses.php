<?php
$my['host'] = "localhost";
$my['user'] = "root";
$my['pass'] = "";
$my['dbs'] = "phpdasar";

$nama = "Joni";
$nis = "32144153";
$alamat = "Jl. Mawar No. 5";
$tmpt_Lahir = "2000-02-05";
$jekel = "Laki - Laki";

$sql = "INSERT INTO siswa (nama, nis, alamat, tmpt_Lahir , jekel) VALUES (Joni , 32144153 , Jl. Mawar No. 5 , 2000-02-05 , Laki - Laki )";
$stmt= $pdo->prepare($sql);
$stmt->execute([$nama, $nis, $alamat, $tmpt_Lahir, $jekel]);

echo "Data siswa berhasil ditambahkan!";
?>