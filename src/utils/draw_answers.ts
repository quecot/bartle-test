import drawMainPath from '@utils/draw_main_path';

const drawAnswers = (canvas: HTMLCanvasElement, answerArray: Array<number>, dpr: number) => {
  let dot = 0;
  answerArray.forEach((answer, answerLevel) => {
    drawMainPath(canvas, answerLevel, dot, answer, dpr, 5 * dpr);
    dot += answer;
  });
};

export default drawAnswers;
