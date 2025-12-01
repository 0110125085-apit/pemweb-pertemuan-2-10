// Object Literal
let mahasiswa = {
    nama: "Rafidh",
    nim: "0110125085",
    jurusan: "Sistem Informasi",
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