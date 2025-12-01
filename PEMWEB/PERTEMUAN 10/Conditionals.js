// If-Else Sederhana
let nilai = 85;

if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 80) {
    console.log("B");
} else if (nilai >= 70) {
    console.log("C");
} else if (nilai >= 60) {
    console.log("D");
} else {
    console.log("E");
}


// Switch Case
let hari = 3;
switch (hari) {
    case 1: console.log("Senin"); break;
    case 2: console.log("Selasa"); break;
    case 3: console.log("Rabu"); break;
    case 4: console.log("Kamis"); break;
    case 5: console.log("Jumat"); break;
    case 6: console.log("Sabtu"); break;
    case 7: console.log("Minggu"); break;
    default: console.log("Input tidak dikenal");
}

// Ternary Operator
let usia = 17;
let status = usia >= 17 ? "boleh buat ktp" : "belum boleh buat ktp";
console.log(status);