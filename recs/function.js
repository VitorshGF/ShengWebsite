//INIT
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//END
const section = document.querySelector('section');
const end = section.querySelector('h1');
//LIBS
const controller = new ScrollMagic.Controller();

//SCENE VIDEO
let scene = new ScrollMagic.Scene({
    duration: 2000,
    triggerElemnt: intro,
    triggerHook: 0
})
    .setPin(intro)
    .addTo(controller);

//SCENE TEXTO 
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElemnt: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

//VIDEO ANIMACION
let accelam = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
    console.log(scrollpos);
});

setInterval(() => {
    delay += (scrollpos - delay) * accelam;
    video.currentTime = delay;
}, 41.71881518564872757613);
