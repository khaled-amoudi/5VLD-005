
$(document).ready(function () {
    "use strict";




    // change the navbar background when scroll for 90px
    // $(window).scroll(function () {
    //     //console.log($(this).scrollTop());
    //     var scroll = $(this).scrollTop();
    //     if (scroll > 90) {
    //         // $('.scroll_nav').slideDown();
    //         $("nav.navbar").addClass("bg-navbar");
    //     } else {
    //         $("nav.navbar").removeClass("bg-navbar");
    //     }
    // });







    // switch the mode to the website [dark, light]
    switchMode();
    $('#website-mode-switch').click(function () {
        document.body.classList.toggle("dark-mode");
        switchMode();
    });



    // set the default background of nav bar to white instead of transparent
    function switchMode() {
        if ($("body").hasClass("dark-mode")) {
            $("body, .card, textarea").css({ backgroundColor: '#1a1818' });
            $(".bg-navbar").css({ backgroundColor: '#141313' });
            $(".dropdown-menu").css({ backgroundColor: '#3e3b3b' });
            $(".dropdown-menu li a").css({ color: '#fff' });
            $(".text-mode").css({ color: '#fff' });
    
        } else {
            $("body, .card, textarea").css({ backgroundColor: '#fff' });
            $(".bg-navbar").css({ backgroundColor: '#fff' });
            $(".dropdown-menu").css({ backgroundColor: '#fff' });
            $(".dropdown-menu li a").css({ color: '#3e3b3b' });
            $(".text-mode").css({ color: '#000' });
        }
    }
});