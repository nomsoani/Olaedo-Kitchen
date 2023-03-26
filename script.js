const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 750,
    Transition: 500,
    interval: 4000,
})

//    scroll reveal    //


//common reveal options to create reveal animations
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal('.s2, .card', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.sec-01 .image, .info', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.s2 .image, .sec-03 .image', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.media-info li', { delay: 500, origin: 'left', interval: 200 });
