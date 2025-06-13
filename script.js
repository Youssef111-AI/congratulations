// تهيئة الصوت
const sound = new Howl({
    src: ['assets/audio/romantic-bg.mp3'],
    loop: true,
    volume: 0.5,
});

// خط زمني للرسوم المتحركة
const tl = gsap.timeline({ paused: true });

// رسم متحرك لفتح البطاقة
tl.to('.card', { duration: 0, addClass: 'open' })
  .to('.content', { duration: 0, className: 'content show' }, '-=0')
  .to('.groom-img', { opacity: 1, duration: 1, scale: 1.1, ease: 'power2.out' }, '-=0.5')
  .to('.bride-img', { opacity: 1, duration: 1, scale: 1.1, ease: 'power2.out' }, '-=0.8')
  .to('.ring-img', { opacity: 1, duration: 1, scale: 1.2, repeat: 1, yoyo: true }, '-=0.8')
  .to('.heart-pulse', { opacity: 1, duration: 1 }, '-=0.8')
  .to('.message', { opacity: 1, duration: 1 }, '-=0.5')
  .to('.replay-btn', { opacity: 1, duration: 0.5 }, '-=0.5')
  .to('.share-btn', { opacity: 1, duration: 0.5 }, '-=0.5');

// تحميل رسوم Lottie
const loadLottie = (id, path) => {
    lottie.loadAnimation({
        container: document.getElementById(id),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: `assets/lottie/${path}.json`,
    }).play();
};

// تحميل الرسوم المتحركة للجزيئات
loadLottie('hearts', 'hearts');
loadLottie('flowers', 'flowers');
loadLottie('butterflies', 'butterflies');

// تشغيل الرسوم والصوت عند تحميل الصفحة
window.addEventListener('load', () => {
    setTimeout(() => {
        tl.play();
        sound.play();
    }, 1500);
});

// زر إعادة التشغيل
document.querySelector('.replay-btn').addEventListener('click', () => {
    tl.restart();
    sound.stop().play();
});

// زر المشاركة
document.querySelector('.share-btn').addEventListener('click', () => {
    const shareText = encodeURIComponent('احتفل معنا بذكرى حبنا! ❤️ https://youssef111-ai.github.io/congratulations/');
    window.open(`https://wa.me/?text=${shareText}`, '_blank');
});
