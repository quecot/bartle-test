const clearCanvas = (canvas: HTMLCanvasElement) => {
  const context = canvas.getContext('2d') as CanvasRenderingContext2D;
  context.clearRect(0, 0, canvas.width, canvas.height);
};

export default clearCanvas;
