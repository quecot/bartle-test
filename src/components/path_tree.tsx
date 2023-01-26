import React, { useEffect, useState } from 'react';

const fitToContainer = (canvas: HTMLCanvasElement) => {
  if (!canvas) { return; }
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  const dpr = window.devicePixelRatio || 1;

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  canvas.width *= dpr;
  canvas.height *= dpr;
};

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

const drawTreeLines = (canvas: HTMLCanvasElement, level: number, lineWidth: number) => {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const { width, height } = canvas;

  ctx.lineWidth = lineWidth;

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

const PathTree: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [level, setLevel] = useState(5);

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const clearCanvas = (canvas: HTMLCanvasElement) => {
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
  }, []);

  useEffect(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const dpr = window.devicePixelRatio || 1;
    fitToContainer(canvas);
    clearCanvas(canvas);
    drawTreeDots(canvas, level, 5 * dpr);
    drawTreeLines(canvas, level, dpr);
  }, [dimensions, level]);

  return (
    <div className="w-screen h-screen">
      <canvas />
      <div className="absolute w-full flex gap-10 items-center justify-center bottom-8">
        <button type="button" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" onClick={() => setLevel(level + 1)}>+</button>
        <button type="button" className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded" onClick={() => setLevel(level - 1)}>-</button>
      </div>
    </div>
  );
};

export default PathTree;
