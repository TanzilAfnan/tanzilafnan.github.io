//$("#intro").click(function () {
//    $("#pctext1").fadeOut("slow", function () {
//        // Animation complete.
//    });
//});

//$("#sixth").click(function () {
//    $('.tophead').html("<i>Our Team.....</i>")
//});

$(document).ready(function () {
    var targetOffset1 = $("#intro").offset().top;
    var targetOffset2 = $("#first").offset().top;
    var targetOffset3 = $("#second").offset().top;
    var targetOffset4 = $("#third").offset().top;
    var targetOffset5 = $("#fourth").offset().top;
    // var targetOffset7 = $("#fifth").offset().top;
    // var targetoffset6 = $("#sixth").offset().top;

    if ($(window).width() <= 1366) {
        var $w = $(window).scroll(function () {
            if ($w.scrollTop() > targetOffset1 - 120) {
                $('.tophead').html("<i><div>Elmelo Way...</div></i>");
                // $(".white-img").hide();
                // $(".green-img").show();
                if ($w.scrollTop() > targetOffset2 - 100) {
                    $('.tophead').html("<i><div>BoutiqA...</div></i>");
                    if ($w.scrollTop() > targetOffset3 - 120) {
                        $('.tophead').html("<i><div>ProjA...</div></i>");
                        if ($w.scrollTop() > targetOffset4 - 120) {
                            $('.tophead').html("<i><div>ZizEst...</div></i>");
                            if ($w.scrollTop() > targetOffset5 - 120) {
                                $('.tophead').html("<i><div>Deval...</div></i>");
                                // if ($w.scrollTop() > targetOffset7 - 100) {
                                //     $('.tophead').html("<i><div>Deval...</div></i>");
                                // }
                            }

                        }

                    }

                }

            } else {
                // ...
            }
        });
    }

    else {
        var $w = $(window).scroll(function () {
            if ($w.scrollTop() > targetOffset1 - 150) {
                $('.tophead').html("<i><div>Elmelo Way...</div></i>");
                if ($w.scrollTop() > targetOffset2 - 150) {
                    $('.tophead').html("<i><div>BoutiqA...</div></i>");
                    if ($w.scrollTop() > targetOffset3 - 250) {
                        $('.tophead').html("<i><div>ProjA...</div></i>");
                        if ($w.scrollTop() > targetOffset4 - 250) {
                            $('.tophead').html("<i><div>ZizEst...</div></i>");
                            if ($w.scrollTop() > targetOffset5 - 280) {
                                $('.tophead').html("<i><div>Deval...</div></i>");
                                // if ($w.scrollTop() > targetOffset7 - 150) {
                                //     $('.tophead').html("<i><div>Deval...</div></i>");
                                // }
                            }

                        }

                    }

                }

            } else {
                // ...
            }
        });
    }

    //else {
    //}
});