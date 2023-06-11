$(".input").focus(function(){
        $(this).prev('.fa').addclass('glowIcon')
    })
    $(".input").focusout(function(){
        $(this).prev('.fa').removeclass('glowIcon')
    })