$(document).ready(function(){

    $('#small').click(function(e){
        e.preventDefault();
        $('h1').animate({"font-size":"24px"})
        $('h2').animate({"font-size":"16px"})
        $('p').animate({"font-size":"12px"})
    });

    $('#medium').click(function(e){
        e.preventDefault();
        $('h1').animate({"font-size":"36px"})
        $('h2').animate({"font-size":"24px"})
        $('p').animate({"font-size":"14px"})
    });

    $('#large').click(function(e){
        e.preventDefault();
        $('h1').animate({"font-size":"48px"})
        $('h2').animate({"font-size":"30px"})
        $('p').animate({"font-size":"16px"})
    });

    $('#max').click(function(e){
        e.preventDefault();
        $('h1').animate({"font-size":"56px"})
        $('h2').animate({"font-size":"42px"})
        $('p').animate({"font-size":"24px"})
    });

    $("a").click(function(){
        $("a").removeClass("active");
        $(this).addClass("acive");
    });
});