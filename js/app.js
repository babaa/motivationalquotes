window.onload = function() {
  var mySwiper = new Swiper('.swiper-container',{
    mode:'horizontal',
    loop: true,
    updateOnImagesReady: true,
    centeredSlides: true,
  });

var gallery = {
'img/rNZ6Ios.jpg':'see the world',
'img/sw7paXH.jpg' :'enjoy the little things in life',
'img/L90qkcS.png':'always do what you love, never settle',
'img/MpCzc.jpg': 'do more of what makes you happy',
'img/y37o4.jpg' : 'good things will come my way',
'img/SnoVEHd.jpg' : 'being happy is productive',
'img/M8tLJT5.jpg' : 'just start',
'img/r2kb023.jpg' : 'nothing is impossible for you, my dear',
'img/Cu4BqeL.jpg' : 'make today ridiculously amazing'
};

var shuffled_gallery = shuffleProperties(gallery);

$.each(shuffled_gallery,function(key, value){

  var newSlide = mySwiper.createSlide('<img src="' + key + '" alt="' + value + '">');
  newSlide.prepend()

});



}


