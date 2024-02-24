// soal2.js

const fs = require('fs');

// Fungsi untuk menulis log ke file
function tulisLog(text) {
    fs.appendFile('log.txt', text + '\n', (err) => {
        if (err) throw err;
        console.log('Log berhasil ditulis ke dalam file.');
    });
}

// Contoh penggunaan fungsi untuk menulis log
tulisLog('Log pertama');
tulisLog('Log kedua');
