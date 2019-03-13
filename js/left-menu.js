/*------------------------
---- Left Menu Toggle ----
-------------------------*/

$(document).ready(function () {

    $(".menu-toggle a").click(function () {
        $(".menu").slideToggle(700);
    });
    // $(window).resize(function () {
    //     if ($(window).width() >= 910) {
    //         $(".menu").css("display", "none");
    //     }
    // });

    //$(window).resize(function () {

    //    if ($(window).width() >= 910) {
    //        $("#pctext1").show();
    //        $("#tabtext1").hide();
    //        $("#pctext2").show();
    //        $("#tabtext2").hide();
    //        $("#pctext3").show();
    //        $("#tabtext3").hide();
    //        $("#pctext4").show();
    //        $("#tabtext4").hide();
    //    }
    //    else {
    //        $("#pctext1").hide();
    //        $("#tabtext1").show();
    //        $("#pctext2").hide();
    //        $("#tabtext2").show();
    //        $("#pctext3").hide();
    //        $("#tabtext3").show();
    //        $("#pctext4").hide();
    //        $("#tabtext4").show();
    //    }
    //});
   
    $(window).resize(function () {

        if ($(window).height() <= 560) {
            $("#m6").hide();
            $("#m7").hide();
            $("#m8").hide();
        }
        else {
            $("#m6").show();
            $("#m7").show();
            $("#m8").show();
        }
    });
});