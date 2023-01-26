const drawTreeDots = (canvas: HTMLCanvasElement, level: number, dotRadius: number) => {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const { width, height } = canvas;

  for (let i = 0; i < level; i += 1) {
    const dotY = ((7 - i) * height) / 8;
    const dotsInLevel = 3 * i + 1;

    for (let j = 0; j < dotsInLevel; j += 1) {
      ctx.beginPath();
      const dotX = width / 2 + ((j - (dotsInLevel - 1) / 2) * (width / 15));
      ctx.arc(dotX, dotY, dotRadius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
  }
};

export default drawTreeDots;
