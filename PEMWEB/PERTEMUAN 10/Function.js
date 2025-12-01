// Function Declaration 
function luasPersegi(sisi) {
    return sisi * sisi;
}
console.log(luasPersegi(4));


// Function Expression
const greet = function(nama) {
    console.log("Halo, " + nama + "!");
}
greet("Apit");


// Arrow Function
const jumlah = (a, b) => a + b;
console.log(jumlah(5, 7));

// Default Parameter & Rest Parameter
function salam(nama = "Mahasiswa") {
    console.log("Halo " + nama);
}

function jumlahSemua(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}

salam();
console.log(jumlahSemua(1, 2, 3, 4, 5));

// Object Literal
let mahasiswa = {
    nama: "Apit",
    nim: "0110125085",
    jurusan: "Sistem informasi",
    tampilkanData() {
        console.log(this.nama, this.nim, this.jurusan);
    }
};
mahasiswa.tampilkanData();

// new Object()
let mobil = new Object();
mobil.brand = "Toyota";
mobil.tahun = 2020;
mobil.warna = "Hitam";

// Modifikasi Object
mobil.warna = "Merah";
mobil.mesin = "1500cc";
