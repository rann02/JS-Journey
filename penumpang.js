var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
// jika angkot kosong
if( penumpang.length == 0 ) { 
    // tambah penumpang di awal ARRAY
    penumpang.push(namaPenumpang);
    // kembalikan isi ARRAY dan keluar dari function
    return penumpang;
}
else {
    // telusuri seluh kursi dari awal
    for( var i = 0; i < penumpang.length; i++ ) {
        // jika ada kursi kosong
        if( penumpang[i] == undefined ) {
            // tambah penumpang di kursi tersebut
            penumpang[i] = namaPenumpang;
            // kembalimkan isi ARRAY dan keluar dari function
            return penumpang;
        }
        // jika sudah ada nama yang sama
        else if( penumpang[i] == namaPenumpang ) {
            // tampilkan pesan kesalahannya
            console.log(namaPenumpang + ' sudah ada di dalam angkot. ');
            // kembalimkan isi ARRAY dan keluar dari function
            return penumpang;
        }
        // jika seluruh kursi terisi
        else if( i == penumpang.length - 1 ) {
            // tambah penumpang di akhir ARRAY
            penumpang.push(namaPenumpang);
            // kembalimkan isi ARRAY dan keluar dari function
            return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if( penumpang.length == 0 ) {
        // tampilkan pesan bahwa angkot kosong, dan
        console.log( 'Angkot masih kosong' );
        // tidak mungkin ada penumpang turun
    } else {
        // telusuri seluruh kursi dari awal
        for( var i = 0; i < penumpang.length; i++ ) {
            // jika nama penumpang sesuai
            if( penumpang[i] == namaPenumpang ) {
                // hapus penumpang dengan mengubah namanya,
                // menjadi undifined
                penumpang[i] = undefined;
                return penumpang;
            // jika tidak ada nama yang sesuai
            } else if( i == penumpang.length - 1 ) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + 'tidak ada di dalam angkot');
                return penumpang;
            }
        }
            
    }
}