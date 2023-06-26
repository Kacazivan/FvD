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
var playlist = document.querySelector(".playlist");
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



//////////////////
//BUTTON SHUFFLE//
//////////////////
// Selecteer de shuffle-button
var shuffleButton = document.querySelector('.shuffle');

// Selecteer alle audio-elementen
var audioElements = document.querySelectorAll('audio');

// Maak een array van de audio-elementen
var audioArray = Array.from(audioElements);

// Voeg een event listener toe aan de shuffle-button
shuffleButton.addEventListener('click', shuffleAudio);

// Functie om audio willekeurig af te spelen
function shuffleAudio() {
  // Pauzeer alle audio-elementen
  audioArray.forEach(audio => audio.pause());

  // Kies een willekeurig audio-element
  var randomIndex = Math.floor(Math.random() * audioArray.length);
  var randomAudio = audioArray[randomIndex];

  // Speel het willekeurige audio-element af
  randomAudio.play();
}

// Voeg event listeners toe aan de audio-elementen om te pauzeren bij het einde van het afspelen
audioArray.forEach(audio => {
  audio.addEventListener('ended', () => {
    audio.pause();
  });
});

