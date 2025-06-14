// بعد 3.2 ثانية من بداية الكارت، نعرض اللوجو ونخفي الكارت
window.onload = () => {
  setTimeout(() => {
    document.getElementById("card").style.display = "none";
    const logo = document.getElementById("logo");
    logo.style.opacity = "1";
    logo.style.transform = "scale(1)";
  }, 3200);
};
