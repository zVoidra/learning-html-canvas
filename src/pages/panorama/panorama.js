export const HTML = `
  <h1>Panorama</h1>
  <canvas id="canvas" width="800" height="200"></canvas>
`;

export function init() {
  imgW = img.width * scale;
  imgH = img.height * scale;

  if (imgW > canvasXSize) {
    x = canvasXSize - imgW;
  }

  clearX = Math.max(imgW, canvasXSize);
  clearY = Math.max(imgH, canvasYSize);

  ctx = document.getElementById("canvas").getContext("2d");
  setInterval(draw, speed);
}

const img = new Image();

img.src = "public/capitan_meadows_yosemite_national_park.jpg";
const canvasXSize = 800;
const canvasYSize = 200;
const speed = 30;
const scale = 1.05;
const y = -4.5;

const dx = 0.75;
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;
let ctx;

function draw() {
  ctx.clearRect(0, 0, clearX, clearY);

  if (imgW <= canvasXSize) {
    if (x > canvasXSize) {
      x = -imgW + x;
    }

    // Draw addional image1
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }

    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  } else {
    if (x > canvasXSize) {
      x = canvasXSize - imgW;
    }

    if (x > canvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }

  ctx.drawImage(img, x, y, imgW, imgH);

  x += dx;
}
