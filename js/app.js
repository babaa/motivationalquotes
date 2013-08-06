window.onload = function() {
  var mySwiper = new Swiper('.swiper-container',{
    mode:'horizontal',
    loop: true,
    updateOnImagesReady: true,
    centeredSlides: true,
  });

var gallery = {
'http://i.imgur.com/rNZ6Ios.jpg':'see the world',
'http://i.imgur.com/sw7paXH.jpg' :'enjoy the little things in life',
'http://i.imgur.com/L90qkcS.png':'always do what you love, never settle',
'http://i.imgur.com/MpCzc.jpg': 'do more of what makes you happy',
'http://i.imgur.com/y37o4.jpg' : 'good things will come my way',
'http://i.imgur.com/SnoVEHd.jpg' : 'being happy is productive',
'http://i.imgur.com/M8tLJT5.jpg' : 'just start',
'http://i.imgur.com/r2kb023.jpg' : 'nothing is impossible for you, my dear',
'http://i.imgur.com/Cu4BqeL.jpg' : 'make today ridiculously amazing'
};

var shuffled_gallery = shuffleProperties(gallery);

$.each(shuffled_gallery,function(key, value){

  var newSlide = mySwiper.createSlide('<img src="' + key + '" alt="' + value + '">');
  newSlide.prepend()

});



}


