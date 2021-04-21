$(window).on('load',function(){
    var zIndex = $('.menu-mobile');

    $('#cliqueMenu').click(function(){
        $('.menu-mobile').find('ul li').slideToggle(160);
    });
});