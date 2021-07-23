$(function(){

    $(".main_slider").slick({
        arrows:false,
        //dots:true,
        pauseOnHover:false,
        autoplay:true,
        autoplaySpeed:6000,
        slidesToShow: 3,
        slidesToScroll: 3,
    });


 


    $(".main_slider figure").eq(4).addClass("on");
    $(".main_slider").on("afterChange", function(e,s,c){
        console.log(c)//0.3.6
        $(".main_slider figure").eq(c+4).addClass("on").siblings().removeClass("on");
        $("#content01 .slide_bar span").animate({left:(c/3)*400})
    });





    $(".main_slider02").slick({
        arrows:false,
        //dots:true,
        //autoplay:true,
        //autoplaySpeed:3000,
        pauseOnHover:false,
    });

    $("#content04 .xi-angle-left-thin").on("click", function(){
        $(".main_slider02").slick("slickPrev")
    });
    
    $("#content04 .xi-angle-right-thin").on("click", function(){
        $(".main_slider02").slick("slickNext")
    });



    $(".main_slider02 figure").eq(1).addClass("on");
    $(".main_slider02").on("afterChange", function(e,s,c){
        console.log(c)
        $(".main_slider02 figure").eq(c+1).addClass("on").siblings().removeClass("on");
        $("#content04 .slide_bar02 span").animate({left:(c/1)*475})
    });

    
    $(".vi_txt").slick({
        arrows:false,
        //dots:true,
        //autoplay:true,
        //autoplaySpeed:3000,
        pauseOnHover:false,
    });










});