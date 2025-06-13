document.getElementById("card").addEventListener("click", function () {
  // إخفاء الكارت
  this.style.display = "none";

  // عرض المحتوى
  const content = document.getElementById("content");
  content.style.display = "block";

  // تأثير بسيط عند الظهور
  content.style.opacity = 0;
  setTimeout(() => {
    content.style.transition = "opacity 1s";
    content.style.opacity = 1;
  }, 100);
});
