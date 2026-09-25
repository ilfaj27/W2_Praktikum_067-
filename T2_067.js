document.getElementById("btnMulai").addEventListener("click", function () {
    let angka = document.getElementById("angka").value;

    if (angka === "") {
        alert("Angka tidak bisa kosong!");
        return;
    }

    if (angka > 100 ) {
        alert('Tidak valid!');
        return;
    }

    angka = parseFloat(angka);
    let hasil = "";

    for(let i = 1; i <= angka; i++){
        if (i % 3 === 0){
            hasil += "MI, ";
        }
        else if (i % 5 === 0){
            hasil += "2A, ";
        }
        else if (i % 15 === 0){
            hasil += "MI2A, ";
        }
        else 
            hasil += i + ", ";
    }

    alert("Hasil: " + hasil);
});