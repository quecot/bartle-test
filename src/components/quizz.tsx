import React, { useState } from 'react';
import PathTree from '@components/path_tree';
import Presentation from '@components/presentation';
import Result from '@components/result';

const Quizz = () => {
  const [quizzStatus, setQuizzStatus] = useState('start'); // Possible values are 'start', 'in-progress', 'result'

  return (
    <div>
      {
        quizzStatus === 'start' ? <Presentation setQuizzStatus={setQuizzStatus} />
          : quizzStatus === 'in-progress' ? <PathTree />
            : quizzStatus === 'result' ? (
              <div>
                <Result />
                <PathTree />
              </div>
            ) : null
      }
    </div>
  );
};

export default Quizz;
