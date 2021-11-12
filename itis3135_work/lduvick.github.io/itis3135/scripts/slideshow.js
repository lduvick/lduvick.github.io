
function slideNext(wolfPic) {
    wolfPic.fadeOut();
    if(typeof wolfPic.next().attr('src') !== 'undefined') {
        wolfPic.next().fadeIn();
    } else {
        $('.wolfPic:first').fadeIn();
    }
}
