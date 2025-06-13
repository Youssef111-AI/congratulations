// Initialize audio
const sound = new Howl({
    src: ['assets/audio/romantic-bg.mp3'],
    loop: true,
    volume: 0.5,
});

// Animation timeline
const tl = gsap.timeline({ paused: true });

// Card opening animation
tl.to('.card', { duration: 0, addClass: 'open' })
  .to('.content', { duration: 0, className: 'content show' }, '-=0')
  .to('.groom-img', { opacity: 1, duration: 1 }, '-=0.5')
  .to('.bride-img', { opacity: 1, duration: 1 }, '-=0.8')
  .to('.ring-img', { opacity: 1, duration: 1, scale: 1.2, repeat: 1, yoyo: true }, '-=0.8')
  .to('.message', { opacity: 1, duration: 1 }, '-=0.5')
  .to('.replay-btn', { opacity: 1, duration: 0.5 }, '-=0.5');

// Lottie animations
const loadLottie = (id, path) => {
    lottie.loadAnimation({
        container: document.getElementById(id),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: `assets/lottie/${path}.json`,
    }).play();
};

// Load particle animations
loadLottie('hearts', 'hearts');
loadLottie('flowers', 'flowers');
loadLottie('butterflies', 'butterflies');

// Play animation and audio on load
window.addEventListener('load', () => {
    setTimeout(() => {
        tl.play();
        sound.play();
    }, 1500);
});

// Replay button
document.querySelector('.replay-btn').addEventListener('click', () => {
    tl.restart();
    sound.stop().play();
});
