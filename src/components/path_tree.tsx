import React, { useEffect, useState } from 'react';

import fitToContainer from '@utils/fit_to_container';
import drawTreeDots from '@utils/draw_tree_dots';
import drawTreeLines from '@utils/draw_tree_lines';
import clearCanvas from '@utils/clear_canvas';

const PathTree: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [level, setLevel] = useState(5);

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
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
