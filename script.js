// dihentikan program

// var ulang = true;
// while(ulang) {
//     console.log('Hello World!');
//     ulang = confirm('lagi');
// }


// var nilaiAwal = 1;
// while(nilaiAwal <= 10) {
//     console.log('Hello World! ' + nilaiAwal + 'x');
// nilaiAwal++
// }

// if else

// var angka = prompt('masukan angka:');

// if(angka % 2 == 0) {
//     alert(angka + ' adalah bilangan GENAP');
// } else {
//     alert(angka + ' adalah bilangan GANJIL')
// }

// else if

// var angka = prompt('masukan angka:');

// if(angka % 2 == 0) {
//     alert(angka + ' adalah bilangan GENAP');
// } else if( angka % 2 == 1) {
//     alert(angka + ' adalah bilangan GANJIL')
// } else {
//     alert(angka + ' ini yang anda masukan bukan angka')
// }

// switch

// var angka = prompt('masukan angka :');

// switch(angka) {
//     case '1' :
//         alert('anda memasukan angka 1');
//         break;
//     case '2' :
//         alert('anda memasukan angka 2');
//         break;
//     case '3':
//         alert('anda memasukan angka 3');
//         break;
//     default :
//         alert('angka yang anda masukan salah');
//         break;
// }

// var item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

// switch(item) {
//     case 'nasi':
//         alert('makanan / minuman SEHAT')
//         break;
//     case 'aging':
//         alert('makanan / minuman SEHAT')
//         break;
//     case 'susus':
//         alert('makanan / minuman SEHAT')
//         break;
//     case 'hamburger':
//         alert('makanan / minuman TIDAK SEHAT')
//         break;
//     case 'softdrink':
//         alert('makanan / minuman TIDAK SEHAT')
//         break;
//     default:
//         alert('anda memasukan nama makanan / minuman yang salah')
//         break;
// }

// var item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

// switch(item) {
//     case 'nasi':
//         alert('makanan / minuman SEHAT')
//     case 'daging':
//         alert('makanan / minuman SEHAT')
//         break;
//     case 'susus':
//         alert('makanan / minuman SEHAT')
//         break;
//     case 'hamburger':
//         alert('makanan / minuman TIDAK SEHAT')
//         break;
//     case 'softdrink':
//         alert('makanan / minuman TIDAK SEHAT')
//         break;
//     default:
//         alert('anda memasukan nama makanan / minuman yang salah')
//         break;
// }

var item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch(item) {
    case 'nasi':
    case 'daging':
    case 'susus':
        alert('makanan / minuman SEHAT')
        break;
    case 'hamburger':
    case 'softdrink':
        alert('makanan / minuman TIDAK SEHAT')
        break;
    default:
        alert('anda memasukan nama makanan / minuman yang salah')
        break;
}