import React from 'react';

interface Props {
  setQuizzStatus: React.Dispatch<React.SetStateAction<string>>
}

const Presentation: React.FC<Props> = ({ setQuizzStatus }) => (
  <div className="w-full h-full min-w-[100vw] min-h-[100vh] bg-neutral flex flex-col">
    <div className="flex flex-col items-center h-full w-full justify-around gap-12 px-8">
      <h1 className="pt-12 font-bold text-3xl whitespace-nowrap text-emphasis">⚙️ Bartle Personality Test ⚙️</h1>
      <p className="max-w-[60rem] text-center">
        Welcome to this personality quiz, based on
        <a
          href="https://en.wikipedia.org/wiki/Bartle_taxonomy_of_player_types"
          target="_blank"
          className="font-bold text-emphasis hover:text-black"
          rel="noreferrer"
        >
          {' '}
          Bartle&apos;s Taxonomy of Player Types!
        </a>
      </p>
      <p className="max-w-[60rem] text-center">
        Developed by psychologist Richard Bartle in 1966, this framework classifies players of online multiplayer games into four distinct categories:
        <i className="text-emphasis"> killers, explorers, socializers, and achievers</i>
      </p>
      <p className="max-w-[60rem] text-center">
        In this quiz, you will be presented with
        <b className="text-emphasis"> four open-ended questions </b>
        that will help us determine which type best fits your personality using a model with
        <b className="text-emphasis">
          {' '}
          <a
            href="https://cohere.ai/"
            target="_blank"
            className="font-bold text-emphasis hover:text-black"
            rel="noreferrer"
          >
            CohereAI&apos;s classification API
          </a>
        </b>
      </p>
      <p className="max-w-[60rem] text-center">
        The quiz will take
        {' '}
        <i className="text-emphasis">less than 5 minutes</i>
        {' '}
        to complete and is designed to be fun and thought-provoking
      </p>
      <small className="max-w-[60rem] text-center italic">By starting the test I understand this app will recollect anonymous information about my answers to calculate data means, and agree</small>
      <button
        type="button"
        className="px-4 min-h-[3rem] bg-emphasis text-neutral hover:bg-neutral hover:text-black rounded hover:border-2 hover:border-emphasis"
        onClick={() => setQuizzStatus('in-progress')}
      >
        Let&apos;s get started!
      </button>
      <small>
        by
        <i className="text-emphasis">
          {' '}
          <a
            href="https://github.com/quecot"
            target="_blank"
            className="font-bold text-emphasis hover:text-black"
            rel="noreferrer"
          >
            queco - Francesc Vila
            {' '}
          </a>
        </i>
        | 2023
      </small>
    </div>
  </div>
);

export default Presentation;
