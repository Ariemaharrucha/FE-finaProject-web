document.addEventListener("DOMContentLoaded", function () {
  const inputNopenduduk = document.getElementById("noPenduduk");
  const inputName = document.getElementById("name");
  const inputNik = document.getElementById("nik");
  const inputGender = document.getElementById("gender");
  const inputTempatLahir = document.getElementById("tempat");
  const inputTanggalLahir = document.getElementById("tanggal");
  const inputAgama = document.getElementById("agama");
  const inputPekerjaan = document.getElementById("pekerjaan");
  const inputAlamat = document.getElementById("alamat");
  const inputPendidikan = document.getElementById("pendidikan");
  const inputStatus = document.getElementById("status");
  const inputPindah = document.getElementById("alasanpindah");
  const inputTujuan = document.getElementById("alamattujuan");


  // Hanya nomor
  inputNopenduduk.addEventListener("input", function () {
    const noPendudukArea = document.getElementById("noPendudukArea");
    noPendudukArea.innerText = inputNopenduduk.value;
  });

  // Hanya nomor
  inputNik.addEventListener("input", function () {
    const nikArea = document.getElementById("nikArea");
    nikArea.innerText = inputNik.value;
  });

  // Nama
  inputName.addEventListener("input", function () {
    const nameArea = document.getElementById("nameArea");
    nameArea.innerText = inputName.value;
  });

  // Jenis kelamin
  inputGender.addEventListener("input", function () {
    const genderArea = document.getElementById("genderArea");
    genderArea.innerText = inputGender.value;
  });

  // Alamat
  inputAlamat.addEventListener("input", function () {
    const alamatArea = document.getElementById("alamatArea");
    alamatArea.innerText = inputAlamat.value;
  });

  // Pendidikan
  inputPendidikan.addEventListener("change", function () {
    const riwayatpendidikanArea = document.getElementById(
      "riwayatpendidikanArea"
    );
    riwayatpendidikanArea.innerText = inputPendidikan.value;
  });

  // Pekerjaan
  inputPekerjaan.addEventListener("input", function () {
    const pekerjaanArea = document.getElementById("pekerjaanArea");
    pekerjaanArea.innerText = inputPekerjaan.value;
  });

  //   status
  inputStatus.addEventListener("input", function () {
    const statusArea = document.getElementById("statusArea");
    statusArea.innerText = inputStatus.value;
  });

  // Agama
  inputAgama.addEventListener("input", function () {
    const agamaArea = document.getElementById("agamaArea");
    agamaArea.innerText = inputAgama.value;
  });

  // Tempat lahir
  inputTempatLahir.addEventListener("input", function () {
    const tempatArea = document.getElementById("tempatArea");
    tempatArea.innerText = inputTempatLahir.value;
  });

  //   tanggal lahir
  inputTanggalLahir.addEventListener("blur", function () {
    const dateArea = document.getElementById("dateArea");
    dateArea.innerText = inputTanggalLahir.value;
  });

//   alasan pindah
inputPindah.addEventListener("input", function () {
    const alasanpindahArea = document.getElementById("alasanpindahArea");
    alasanpindahArea.innerText = inputPindah.value;
  });

  //   alasan pindah
inputTujuan.addEventListener("input", function () {
    const alamattujuanArea = document.getElementById("alamattujuanArea");
    alamattujuanArea.innerText = inputTujuan.value;
  });

});
