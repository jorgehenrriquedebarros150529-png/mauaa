$(document).ready(function() {
    
    $('#menux').hide();

    $('#menu, #menux').click(function() {
        $('#menu-principal').slideToggle();
        $('#menu').toggle();
        $('#menux').toggle();
    });

    // Fecha menu ao clicar no link no mobile
    $('#menu-principal a').click(function() {
        if ($(window).width() <= 768) {
            $('#menu-principal').slideUp();
            $('#menux').hide();
            $('#menu').show();
        }
    });

});
$(document).on('click', function(e) {
    if ($(window).width() <= 768 && 
        !$(e.target).closest('#nav-principal').length && 
        $('#menu-principal').is(':visible')) {
        
        $('#menu-principal').slideUp(300);
        $('#menux').hide();
        $('#menu').show();
        $('body').removeClass('menu-aberto');
    }
});
