import React, { useEffect, useState } from 'react';

import fitToContainer from '@utils/fit_to_container';
import drawTreeDots from '@utils/draw_tree_dots';
import drawTreeLines from '@utils/draw_tree_lines';
import clearCanvas from '@utils/clear_canvas';
import drawAnswers from '@utils/draw_answers';

import Question from '@components/question';
import sumArray from '@utils/sum_array';

const PathTree: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [answers, setAnswers] = useState<Array<number>>([]);
  const [level, setLevel] = useState(1);

  const handleLevelChange = () => {
    setLevel(level + 1);
  };

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
    drawTreeDots(canvas, answers.length + 1, 5 * dpr);
    drawTreeLines(canvas, answers.length + 1, dpr);
    drawAnswers(canvas, answers, dpr);
  }, [dimensions, level]);

  return (
    <div className="w-screen h-screen">
      <Question level={answers.length + 1} setAnswers={setAnswers} handleLevelChange={handleLevelChange} active currentDot={sumArray(answers)} answers={answers} />
      <canvas className="absolute top-0 -z-10" />
    </div>
  );
};

export default PathTree;
