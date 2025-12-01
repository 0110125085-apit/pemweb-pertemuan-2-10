// Membuat Array
let buah = ["apel", "mangga", "pisang"];
console.log(buah[0]);
console.log(buah.length);


// Menambah Element
buah.push("jeruk");
buah[buah.length] = "anggur";


// Looping Array
for (let i = 0; i < buah.length; i++) {
    console.log(buah[i]);
}


// Array toString
console.log(buah.toString());


// Array Berisi Berbagai Tipe
let campur = ["teks", 123, true, {nama: "Budi"}, [1,2,3]];
console.log(campur[1]);
console.log(campur[3].nama);