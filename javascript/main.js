$(".footer-list h3").click(function () {
    $(this).parent('.footer-list').toggleClass('open-head');

    // how to rotate the icon JUST h3>i
    // $("svg").css({ 'transform': 'rotate(180deg)' });

});