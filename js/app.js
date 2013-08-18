window.onload = function() {
  var mySwiper = new Swiper('.swiper-container',{
    mode:'horizontal',
    loop: true,
    updateOnImagesReady: true,
    centeredSlides: true,
  });

var gallery = {
'rNZ6Ios.jpg':'see the world',
'sw7paXH.jpg' :'enjoy the little things in life',
'L90qkcS.png':'always do what you love, never settle',
'MpCzc.jpg': 'do more of what makes you happy',
'y37o4.jpg' : 'good things will come my way',
'SnoVEHd.jpg' : 'being happy is productive',
'M8tLJT5.jpg' : 'just start',
'nothing27s0aimpossible0aforyou2c0amydear-default.png' : 'nothing is impossible for you, my dear',
'Cu4BqeL.jpg' : 'make today ridiculously amazing',
'what0awould0ayoudo0aifyou0aweren27t0aafraid3f-default.png' : "what would you do if you weren't afraid?",
'tumblr_mnogvmHrWz1rxgpd0o1_500.jpg' : 'love, it will not betray you, dismay or enslave you, it will set you free',
'tumblr_mhjkonol1B1rxaglko1_400.jpg' : 'the lord will fight for you, you need only be still',
'JhQJ8Yc.jpg' : 'happiness does not depend on what you have or who you are, it solely relies on what you think',
'SG1ZlqL.jpg' : 'you are really great and I only want good things to happen to you',
'H2cvYUK.jpg' : 'here comes the sun',
'tF652hX.jpg' : 'you have the patience, the strenght and the passion to achieve your ambitions, your goals and your dreams. all you need to do now, is try',
'listen_to_your_soul.jpg' : 'listen to your soul',
'tumblr_mptwyvWCeV1qigel9o1_500.jpg' : 'you are responsible for your own happiness',
'tumblr_mmndvoL7s31qz4d4bo1_500.jpg' : 'it is time to believe in myself',
'don27tletthe0abehavior0aofothers0adestroyyour0ainnerpeace-default.png' : "don't let the behavior of others destroy your inner peace"
};

var shuffled_gallery = shuffleProperties(gallery);

$.each(shuffled_gallery,function(key, value){

  var newSlide = mySwiper.createSlide('<div class="verticalhack"><img src="img/' + key + '" alt="' + value + '"></div>');
  newSlide.prepend()

});



}


