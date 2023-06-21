// JavaScript Document
console.log("howdy");

//////////
//SLIDER//
//////////
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

/////////
//AUDIO//
/////////
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


////////////////
//DRAG EN DROP//
////////////////
var playlist = document.querySelector(".playlist ul");
new Sortable(playlist, {
  animation: 300, // ca 300ms is meestal een mooie tijd
});


/////////////////
//DELETE BUTTON//
/////////////////
// Vind alle deleteknoppen
var deleteButtons = document.querySelectorAll('.deleteButton');

// Loop door elke deleteknop en voeg een klikgebeurtenis toe
deleteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Vind de ouder <li> van de deleteknop
        const listItem = button.closest('li');

        // Verwijder het <li>-element
        listItem.remove();
    });
});


