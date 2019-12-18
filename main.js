const navButton = document.querySelector('#a');   

const tl = new TimelineLite({ paused:true, reversed: true });
tl
   .to('nav', 1.5, {height: '100%', ease: Power2.easeOutIn}, '-=1.5')

navButton.addEventListener('click', (e) => {
   if(tl.isActive()){
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
   }
   toggleTween(tl)
})

function toggleTween(tween) {
   tween.reversed() ? tween.play() : tween.reverse();
}


const controller = new ScrollMagic.Controller();

const tlFirstScroll = new TimelineMax();
tlFirstScroll
   .set('.front-phone', {scale: 1, transformOrigin: 'center top'})
   .to('.front-phone', 3, {scale: 1.5, y: "-60%"})
const scene1 = new ScrollMagic.Scene({
   triggerElement: '#trigger1',
   triggerHook: 0,
   duration: '80%'
})
   .setTween(tlFirstScroll)
   .addTo(controller)
   .addIndicators();


const tlSecondScroll = new TimelineMax();
tlSecondScroll
   .to('.front', 3, {x: '-140%'})
   .to('.back', 3, {x: '140%'}, "-=3")

   .from('.text', 0.3, {opacity: 0}, "-=3")
   .to('.text', 3, {zIndex: '-20', opacity: 1}, "-=3")

   .to('.front', 3, {x: '40%'})
   .to('.back', 3, {x: '-40%'}, '-=3')

   .to('.text', .2, {opacity: 0}, '-=3')
   .to('.front, .back', 1, {scale: 1.2})
   
   .from('.buy', 1, {opacity: 0})
   .to('.buy', 0.5, {top: '80%', opacity: 1})
const scene2 = new ScrollMagic.Scene({
   triggerElement: '#trigger2',
   triggerHook: 0.2,
   duration: '100%'
})
   .setTween(tlSecondScroll)
   .addTo(controller)
   .setPin('#trigger2')
   .addIndicators();


const tlThirdScroll = new TimelineMax();
tlThirdScroll
   .from('.front-pic-2', 2, {x: '-1500px'})
   .from('.back-pic-2', 2, {x: '1500px'}, '-=1.9')

   .to('.s6-edge', 1, {y:'50px'})

   .from('.s6-front p', .3, {opacity: 0})
   .to('.s6-front p', 1, {color: '#282926'})
   .to('span', 2, {width: '100%', zIndex: '-5'}, '-=1')
const scene3 = new ScrollMagic.Scene({
   triggerElement: '#trigger3',
   triggerHook: 0,
   duration: '100%'
})
   .setTween(tlThirdScroll)
   .addTo(controller)
   .setPin('#trigger3')
   .addIndicators();


