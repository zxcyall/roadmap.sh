let judul = document.querySelector('h1');

let nama = localStorage.getItem('nama');
if(!nama){
    nama = prompt('masukan nama anda');
    localStorage.setItem('nama',nama);
}
judul.innerHTML = `halo, ${nama}!`; 

const gantiNama = (e) => {
    nama = prompt('masukan nama baru');
    localStorage.setItem('nama',nama);
    e.preventDefault () ;
}
