// JavaScript Document
console.log("howdy");

/* getting started --> https://swiperjs.com/get-started */

var options = {
  direction: 'horizontal', //richting van de carousel - de default
  speed: 300, // duur van transitie in ms
  cssMode: true,
  pagination: {
    el: '.swiper-pagination', // class van de paginering
    type: 'fraction' // x/xx als paginering
  },
  navigation: {
    nextEl: '.swiper-button-next', // class van next button
    prevEl: '.swiper-button-prev' // class van prev button
  }
};

/* het daadwerkelijk initialiseren van de carousel */
const swiper = new Swiper('.swiper', options);
let currentAudio = null;

swiper.on('slideChange', function () {
  const activeSlide = this.slides[this.activeIndex];
  const audioElement = activeSlide.querySelector('audio');
  
  if (currentAudio) {
    currentAudio.pause();
  }
  
  if (audioElement) {
    audioElement.play();
    currentAudio = audioElement;
  }
});

/* EERSTE AUDIO SPEELT NIET AUTOMATISCH AF?? */
