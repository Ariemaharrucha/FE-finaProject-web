document.addEventListener("DOMContentLoaded", function () {
  const inputName = document.getElementById("name");
  const inputNik = document.getElementById("nik");
  const inputGender = document.getElementById("gender");
  const inputTempatLahir = document.getElementById("tempat");
  const inputTanggalLahir = document.getElementById("tanggal");
  const inputAgama = document.getElementById("agama");
  const inputPekerjaan = document.getElementById("pekerjaan");
  const inputAlamat = document.getElementById("alamat");
  const inputwaktumeninggal = document.getElementById("waktumeninggal");
  const inputalamatmeninggal = document.getElementById("alamatmeninggal");
  const inputalasanmeninggal = document.getElementById("alasanmeninggal");
  const inputtglmeninggal = document.getElementById("tglmeninggal");
  const inputharimeninggal = document.getElementById("harimeninggal");


  inputName.addEventListener("input", function () {
    const nameArea = document.getElementById("nameArea");
    nameArea.innerText = inputName.value;
  });

  //hanya nomer
  inputNik.addEventListener("input", function () {
    const nikArea = document.getElementById("nikArea");
    nikArea.innerText = inputNik.value;
  });

  inputGender.addEventListener("input", function () {
    const genderArea = document.getElementById("genderArea");
    genderArea.innerText = inputGender.value;
  });

  inputTempatLahir.addEventListener("input", function () {
    const lahirArea = document.getElementById("lahirArea");
    lahirArea.innerText = inputTempatLahir.value;
  });

  inputTanggalLahir.addEventListener("blur", function () {
    const dateArea = document.getElementById("dateArea");
    dateArea.innerText = inputTanggalLahir.value;
  });

  inputAgama.addEventListener("input", function () {
    const agamaArea = document.getElementById("agamaArea");
    agamaArea.innerText = inputAgama.value;
  });

  inputPekerjaan.addEventListener("input", function () {
    const pekerjaanArea = document.getElementById("pekerjaanArea");
    pekerjaanArea.innerText = inputPekerjaan.value;
  });

  inputAlamat.addEventListener("input", function () {
    const alamatArea = document.getElementById("alamatArea");
    alamatArea.innerText = inputAlamat.value;
  });

  //   hari meninggal
  inputharimeninggal.addEventListener("input", function () {
    const inputtglmeninggalArea = document.getElementById("harimeninggalArea");
    inputtglmeninggalArea.innerText = inputharimeninggal.value;
  });

//   tanggal meningal
  inputtglmeninggal.addEventListener("blur",function () {
    const tglMeninggalArea = document.getElementById('tglmeninggallArea');
    tglMeninggalArea.textContent = inputtglmeninggal.value
  })

  // waktu meninggal
  inputwaktumeninggal.addEventListener("input", function () {
    const inputwaktumeninggalArea = document.getElementById("waktuArea");
    inputwaktumeninggalArea.innerText = `${inputwaktumeninggal.value} WIB`;
  });

  // lokasi meninggal
  inputalamatmeninggal.addEventListener("input", function () {
    const inputalamatmeninggalArea = document.getElementById(
      "lokasimeninggalArea"
    );
    inputalamatmeninggalArea.innerText = alamatmeninggal.value;
  });

  // penyebab kematian
  inputalasanmeninggal.addEventListener("input", function () {
    const inputalasanmeninggalArea = document.getElementById(
      "penyebabKematianArea"
    );
    inputalasanmeninggalArea.innerText = alasanmeninggal.value;
  });
});
