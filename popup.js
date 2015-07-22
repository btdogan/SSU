$('#iFrame').ready(function(){
        $(this).contents().find('head').append(' <style> h3 {text-align:center;} #main-nav {display:none;} .page-heading {display:none;} #top-nav {display:none;} #sidebar {display:none;}  #bottom {display:none;} #bottom-nav {display:none;} p {text-align:justify;} </style>     ');

});

$("#iFrame").load("http://www.ssu.edu/news-events/blog/");

setTimeout(function(){
        $("#iFrame").css("display", "block");
        $(".main-color-1-hover").attr("target", "blank");
}, 2000);
