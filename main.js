var question = true;
while(question) {
    //menangkap pilihan player
    var player = prompt('pilih : batu, gunting, kertas')
    // menangkap pilihan komputer
    // membangkitkan bilangan random
    var comp = Math.random();
    console.log(comp);
    
    if(comp < 0.34){
        comp='batu';
    } else if(comp >= 0.34 && comp < 0.666) {
        comp='gunting';
    } else {
        comp = 'kertas';
    }
    // menentukan rules
    if(player == comp){
        hasil = 'SERI !!!'
    } else if(player == 'batu') {
        hasil = (comp == 'gunting')? 'MENANG !!!':'KALAH !!!';
    } else if(player == 'gunting') {
        hasil = (comp == 'kertas')? 'MENANG !!!':'KALAH !!!';
    } else if(player == 'kertas') {
        hasil = (comp == 'batu')? 'MENANG !!!':'KALAH !!!';
    } else {
        hasil = 'pilihamu tidak ada didalam daftar'
    }
    // menampilkan hasil
    alert('kamu memilih : '+ player + ' komputer memilih : ' + comp + '\nHasil :' + hasil);
    question = confirm('ingin bermain lagi ?')
}
alert('thanks for playing.')