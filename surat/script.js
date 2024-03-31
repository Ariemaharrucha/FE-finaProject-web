    window.jsPDF = window.jspdf.jsPDF;


    document.addEventListener('DOMContentLoaded',function(){
        const inputName = document.getElementById('name');
        const inputNik = document.getElementById('nik');
        const inputGender = document.getElementById('gender');
        const inputTempatLahir = document.getElementById('tempat');
        const inputTanggalLahir = document.getElementById('tanggal');
        const inputAgama = document.getElementById('agama');
        const inputPekerjaan = document.getElementById('pekerjaan');
        const inputAlamat = document.getElementById('alamat');

        const downloadPDF = document.getElementById('downloadPdf');

        inputName.addEventListener('input',function(){
            const nameArea = document.getElementById('nameArea');
            nameArea.innerText = inputName.value;
        })

        //hanya nomer
        inputNik.addEventListener('input',function(){
            const nikArea = document.getElementById('nikArea');
            nikArea.innerText = inputNik.value;
        })

        inputGender.addEventListener('input',function () {
            const genderArea = document.getElementById('genderArea');
            genderArea.innerText = inputGender.value;
        })

        inputTempatLahir.addEventListener('input',function(){
            const lahirArea = document.getElementById('lahirArea');
            lahirArea.innerText = inputTempatLahir.value;
        })

        inputTanggalLahir.addEventListener('blur',function(){
            const dateArea = document.getElementById('dateArea');
            dateArea.innerText = inputTanggalLahir.value;
        })

        inputAgama.addEventListener('input',function(){
            const agamaArea = document.getElementById('agamaArea');
            agamaArea.innerText = inputAgama.value;
        })

        inputPekerjaan.addEventListener('input',function(){
            const pekerjaanArea = document.getElementById('pekerjaanArea');
            pekerjaanArea.innerText = inputPekerjaan.value;
        })

        inputAlamat.addEventListener('input',function(){
            const alamatArea = document.getElementById('alamatArea');
            alamatArea.innerText = inputAlamat.value;
        })

        downloadPDF.addEventListener('click',function(){

            const suratElement = document.getElementById('surat');

            const doc = new jsPDF();

            doc.setFontSize(12);
            doc.text(20,20, "Surat Keterangan Tidak Mampu");

            let startY = 30;

            suratElement.querySelectorAll('p,h1,h5,table').forEach(element => {
                startY = addElementToPdf(doc,element,startY);
            })

            doc.save("Surat Keterangan Tidak Mampu");

        })

    })

    function addElementToPdf(doc, element, startY) {
        if(element.tagName.toLowerCase() === 'table') {
            startY = addTableToPDF(doc,element,startY);
        } else {
            // Tangani elemen lainnya seperti paragraf, judul, dan lainnya
            startY = addNormalElementToPDF(doc, element, startY);
        }
        return startY;
    }

    function addNormalElementToPDF(doc, element, startY) {
        // Ambil konten teks dari elemen
        const content = element.innerText.trim();
        
        // Cek apakah konten teks tidak kosong
        if (content !== "") {
            // Tambahkan konten ke PDF
            doc.text(20, startY, content);
            // Hitung tinggi elemen
            const height = doc.getTextDimensions(content).h / doc.internal.scaleFactor;
            // Hitung tinggi elemen dan tambahkan margin
            startY += height + 5;
        }
        return startY;
    }

    function addTableToPDF(doc, table, startY) {
        // Ambil seluruh baris dalam tabel
        const rows = table.querySelectorAll('tr');
        // Iterasi melalui setiap baris tabel
        rows.forEach(row => {
            // Ambil seluruh sel dalam baris
            const cells = row.querySelectorAll('td');
            let startX = 20;
            // Iterasi melalui setiap sel dalam baris
            cells.forEach(cell => {
                // Ambil konten teks dari sel
                const content = cell.innerText.trim();
                // Cek apakah konten teks tidak kosong
                if (content !== "") {
                    // Tambahkan konten ke PDF
                    doc.text(startX, startY, content);
                    // Hitung lebar sel dan tambahkan margin
                    startX += cell.offsetWidth / doc.internal.scaleFactor + 5;
                }
            });
            // Reset posisi X dan tinggi baris
            startX = 20;
            startY += row.offsetHeight / doc.internal.scaleFactor + 5;
        });
        return startY;
    }