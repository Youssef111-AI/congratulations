window.addEventListener('load', () => {
    const card = document.getElementById('card');
    const bgMusic = document.getElementById('bg-music');

    // Start animation and music
    setTimeout(() => {
        card.classList.add('open');
        bgMusic.play().catch(e => console.log('Audio play failed:', e));
    }, 1500);

    // Create falling hearts
    const hearts = document.getElementById('hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        hearts.appendChild(heart);
    }
});

// Replay button
document.querySelector('.replay-btn').addEventListener('click', () => {
    const card = document.getElementById('card');
    const bgMusic = document.getElementById('bg-music');
    card.classList.remove('open');
    setTimeout(() => {
        card.classList.add('open');
        bgMusic.currentTime = 0;
        bgMusic.play().catch(e => console.log('Audio play failed:', e));
    }, 100);
});

// Share button
document.querySelector('.share-btn').addEventListener('click', () => {
    const shareText = encodeURIComponent('مبروك زفاف العروسين! 🎉 شارك فرحتنا: https://youssef111-ai.github.io/congratulations/');
    window.open(`https://wa.me/?text=${shareText}`, '_blank');
});