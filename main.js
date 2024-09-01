const canvas = document.getElementById('trackbar');
const ctx = canvas.getContext('2d');

const trackbarWidth = canvas.width;
const trackbarHeight = canvas.height;
const knobWidth = 20;
const knobHeight = 40;
const trackColor = '#ddd';
const knobColor = 'blue';
const knobBorderColor = '#000';
const knobBorderWidth = 2;

let knobX = trackbarWidth / 2 - knobWidth / 2;
let dragging = false;

//  Функция для отрисовки трекбара и ползунка на холсте
function drawTrackbar() {
    ctx.clearRect(0, 0, trackbarWidth, trackbarHeight);

    ctx.fillStyle = trackColor;
    ctx.fillRect(0, trackbarHeight / 2 - 10, trackbarWidth, 20);

    ctx.fillStyle = knobColor;
    ctx.fillRect(knobX, trackbarHeight / 2 - knobHeight / 2, knobWidth, knobHeight);

    ctx.strokeStyle = knobBorderColor;
    ctx.lineWidth = knobBorderWidth;
    ctx.strokeRect(knobX, trackbarHeight / - knobHeight / 2, knobWidth, knobHeight);
}

// Событие mousedown: Проверяет, находится ли курсор внутри области ползунка и устанавливает флаг dragging
// Событие mousemove: Если dragging активен, обновляет позицию ползунка в зависимости от перемещения мыши
// Событие mouseup: Сбрасывает флаг dragging при отпускании кнопки мыши
canvas.addEventListener('mousedown', (e) => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    if (mouseX >=  knobX && mouseX <= knobX + knobWidth &&
        mouseY >= trackbarHeight / 2 - knobHeight / 2 && mouseY <= trackbarHeight / 2 + knobHeight / 2) {
        dragging = true;
    }
});

canvas.addEventListener('mousemove', (e) => {
    if (dragging) {
        const mouseX = e.offsetX;
        if (mouseX >= 0 && mouseX <= trackbarWidth - knobWidth) {
            knobX = mouseX;
            drawTrackbar();
        }
    }
});

canvas.addEventListener('mouseup', () => {
    dragging = false;
});

drawTrackbar();

