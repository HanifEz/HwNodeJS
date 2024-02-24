// soal1.js

// Import module geometry.js
const geometry = require('./geometry');

// Contoh penggunaan untuk menghitung luas dan keliling persegi
const sisiPersegi = 5;
console.log(`Luas persegi dengan sisi ${sisiPersegi} adalah: ${geometry.hitungLuasPersegi(sisiPersegi)}`);
console.log(`Keliling persegi dengan sisi ${sisiPersegi} adalah: ${geometry.hitungKelilingPersegi(sisiPersegi)}`);

// Contoh penggunaan untuk menghitung luas dan keliling persegi panjang
const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 8;
console.log(`Luas persegi panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang} adalah: ${geometry.hitungLuasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
console.log(`Keliling persegi panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang} adalah: ${geometry.hitungKelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
