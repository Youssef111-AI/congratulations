body {
  margin: 0;
  font-family: 'Cairo', sans-serif;
  background: #fff0f5;
  text-align: center;
  overflow: hidden;
}

/* ===== الكارت المتحرك ===== */
.card-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
}

.card-outer {
  width: 300px;
  height: 200px;
  perspective: 1000px;
  position: relative;
}

.card-left,
.card-right {
  width: 50%;
  height: 100%;
  background: pink;
  position: absolute;
  top: 0;
  transition: transform 2s ease-in-out;
  backface-visibility: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.card-left {
  left: 0;
  transform-origin: left;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.card-right {
  right: 0;
  transform-origin: right;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}

.card-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 26px;
  color: #fff;
  z-index: 5;
  pointer-events: none;
}

/* ===== المحتوى بعد الكارت ===== */
.content {
  display: none;
  padding-top: 50px;
}

.hearts {
  font-size: 40px;
  animation: float 3s ease-in-out infinite;
}

.photos {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.ring {
  width: 60px;
  animation: glow 2s infinite alternate;
}

.message {
  margin-top: 30px;
  font-size: 20px;
  background: #fff;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  max-width: 400px;
  margin-inline: auto;
}

@keyframes glow {
  from { filter: drop-shadow(0 0 2px gold); }
  to { filter: drop-shadow(0 0 20px gold); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
