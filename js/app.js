window.onload = function() {
  var mySwiper = new Swiper('.swiper-container',{
    //Your options here:
    mode:'horizontal',
    loop: true,
    updateOnImagesReady: true,
    centeredSlides: true,
    keyboardControl: true,
    mousewheelControl: true,
    //etc..
  });

var gallery = {
'http://i.imgur.com/rNZ6Ios.jpg':'see the world',
'http://i.imgur.com/sw7paXH.jpg' :'enjoy the little things in life',
'http://i.imgur.com/L90qkcS.png':'always do what you love, never settle',
'http://i.imgur.com/MpCzc.jpg': 'do more of what makes you happy',
'http://i.imgur.com/y37o4.jpg' : 'good things will come my way',
'http://i.imgur.com/SnoVEHd.jpg' : 'being happy is productive',
'http://i.imgur.com/M8tLJT5.jpg' : 'just start',
};


$.each(gallery,function(key, value){

  var newSlide = mySwiper.createSlide('<img src="' + key + '" alt="' + value + '">');
  newSlide.prepend()

});



}


