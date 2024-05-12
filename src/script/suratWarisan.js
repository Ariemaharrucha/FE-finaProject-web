document.addEventListener("DOMContentLoaded", function () {
  // ahli waris
  const inputNameahliwaris = document.getElementById("nameahliwaris");
  const inputGenderahliwaris = document.getElementById("genderahliwaris");
  const inputAgamaahliwaris = document.getElementById("agamaahliwaris");
  const inputTempat = document.getElementById("tempat");
  const inputTanggal = document.getElementById("tanggal");
  const inputPekerjaanahliwaris = document.getElementById("pekerjaanahliwaris");
  const inputAlamatahliwaris = document.getElementById("alamatahliwaris");

  // ahli pewaris
  const inputNamepewaris = document.getElementById("namepewaris");
  const inputGenderpewaris = document.getElementById("genderpewaris");
  const inputAgamapewaris = document.getElementById("agamapewaris");
  const inputTempatwaris = document.getElementById("tempatwaris");
  const inputTanggalwaris = document.getElementById("datewaris");
  const inputPekerjaanpewaris = document.getElementById("pekerjaanpewaris");
  const inputAlamatpewaris = document.getElementById("alamatpewaris");

  // ahli waris
  inputNameahliwaris.addEventListener("input", function () {
    const nameahliwarisArea = document.getElementById("nameahliwarisArea");
    nameahliwarisArea.innerText = inputNameahliwaris.value;
  });
  inputGenderahliwaris.addEventListener("input", function () {
    const genderahliwarisArea = document.getElementById("genderahliwarisArea");
    genderahliwarisArea.innerText = inputGenderahliwaris.value;
  });
  inputAgamaahliwaris.addEventListener("input", function () {
    const agamaahliwarisArea = document.getElementById("agamaahliwarisArea");
    agamaahliwarisArea.innerText = inputAgamaahliwaris.value;
  });

  inputTempat.addEventListener("input", function () {
    const tempatArea = document.getElementById("tempatArea");
    tempatArea.innerText = inputTempat.value;
  });

  inputTanggal.addEventListener("blur", function () {
    const dateArea = document.getElementById("dateArea");
    dateArea.innerText = inputTanggal.value;
  });
  inputPekerjaanahliwaris.addEventListener("input", function () {
    const pekerjaanahliwarisArea = document.getElementById("pekerjaanahliwarisArea");
    pekerjaanahliwarisArea.innerText = inputPekerjaanahliwaris.value;
  });
  inputAlamatahliwaris.addEventListener("input", function () {
    const alamatahliwarisArea = document.getElementById("alamatahliwarisArea");
    alamatahliwarisArea.innerText = inputAlamatahliwaris.value;
  });

  // ahli pewaris
  inputNamepewaris.addEventListener("input", function () {
    const namepewarisArea = document.getElementById("namepewarisArea");
    namepewarisArea.innerText = inputNamepewaris.value;
  });
  inputGenderpewaris.addEventListener("input", function () {
    const genderpewarisArea = document.getElementById("genderpewarisArea");
    genderpewarisArea.innerText = inputGenderpewaris.value;
  });
  inputAgamapewaris.addEventListener("input", function () {
    const agamapewarisArea = document.getElementById("agamapewarisArea");
    agamapewarisArea.innerText = inputAgamapewaris.value;
  });

  // ahli pewaris
inputTempatwaris.addEventListener("input", function () {
  const tempatwarisArea = document.getElementById("tempatpewarisArea");
  tempatwarisArea.innerText = inputTempatwaris.value;
});

inputTanggalwaris.addEventListener("input", function () {
  const datewarisArea = document.getElementById("datepewarisArea");
  datewarisArea.innerText = inputTanggalwaris.value;
});

  inputPekerjaanpewaris.addEventListener("input", function () {
    const pekerjaanpewarisArea = document.getElementById("pekerjaanpewarisArea");
    pekerjaanpewarisArea.innerText = inputPekerjaanpewaris.value;
  });
  inputAlamatpewaris.addEventListener("input", function () {
    const alamatpewarisArea = document.getElementById("alamatpewarisArea");
    alamatpewarisArea.innerText = inputAlamatpewaris.value;
  });
});
