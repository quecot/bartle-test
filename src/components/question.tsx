import axios from 'axios';
import React, { Dispatch, FormEvent, SetStateAction } from 'react';

interface Props {
  level: number;
  active: boolean;
  setAnswers: Dispatch<SetStateAction<number[]>>
  currentDot: number
  answers: Array<number>
  handleLevelChange: () => void
}

const QUESTIONS = {
  1: 'How would you describe yourself using a few words?',
  2: 'How do you like to spend your free time?',
  3: 'What should happen for you to be happy?',
  4: 'What are your goals in life?',
};

const Question: React.FC<Props> = ({
  level, active, setAnswers, currentDot, answers, handleLevelChange,
}) => {
  if (!active || level >= 5) {
    return null;
  }

  const toggleAnswer = (questionDiv: HTMLDivElement) => { if (questionDiv.style.display === 'none') { questionDiv.style.display = 'flex'; } else { questionDiv.style.display = 'none'; } };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const questionDiv = document.querySelector('#question-div') as HTMLDivElement;
    questionDiv.style.display = 'none';

    const input = document.querySelector('input') as HTMLInputElement;
    const answer = input.value;

    input.value = '';

    const data = { answer };
    const url = `${import.meta.env.VITE_API_URL}classify-question-${level.toString()}/${currentDot}`;

    axios.post(url, data).then((response) => {
      const newAnswers = answers;
      newAnswers.push(response.data.answer - 1);
      setAnswers(newAnswers);
      handleLevelChange();
      setTimeout(() => toggleAnswer(questionDiv), 1000);
    });
  };

  return (
    <div id="question-div" className="w-full h-full flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-neutral rounded-xl">
        <h1 className="font-bold text-xl text-center p-4">
          Question
          {' '}
          {level}
          /4
        </h1>
        {/* @ts-ignore */}
        <p className="text-center pb-4 px-6">{QUESTIONS[level.toString()]}</p>
        <input required type="text" className="p-4 w-full text-center focus:outline-none" />
        <button type="submit" className="w-full p-4 hover:bg-killer rounded-b-xl hover:text-neutral">Send</button>
      </form>
    </div>
  );
};

export default Question;
