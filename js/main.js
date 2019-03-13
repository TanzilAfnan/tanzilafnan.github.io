/// <reference path="jquery-1.11.3.min.js" />
/*Intro Page Navigation*/
$(document).ready(function () {
    $("#a1").click(function () {
        $('html, body').animate({
            scrollTop: $("#first").offset().top
        }, 750);
    });
    $("#a2").click(function () {
        $('html, body').animate({
            scrollTop: $("#second").offset().top
        }, 750);
    });
    $("#a3").click(function () {
        $('html, body').animate({
            scrollTop: $("#third").offset().top
        }, 750);
    });
    $("#a4").click(function () {
        $('html, body').animate({
            scrollTop: $("#fourth").offset().top
        }, 750);
    });
    /*Intro Page Navigation End*/
    $('#m9').click(function () {
        $('html, body').animate({
            scrollTop: $("#footer-1").offset().top
        }, 750);
    });
    //left menu navigation start
    //body toggle
    //$('#sixth').show();
    $('#m1, #m2, #m3 ,#m4 ,#m5 ,#m7 , #m9').click(function(){
        $('#intro, #first, #second ,#third , #fourth').fadeIn(500);
        var section;

        if(this.id == "m1")
        {
            section = "#intro";
        }
        else if(this.id == "m2")
        {
            section = "#first";
        }
        else if(this.id == "m3")
        {
            section = "#second";
        }
        else if(this.id == "m4")
        {
            section = "#third";
        }
        else if(this.id == "m5")
        {
            section = "#fourth";
        }
        //else if (this.id == "m7")
        //{
        //    section = "#fifth";
        //}
        else if (this.id == "m9") {
            //section = "#footer-1";
        }
        $('#sixth').hide();
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 750);


        $('#sixth').hide();

    });
    //*********************
    //team toggle
    $('#sixth').hide();
    $('#fifth').hide();
    $('#m8').click(function(){
        //$('#sixth').show();
        $('#sixth').fadeIn(500);
        $('#intro, #first, #second ,#third , #fourth').hide();
		$('html, body').animate({
            scrollTop: $("#sixth").offset().top
        }, 750);
    });
    //left menu navigation end
    //**********************
	
	//footer menu navigation start
    //body toggle
    //$('#sixth').show();
    $('#f1, #f2, #f3 ,#f4 ,#f5 ,#f7').click(function(){
        $('#intro, #first, #second ,#third , #fourth').fadeIn(500);
        var section;

        if(this.id == "f1")
        {
            section = "#intro";
        }
        else if(this.id == "f2")
        {
            section = "#first";
        }
        else if(this.id == "f3")
        {
            section = "#second";
        }
        else if(this.id == "f4")
        {
            section = "#third";
        }
        else if(this.id == "f5")
        {
            section = "#fourth";
        }
        //else if (this.id == "f7")
        //{
        //    section = "#fifth";
        //}
        $('#sixth').hide();
        $('#fifth').hide();
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 750);


        //$('#sixth').hide();

    });
    //*********************
    //team toggle
    $('#sixth').hide();
    $('#fifth').hide();
    //$('#f8').click(function(){
    //    //$('#sixth').show();
    //    $('#sixth').fadeIn(500);
    //    $('#intro, #first, #second ,#third , #fourth').hide();
    //    $('html, body').animate({
    //        scrollTop: $("#sixth").offset().top
    //    }, 750);
    //});
    //footer menu navigation end
    //*********************
    //top menu navigation
    $("#t1").click(function () {
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 750);
    });
    $("#t2").click(function () {
        $('html, body').animate({
            scrollTop: $("#first").offset().top
        }, 750);
    });
    $("#t3").click(function () {
        $('html, body').animate({
            scrollTop: $("#second").offset().top
        }, 750);
    });
    $("#t4").click(function () {
        $('html, body').animate({
            scrollTop: $("#third").offset().top
        }, 750);
    });
    $("#t5").click(function () {
        $('html, body').animate({
            scrollTop: $("#fourth").offset().top
        }, 750);
    });
    $("#t8").click(function () {
        $('html, body').animate({
            scrollTop: $("#footer-1").offset().top
        }, 750);
    });
    /*Top Menu Navigation End*/
});