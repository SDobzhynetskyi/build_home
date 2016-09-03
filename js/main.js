
$(document).ready(function(){
    $(".newsBlock__head:first").addClass("active");
    $(".newsBlock__section .newsBlock__slide:not(:first)").hide();

    $(".newsBlock__head").click(function(){
        $(this).next(".newsBlock__slide").slideToggle("slow")
        .siblings(".newsBlock__slide:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings(".newsBlock__head").removeClass("active");
     });

 });
