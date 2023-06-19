// JavaScript Document
console.log("howdy");

// drag en drop vars
var favoLijst = document.querySelector("footer ul");
var allesLijst = document.querySelector("ul:first-of-type");


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


/* Drag en drop */
new Sortable(allesLijst, {
	group: {
		name: 'fotoLijstjes', // zelfde naam als bij favoLijstje
		pull: 'clone' // er wordt een kopie gemaakt
	},
	sort: false, // de foto kunnen in de lijst zelf niet gesorteerd worden
	animation: 300 // een kleine animatie als een foto gecloned wordt
});

new Sortable(favoLijst, {
	group: {
		name: 'fotoLijstjes', // zelfde naam als bij allesLijstje
		pull: 'false' // foto's kunnen niet uit de favo lijst gesleept worden
	},
	animation: 300 // een kleine animatie als een foto van plek wisselt
});