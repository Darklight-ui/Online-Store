/**slider */
var i = 0;
var images = [];
var time = 3000;

images[0] = './images/19275124_104583026830433_1239303671104304454_n[1].jpg';
images[1] = './images/19399680_109830479639021_7818597561158970132_n[1].jpg';
images[2] = './images/19424443_104584100163659_3399655001492565235_n[2].jpg';
images[3] = './images/received_272396313154145.jpeg';
images[4] = './images/received_270597450000698.jpeg';
images[5] = './images/Prime Kitchen Eatry.jpg';

function changeImg(){
    document.slde.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

setTimeout("changeImg()", time);
}

window.onload = changeImg;

/**End of slider */


/** second slider */
$(".slider-two")
.not("slik-intialized")
.slick({
    prevArrow:".site-slider.slider-two.prev",
    nextArrow:".site-slider.slider-two.next"})
/**End of second slider */