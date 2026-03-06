function createLaser() {
    const stage = document.querySelector('.hero-stage');
    if (!stage) return;

    const laser = document.createElement('div');
    laser.className = 'laser-string';

    // Настройки случайности
    const colors = ['#0077ff', '#00ff88', '#ffffff']; // Синий, Зеленый, Белый
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomTop = Math.floor(Math.random() * 70) + 15 + '%'; // От 10% до 90% высоты
    const randomDuration = (Math.random() * 3 + 5).toFixed(2) + 's'; // От 4 до 8 секунд
    const randomDelay = (Math.random() * 2).toFixed(2) + 's';
    const randomRotate1 = (Math.random() * 100 + 50) + 'deg';
    const randomRotate2 = (Math.random() * 100 + 50) + 'deg';
    const left = - Math.floor(Math.random() * 100) + '%';

    // Передаем значения в CSS переменные
    laser.style.setProperty('--color', randomColor);
    laser.style.setProperty('--top', randomTop);
    laser.style.setProperty('--delay', randomDelay)
    laser.style.setProperty('--duration', randomDuration);
    laser.style.setProperty('--rotate1', randomRotate1);
    laser.style.setProperty('--rotate2', randomRotate2);
    laser.style.setProperty('--left', left);
    laser.style.setProperty('--max-opacity', Math.random() * 0.4 + 0.2); // Разная яркость

    stage.appendChild(laser);

    // Удаляем элемент из DOM после завершения анимации, чтобы не тормозило
    laser.addEventListener('animationend', () => {
        laser.remove();
    });
}

// Запускаем цикл создания лазеров
// Создаем первый сразу
createLaser();

// И потом каждые 2.5 секунды новый
setInterval(createLaser, 2000);
