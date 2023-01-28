const drawTreeLines = (canvas: HTMLCanvasElement, level: number, lineWidth: number) => {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const { width, height } = canvas;

  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = '#fffafa'; // Same as in emphasis in tailwind.config.js

  for (let i = 0; i < level - 1; i += 1) {
    const startY = ((7 - i) * height) / 8;
    const dotsInLevel = 3 * i + 1;

    for (let j = 0; j < dotsInLevel; j += 1) {
      const startX = width / 2 + ((j - (dotsInLevel - 1) / 2) * (width / 15));
      const nextLevelDots = (3 * (i + 1)) + 1;
      const endY = ((7 - (i + 1)) * height) / 8;
      for (let k = j; k < j + 4; k += 1) {
        const endX = width / 2 + ((k - (nextLevelDots - 1) / 2) * (width / 15));
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.setLineDash([6, 12]);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
};

export default drawTreeLines;
