$(document).ready(function() {
    let $ul = $(".nav__list"),
        $menu = ("#nav-icon1");
    $($menu).click(function() {
        $ul.toggleClass("nav-icon1-click");
        $ul.slideDown(500);
    });
    $($menu).click(function() {
        if (($ul).hasClass("nav-icon1-click")) {
            $ul.slideDown(500);
        } else { $ul.slideUp(500); }
    }); 


    $('#nav-icon1').click(function() {
        $(this).toggleClass('open');
    });
    $("#btn2-1").mouseenter(function() {
        $('#btn2-1 > div').addClass('right-btn-hover');

    });
    $("#btn2-1").mouseleave(function() {
        $("#btn2-1 > div").removeClass('right-btn-hover');

    });

    $("#btn2-2").mouseenter(function() {
        $('#btn2-2 > div').addClass('right-btn-hover');

    });
    $("#btn2-2").mouseleave(function() {
        $("#btn2-2 > div").removeClass('right-btn-hover');

    });

    $("#btn2-3").mouseenter(function() {
        $('#btn2-3 > div').addClass('right-btn-hover');

    });
    $("#btn2-3").mouseleave(function() {
        $("#btn2-3 > div").removeClass('right-btn-hover');

    });

    $("#btn2-4").mouseenter(function() {
        $('#btn2-4 > div').addClass('right-btn-hover');

    });
    $("#btn2-4").mouseleave(function() {
        $("#btn2-4 > div").removeClass('right-btn-hover');

    });

    $("#btn2-5").mouseenter(function() {
        $('#btn2-5 > div').addClass('right-btn-hover');

    });
    $("#btn2-5").mouseleave(function() {
        $("#btn2-5 > div").removeClass('right-btn-hover');

    });

    $("#btn2-6").mouseenter(function() {
        $('#btn2-6 > div').addClass('right-btn-hover');

    });
    $("#btn2-6").mouseleave(function() {
        $("#btn2-6 > div").removeClass('right-btn-hover');

    });




});