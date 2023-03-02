const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-right-arrow');
const prevButtoon = document.querySelector('.carousel-left-arrow');
const dotNav = document.querySelector('.carousel-nav');
const dotsNav = Array.from(dotNav.children);

const slideSize = slides[0].getBoundingClientRect();

const slideWidth = slideSize.width;

//console.log(slideSize);
//arrange slides next to each other

slides[0].style.left = 0;
slides[0].style.left = '200px';

// when i click left, move the slides left
// when I click right, move the slides right
// when I click the nav indicators, move to the slides