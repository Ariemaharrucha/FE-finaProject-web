document.addEventListener("DOMContentLoaded", function () {
  // anak
  const inputNameanak = document.getElementById("nameanak");
  const inputGenderanak = document.getElementById("genderanak");
  const inputAnake = document.getElementById("anake");
  const inputAgamaanak = document.getElementById("agamaanak");
  // suami
  const inputNamesuami = document.getElementById("namesuami");
  const inputGendersuami = document.getElementById("gendersuami");
  const inputAgamasuami = document.getElementById("agamasuami");
  const inputPekerjaansuami = document.getElementById("pekerjaansuami");
  const inputAlamatsuami = document.getElementById("alamatsuami");
  // suami
  const inputNameisteri = document.getElementById("nameisteri");
  const inputGenderisteri = document.getElementById("genderisteri");
  const inputAgamaisteri = document.getElementById("agamaisteri");
  const inputPekerjaanisteri = document.getElementById("pekerjaanisteri");
  const inputAlamatisteri = document.getElementById("alamatisteri");

  // anak
  inputNameanak.addEventListener("input", function () {
    const nameanakArea = document.getElementById("nameanakArea");
    nameanakArea.innerText = inputNameanak.value;
  });
  inputGenderanak.addEventListener("input", function () {
    const genderanakArea = document.getElementById("genderanakArea");
    genderanakArea.innerText = inputGenderanak.value;
  });
  //hanya nomer
  inputAnake.addEventListener("input", function () {
    const anakeArea = document.getElementById("anakeArea");
    anakeArea.innerText = inputAnake.value;
  });
  inputAgamaanak.addEventListener("input", function () {
    const agamaanakArea = document.getElementById("agamaanakArea");
    agamaanakArea.innerText = inputAgamaanak.value;
  });

  //   suami
  inputNamesuami.addEventListener("input", function () {
    const namesuamiArea = document.getElementById("namesuamiArea");
    namesuamiArea.innerText = inputNamesuami.value;
  });
  inputGendersuami.addEventListener("input", function () {
    const gendersuamiArea = document.getElementById("gendersuamiArea");
    gendersuamiArea.innerText = inputGendersuami.value;
  });
  inputAgamasuami.addEventListener("input", function () {
    const agamasuamiArea = document.getElementById("agamasuamiArea");
    agamasuamiArea.innerText = inputAgamasuami.value;
  });
  inputPekerjaansuami.addEventListener("input", function () {
    const pekerjaansuamiArea = document.getElementById("pekerjaansuamiArea");
    pekerjaansuamiArea.innerText = inputPekerjaansuami.value;
  });
  inputAlamatsuami.addEventListener("input", function () {
    const alamatsuamiArea = document.getElementById("alamatsuamiArea");
    alamatsuamiArea.innerText = inputAlamatsuami.value;
  });

  //   isteri
  inputNameisteri.addEventListener("input", function () {
    const nameisteriArea = document.getElementById("nameisteriArea");
    nameisteriArea.innerText = inputNameisteri.value;
  });
  inputGenderisteri.addEventListener("input", function () {
    const genderisteriArea = document.getElementById("genderisteriArea");
    genderisteriArea.innerText = inputGenderisteri.value;
  });
  inputAgamaisteri.addEventListener("input", function () {
    const agamaisteriArea = document.getElementById("agamaisteriArea");
    agamaisteriArea.innerText = inputAgamaisteri.value;
  });
  inputPekerjaanisteri.addEventListener("input", function () {
    const pekerjaanisteriArea = document.getElementById("pekerjaanisteriArea");
    pekerjaanisteriArea.innerText = inputPekerjaanisteri.value;
  });
  inputAlamatisteri.addEventListener("input", function () {
    const alamatisteriArea = document.getElementById("alamatisteriArea");
    alamatisteriArea.innerText = inputAlamatisteri.value;
  });
});
