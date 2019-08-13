/*刘艳东*/

$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({scrollTop: 0 }, 2000);
        return false;
    });
    $("#jum7 .carousel").carousel();
    $("#jum3 ul li").hover(function(){
        $(this).css({textDecoration:"underline",cursor:"pointer"},1000);
    },
        function(){
            $(this).css({textDecoration:"",cursor:""},1000);
        }
    );
    $("#jum8 ul li").hover(function(){
        $(this).css({boxShadow:"1px 1px 5px black,-1px -1px 5px black"})
    },
        function(){
            $(this).css({boxShadow:""})
        }
    );
    $("#jum9 button").hover(function(){
            $(this).css({backgroundColor:"deeppink"},1000)
        },
        function(){
            $(this).css({backgroundColor:""})
        }
    );
    $("#navigation ul li:nth-child(2) a").click(function(){
        function scroll() {
            var scroll_offset = $("#jum2").offset().top;
            $("body,html").animate({
                scrollTop: scroll_offset
            },1000);
        }
    });
    function scroll() {
        var scroll_offset = $("#jum1").offset().top();
        $("body,html").animate({
            scrollTop: scroll_offset
        },1000);
    }
    function scroll1() {
        var scroll_offset = $("#jum2").offset().top;
        $("body,html").animate({
            scrollTop: scroll_offset
        },1000);
    }
    function scroll2() {
        var scroll_offset = $("#hd3").offset().top;
        $("body,html").animate({
            scrollTop: scroll_offset
        }, 1000);
    }
    function scroll3() {
        var scroll_offset = $("#jum5").offset().top;
        $("body,html").animate({
            scrollTop: scroll_offset
        }, 1000);
    }
    function scroll4() {
        var scroll_offset = $("#jum6").offset().top;
        $("body,html").animate({
            scrollTop: scroll_offset
        }, 1000);
    }
    function scroll5() {
        var scroll_offset = $("#jum8").offset().top;
        $("body,html").animate({
            scrollTop: scroll_offset
        }, 1000);
    }
    function scroll6() {
        var scroll_offset = $("#jum9").offset().top;
        $("body,html").animate({
            scrollTop: scroll_offset
        }, 1000);
    }
    function scroll7() {
        var scroll_offset = $("#jum10").offset().top;
        $("body,html").animate({
            scrollTop: scroll_offset
        }, 1000);
    }
});