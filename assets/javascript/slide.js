
$(document).ready(function() {
    var stt = 0;
    var starImg = $('.slide:first').attr('stt');
    var lastImg = $('.slide:last').attr('stt');
    $('.slide').each(function() {
        if($(this).is(':visible')){
            stt =$(this).attr('stt');
        }
    })
    $('#Next').click(function() {
        next = ++stt;
        if(next >= lastImg){
            stt= starImg-1;
        }
        $('.slide').hide();
        $('.slide').eq(next).show();
    })
    $('#Prev').click(function() {
        clearInterval(c);
        prev = --stt;
        if(prev < starImg){
            stt = lastImg;
        }
        $('.slide').hide();
        $('.slide').eq(prev).show();
    
    })
   //chạy vĩnh cửu
   var c= setInterval(() => {
        $('#Next').click();
    },2000);
})

