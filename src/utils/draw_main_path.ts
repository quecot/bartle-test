const drawMainPath = (canvas: HTMLCanvasElement, startLevel: number, startDot: number, answer: number, lineWidth: number, dotRadius: number) => {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const { width, height } = canvas;

  ctx.fillStyle = '#8A8ADD'; // Same as in emphasis-blue in tailwind.config.js
  ctx.strokeStyle = '#8A8ADD';
  ctx.lineWidth = 4 * lineWidth;
  ctx.setLineDash([]);

  const startY = ((7 - startLevel) * height) / 8;
  const dotsInLevel = 3 * startLevel + 1;

  const startX = width / 2 + ((startDot - (dotsInLevel - 1) / 2) * (width / 15));
  const nextLevelDots = (3 * (startLevel + 1)) + 1;
  const endY = ((7 - (startLevel + 1)) * height) / 8;
  const endX = width / 2 + ((startDot + answer - (nextLevelDots - 1) / 2) * (width / 15));

  // Draw start circle
  ctx.beginPath();
  ctx.arc(startX, startY, dotRadius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  // Draw end circle
  ctx.beginPath();
  ctx.arc(endX, endY, dotRadius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  // Draw the line between start and end
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.closePath();
};

export default drawMainPath;
