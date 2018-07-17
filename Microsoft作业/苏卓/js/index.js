window.onload = function () {
    var en = null;
    function Long(la,color,en) {
        if (la == "a") {
            $(en).css({"border-bottom" : "2px solid " + color}); 
            $(en).next().animate({marginLeft : "12px"},200);
        }else {
            $(en).find(la).css({"border-bottom" : "2px solid " + color}); 
            $(en).find("i").animate({marginLeft : "12px"},200);
        }
    }
    function Short(la) {
        if (la == "a") {
            $(en).css({"border-bottom" : ""});
            $(en).next().animate({marginLeft : "5px"},200);
        }else {
            $(en).find(la).css({"border-bottom" : ""});
            $(en).find("i").animate({marginLeft : "5px"},200);
        }   
    }

    function Cnt_Div(s1,s2,s3,url1,url2) {
        if ($(s3).css("display") == "none") {
            $(s2).css("display","none");

            $(s3).css("display","block");
            $(s1).css({"background":"url("+url1+") no-repeat","background-size":"100% 100%"});
        }else {
        
            $(s3).css("display","none");

            $(s2).css("display","block");
            $(s1).css({"background":"url("+url2+") no-repeat","background-size":"100% 100%"});
        }
    }




    $(".Cn_rightlDiv > div").hover(function () {
        en = $(this);
        Long("span","#fff",en);
    },function(){
        Short("span");
    })

    $(".Cn_leftlDiv > div").hover(function () {
        en = $(this);
        Long("span","#fff",en);
    },function(){
        Short("span");
    })
    
    $(".Cn_leftlDiv_2x2 > div").hover(function () {
        en = $(this);
        Long("span","#000",en);
    },function(){
        Short("span");
    })

    $("#Cn_leftlDiv_3 > div").hover(function () {
        en = $(this);
        Long("span","#000",en);
    },function(){
        Short("span");
    })


    $(".Box_1 > div > a").hover(function () {
        en = $(this);
        Long("a","#005DA6",en);
    },function(){
        Short("a");
    })



    $("#wechat_ico").hover(function () {
        $(".wechar_Ma").css("display","block");
    },function () {
        $(".wechar_Ma").css("display","none");
    })

    $("#but_left_1,#but_right_1").click(function(){
        Cnt_Div("#Cnt_Div_1","#Cn_leftlDiv_1","#Cn_rightlDiv_1","img/01.jpg","img/02.jpg");
    })
    $("#but_left_2,#but_right_2").click(function(){
        Cnt_Div("#Cnt_Div_3","#Cn_leftlDiv_3","#Cn_leftlDiv_2","img/04.jpg","img/05.jpg");
    })
}