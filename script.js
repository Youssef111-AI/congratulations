window.onload = function () {
  const left = document.querySelector('.card-left');
  const right = document.querySelector('.card-right');
  const cardContainer = document.getElementById('cardContainer');
  const content = document.getElementById('content');

  // بعد ثانيتين من فتح الموقع يبدأ الكارت يفتح تلقائي
  setTimeout(() => {
    left.style.transform = 'rotateY(-90deg)';
    right.style.transform = 'rotateY(90deg)';
  }, 1000);

  // بعد الأنيميشن يتم إخفاء الكارت وعرض المحتوى
  setTimeout(() => {
    cardContainer.style.display = 'none';
    content.style.display = 'block';
    content.style.opacity = 0;
    setTimeout(() => {
      content.style.transition = 'opacity 1s';
      content.style.opacity = 1;
    }, 100);
  }, 3200);
};
