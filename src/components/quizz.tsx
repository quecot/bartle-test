import React, { useState } from 'react';
import PathTree from '@components/path_tree';
import Presentation from '@components/presentation';
import Result from '@components/result';

const Quizz = () => {
  const [quizzStatus, setQuizzStatus] = useState('start'); // Possible values are 'start', 'in-progress', 'results'

  return (
    <div>
      {
        quizzStatus === 'start' ? <Presentation setQuizzStatus={setQuizzStatus} />
          : <PathTree setQuizzStatus={setQuizzStatus} />
      }
      {
        quizzStatus === 'results' ? <Result /> : null
      }
    </div>
  );
};

export default Quizz;
