window.addEventListener('load', () => {
    const card = document.getElementById('card');

    // Start animation
    setTimeout(() => {
        card.classList.add('open');
    }, 1500);

    // Create falling hearts
    const hearts = document.getElementById('hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 6 + 's';
        hearts.appendChild(heart);
    }
});

// Replay button
document.querySelector('.replay-btn').addEventListener('click', () => {
    const card = document.getElementById('card');
    card.classList.remove('open');
    setTimeout(() => {
        card.classList.add('open');
    }, 100);
});

// Share button
document.querySelector('.share-btn').addEventListener('click', () => {
    const shareText = encodeURIComponent('مبروك زفاف محمد وفاطمة! 🎉 شارك فرحتنا: https://youssef111-ai.github.io/congratulations/');
    window.open(`https://wa.me/?text=${shareText}`, '_blank');
});
