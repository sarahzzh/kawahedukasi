function validation(){
    var validasiHuruf = /^[a-zA-Z ]+$/;
    var nama = document.getElementById("nama");
    if (nama.value.match(validasiHuruf)) {
       alert("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo " + nama.value + "selamat datang!");
    } else {
       alert("Sistem kami menolak untuk inputan berisi angka");
       nama.value="";
       nama.focus();
       return false;
    }
  }

  console.log(nama.value ("hallo jesika24 selamat datang!"))
  console.log(nama.value ("hallo anggun selamat datang!"))
  console.log(nama.value ("hallo ** selamat datang!"))
  console.log(nama.value ("hallo Mariage889120! selamat datang!"))