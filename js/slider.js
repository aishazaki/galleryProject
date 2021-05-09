var $links = $('.itemLinks');
$links.click (function (e) {
    $links.removeClass('active');
    
   var clickedLink = $(e.target);
    var postion = clickedLink.attr('data-pos');
    var translateValue = "translate3d(" + postion * 25 +"%, 0px, 0px)";
    $('#wrapper').css({ 
        transform: translateValue
     });
    clickedLink.addClass('active');
});
$($links[0]).addClass('active');