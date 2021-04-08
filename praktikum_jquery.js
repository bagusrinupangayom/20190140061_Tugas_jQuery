/**
 * Bagus Rinu Pangayom
 * 2019014061
 * C
 */


/**
    * Kode vanilla javascript(Javascript murni) untuk menambahkan value
    * Pada elemen HTML
*/

document.getElementById('nama').innerHTML = 'Bagus Rinu Pangayom';

/**  
    * Kode jQuery untuk menambahkan value
    * pada elemen HTML
*/

$('#nim').html('20190140061');

/**  
    *jQuery menggunakan selector sama seperti CSS 
    * . Untuk class
    * # untuk id
    * kita dapat menuliskan tag html bila ingin memilih berdasarkan tag
    * misal: <button></button>. maka tinggal tulis button
    * dalam kode berikut, kita menampilkan console.log saat document ready
*/

$(function(){
    console.log("Hello");
});

// Kode jQuery untuk menyembunyikan elemen
$("#hide").on("click", function(){
    $("#nama").hide();
});

// Kode untuk mengembalkan elemetn
$("#show").on("click", function(){
    $("#nama").show();
});

$("#toggle").on("click", function(){
    $("#nama").toggle();
});

// Kode jQuery untuk fade in elemen HTML
$("#fadeIn").on("click", function(){
    $("#tanggal").fadeIn();
});

// Kode jQuery untuk fade out elemen HTML
$("#fadeOut").on("click", function(){
    $("#tanggal").fadeOut();
});

// Toggle
$("#fadeToggle").on("click", function(){
    $("#tanggal").fadeToggle();
});

//Kode jQuery untuk slide up elemen HTML
$("#slideUp").on("click", function(){
    $("#img").slideUp();
});

// Kode jQuery untuk slide down elemen HTML
$("#slideDown").on("click", function(){
    $("#img").slideDown();
});

// Toggle
$("#slideToggle").on("click", function(){
    $("#img").slideToggle();
});


