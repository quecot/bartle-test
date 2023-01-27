import React, { useEffect, useState } from 'react';

import fitToContainer from '@utils/fit_to_container';
import drawTreeDots from '@utils/draw_tree_dots';
import drawTreeLines from '@utils/draw_tree_lines';
import clearCanvas from '@utils/clear_canvas';
import drawMainPath from '@utils/draw_main_path';

const PathTree: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [level, setLevel] = useState(3);

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
    drawMainPath(canvas, 0, 0, 1, dpr, 5 * dpr);
    drawMainPath(canvas, 1, 1, 3, dpr, 5 * dpr);
  }, [dimensions, level]);

  return (
    <div className="w-screen h-screen">
      <canvas />
    </div>
  );
};

export default PathTree;
