document.getElementById("btnMulai").addEventListener("click", function () {
    let angka = document.getElementById("angka").value;

    if (angka === "") {
        alert("Angka tidak bisa kosong!");
        return;
    }

    let array = angka.split(",").map(Number);

    let min = Math.min(...array);
    let max = Math.max(...array);
    let total = array.reduce((a,b) => a+b, 0);
    let rata = total / array.length;
    
    alert("Minimum: " + min + "\nMaksimum: " + max + "\nRata-Rata : " + rata.toFixed(2));
});