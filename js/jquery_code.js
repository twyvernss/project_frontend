
$(document).ready(function(){

    function supportBtn() {
        if($(window).scrollTop() > 500) {
            $('.support p').hide(100);
            $('.support').css({
                'padding': '1rem 1.1rem'
            });
            $('.support i').css({'font-size': '1.5rem'});
        }
        else {
            $('.support p').show(100);
            $('.support').css({
                'padding': '0.8rem 1.2rem'
            });
            $('.support i').css({'font-size': '1.2rem'});
        }
    }
    $(window).scroll(supportBtn);
    supportBtn();
});