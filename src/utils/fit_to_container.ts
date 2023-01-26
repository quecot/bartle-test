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

export default fitToContainer;
