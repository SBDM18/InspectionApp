$(document).ready(function(){

    let navlink = $('.nav-links');
    let navicon = $('.nav-icon');
    let linkname = $('.link-name');

    $(navlink).on('click', function(){
        $(linkname).toggle();
        $(navicon).toggleClass('shrink-icon');
        $(linkname).toggleClass('letter-color-select');
    });

})