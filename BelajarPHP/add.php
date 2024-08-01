<html>
    <body>
    <h1>Tambah Data</h1>    

    <form method="POST" action="insert.php">
        <label>Nama</label> <br/>
        <input type="text" name="nama"/>
        <br/><br/>

        <label>Jenis Kelamin</label> <br/>
        <select name="jenis_kelamin" >
            <option value="Laki-Laki">Laki-Laki</option>
            <option value="Perempuan">Perempuan</option>
        </select>
        <br/><br/>
        
        <label>Alamat</label> <br/>
        <textarea name="alamat"></textarea>
        <br/><br/>

        <label>Tempat Lahir</label> <br/>
        <input type="text" name="tempat_lahir"/>
        <br/><br/>
        
        <label>Tanggal Lahir</label> <br/>
        <input type="date" name="tanggal_lahir"/>
        <br/><br/>

        <label>Nomor Seluler</label> <br/>
        <input type="text" name="nomor_seluler"/>
        <br/><br/>

        <label>Status Perkawina</label> <br/>
        <select name="status_perkawinan" >
            <option value="Kawin">Kawin</option>
            <option value="Belum Kawin">Belum Kawin</option>
        </select>
        <br/><br/>

        <button type="submit">Tambah Data</button>
        <a href="list.php">Kembali</a>
    </form>

    </body>
</html>