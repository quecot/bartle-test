/* eslint-disable max-len */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Result = () => {
  const [globalResults, setGlobalResults] = useState([18, 29, 33, 20]);

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}global-votes`;
    axios.get(url).then((response) => {
      setGlobalResults(response.data);
    });
  }, []);

  return (
    <div className="absolute top-0 w-screen h-screen flex">
      <div className="group w-1/4 flex flex-col gap-4 text-white font-bold items-center hover:backdrop-blur">
        <svg className="px-2 pt-10 w-[125px] h-[125px] max-h-[25%]" xmlns="http://www.w3.org/2000/svg" data-name="Capa 2" viewBox="0 0 332.94 347.89">
          <path fill="currentColor" d="M175.88 299.92h-2.28c-.81-.53-1.56-1.18-2.43-1.58-20.1-9.15-39.4-19.77-57.82-31.95-28.72-19-54.97-40.8-76.17-68.19-17.07-22.04-29.54-46.29-34.45-73.98C1.43 116.9.89 109.44 0 102.04v-7.61c.22-1.36.55-2.71.64-4.08.97-15.04 5.22-29.12 12.55-42.25C45.78-10.27 123.16-16.67 164.7 35.66c4.51 5.68 8.09 12.09 11.62 17.42 5.85-7.87 11.18-16.75 18.14-24.09C216.17 6.13 243.04-3.94 274.34 1.4c35.19 6 58.76 27.19 71.96 59.84 10.28 25.42 8.62 51.39 1.11 77.19-8.36 28.76-24.52 52.96-44.8 74.57-30.04 32-65.86 56.13-104.68 76.08-7.29 3.75-14.7 7.24-22.06 10.85Z" data-name="Capa 1" />
        </svg>
        <p className="text-xl">Socializer</p>
        <p className="-mt-4">
          (
          {globalResults[0]}
          %)
        </p>
        <p className="text-center font-normal px-6 pt-16 group-hover:text-white text-transparent">
          Socializers are outgoing and enjoy interacting with other players. They are often the life of the party, and enjoy forming relationships and building communities within the game. They are highly motivated by social interactions and may be less interested in other aspects of the game. They may become bored with games that lack a social component or that don&apos;t allow them to interact with other players.
        </p>
      </div>
      <div className="group w-1/4 flex flex-col gap-4 text-white font-bold items-center hover:backdrop-blur">
        <svg className="px-2 pt-10 w-[125px] h-[125px] max-h-[25%]" xmlns="http://www.w3.org/2000/svg" data-name="Capa 2" viewBox="0 0 444.14 444.14">
          <path fill="currentColor" d="M223.5 0c3.83 1.7 5.5 4.7 6.29 8.81 3.7 19.24 7.75 38.41 11.48 57.65.57 2.94 1.59 4.07 4.65 4.53 64.99 9.78 116.21 60.96 126.09 125.99.45 2.97 1.39 4.15 4.44 4.72 19.91 3.75 39.77 7.74 59.63 11.7 5.88 1.17 8.2 3.59 8.05 8.31-.16 5.11-3.35 7.05-7.96 7.94-19.89 3.83-39.73 7.89-59.63 11.65-2.97.56-4.06 1.61-4.52 4.64-10.03 65.23-60.93 116.15-126.03 126.07-3.01.46-4.13 1.48-4.7 4.48-3.77 19.91-7.82 39.76-11.64 59.65-.88 4.61-2.79 7.81-7.91 7.99-4.72.16-7.18-2.2-8.33-8.02-3.94-19.87-7.93-39.74-11.69-59.64-.57-3.01-1.72-4.01-4.71-4.46-64.98-9.84-116.26-61.14-126.02-126.08-.46-3.06-1.59-4.12-4.51-4.69-19.23-3.74-38.4-7.8-57.64-11.49-4.14-.79-7.12-2.43-8.83-6.26v-3.99c1.7-3.84 4.69-5.46 8.81-6.25 19.22-3.68 38.37-7.76 57.58-11.46 3.26-.63 4.17-1.99 4.63-5.12 9.51-64.21 61.35-116.05 125.65-125.65 3.12-.47 4.46-1.37 5.09-4.65 3.68-19.22 7.75-38.37 11.45-57.59.79-4.11 2.45-7.11 6.29-8.8h3.99Zm-26.95 96.49c-50.52 7.73-93.55 53.34-99.9 100.07 22.36-4.68 44.59-9.33 67.38-14.09-8.43-12.65-16.45-24.44-24.13-36.45-1.19-1.86-1.98-5.46-.99-6.94 2.13-3.19 4.99-.72 7.3.8 7.9 5.21 15.75 10.48 23.63 15.72 4.06 2.7 8.13 5.38 12.66 8.38 4.78-22.95 9.4-45.13 14.05-67.48Zm150.03 100.06c-4.52-44.96-61.15-102.09-98.61-99.56 4.16 22.17 8.3 44.29 12.56 67.03 2.96-1.96 5.43-3.58 7.88-5.21 9.95-6.62 19.82-13.35 29.91-19.76 1.43-.91 3.86-.25 5.83-.31.01 1.96.34 4-.06 5.87-.29 1.36-1.55 2.51-2.38 3.75-7.43 11.17-14.86 22.34-22.68 34.09 22.74 4.75 44.91 9.37 67.55 14.1Zm-182.54 63.94c-23-4.29-45.19-8.43-67.77-12.64 10.22 55.44 58.95 92.91 100.27 98.56-4.67-22.38-9.32-44.61-14.08-67.39-7.49 4.99-14.24 9.49-21 13.98-5.67 3.77-11.24 7.68-17.08 11.17-1.36.81-4.63.87-5.2.03-.93-1.36-.73-3.83-.31-5.68.35-1.51 1.71-2.8 2.63-4.18 7.34-11.03 14.69-22.07 22.54-33.86ZM346.5 247.9c-22.66 4.25-44.76 8.4-67.49 12.67 6.99 10.49 13.61 20.4 20.21 30.32 1.84 2.76 3.9 5.43 5.3 8.41.61 1.31.4 3.9-.52 4.78-.92.89-3.4.94-4.82.38-2.27-.89-4.23-2.58-6.3-3.95-10.61-7.06-21.22-14.12-32.35-21.54-4.27 22.85-8.42 45.08-12.63 67.58 47.65-7.8 90.92-50.93 98.61-98.65Z" data-name="Capa 1" />
        </svg>
        <p className="text-xl">Explorer</p>
        <p className="-mt-4">
          (
          {globalResults[1]}
          %)
        </p>
        <p className="text-center font-normal px-6 pt-16 group-hover:text-white text-transparent">
          Explorers are curious and adventurous, and enjoy discovering and investigating the game world. They are fascinated by the details and secrets of the game and are often the first to discover new areas or items. They are also more likely to be attracted to games that have a lot of hidden content or open-world elements. They may become bored with games that are too straightforward or lack a sense of mystery.
        </p>
      </div>
      <div className="group w-1/4 flex flex-col gap-4 text-white font-bold items-center hover:backdrop-blur">
        <svg className="px-2 pt-10 w-[125px] h-[125px] max-h-[25%]" xmlns="http://www.w3.org/2000/svg" data-name="Capa 2" viewBox="0 0 332.94 347.89">
          <path fill="currentColor" d="M313.96 40.04c-12.46-5.77-25.69-5.27-38.99-4.85.01-6.59.03-13.17.07-19.76.04-7.38-2.3-12.53-9.15-15.43H67.47c-6.83 2.91-9.2 8.04-9.15 15.43.04 6.43.05 12.86.07 19.3-8.85.36-17.55.23-26.07 1.42-17 2.37-28.84 11.07-31.84 29.1-.04.23-.32.42-.48.62v13.01c.21.5.53.98.6 1.49 2.78 19.84 10.21 38.06 19.66 55.52 9.41 17.38 20.61 33.42 36.45 45.69 5.43 4.21 11.27 7.73 18.77 9.51-.6-1.1-1.17-2.21-1.74-3.31 12.93 21.93 32.98 38.25 56.74 46.57v41.04c-1.7.23-2.9.38-4.1.56-17.29 2.59-29.61 14.45-31.46 31.72-1.03 9.65-.67 19.49-.31 29.22.24 6.51 5.66 10.94 12.41 10.95 39.7.05 79.4.05 119.09 0 7.5 0 12.65-4.95 12.79-12.35.16-8.26.27-16.54-.06-24.79-.71-17.99-13.42-31.92-31.24-34.65-1.55-.24-3.1-.53-4.89-.84v-40.63c22.66-7.99 42.03-23.6 54.97-43.5 8.75-2.5 15.71-6.6 21.62-12.14 29.5-27.67 47.07-61.78 53.12-101.62 2.6-17.14-4.79-30.96-18.47-37.3ZM31.49 103.66c-4.23-10.73-7.74-21.69-7.23-33.46.24-5.46 2.07-7.86 7.37-9.28 3.11-.83 6.37-1.41 9.58-1.53 5.68-.22 11.38-.1 17.22-.08 0 23.72-.03 47.44.1 71.16.04 7.47.52 15.07 1.95 22.39-12.61-14.66-21.93-31.29-28.99-49.21Zm276.34-22.8c-5.31 26.62-17.64 49.82-34.54 70.77.93-5.33 1.44-10.76 1.5-16.28.27-25.4.2-50.81.17-76.22 2.27-.03 4.43-.07 6.58.04 5.8.29 11.66.31 17.39 1.19 7.41 1.13 9.69 4.18 9.63 11.61-.02 2.97-.16 5.99-.74 8.89Z" data-name="Capa 1" />
        </svg>
        <p className="text-xl">Achiever</p>
        <p className="-mt-4">
          (
          {globalResults[2]}
          %)
        </p>
        <p className="text-center font-normal px-6 pt-16 group-hover:text-white text-transparent">
          Achievers are driven by a desire to accomplish goals and collect rewards. They are often organized and disciplined, and take a methodical approach to completing tasks. They are highly motivated by in-game achievements and the feeling of accomplishment that comes with them. They may become obsessed with collecting items or completing certain objectives, and may be less interested in other aspects of the game.
        </p>
      </div>
      <div className="group w-1/4 flex flex-col gap-4 text-white font-bold items-center hover:backdrop-blur">
        <svg className="px-2 pt-10 w-[125px] h-[125px] max-h-[25%]" xmlns="http://www.w3.org/2000/svg" data-name="Capa 2" viewBox="0 0 346.17 378.36">
          <path fill="currentColor" d="M279.74 281.49c3.15 6.17 6.68 11.5 8.7 17.35 4.54 13.08-.85 24.37-13.58 29.94-9.89 4.33-20.22 4.01-30.61 2.64-2.39-.31-4.74-.84-7.72-1.37v24.15c-.01 12.43-4.83 20.22-14.18 22.95-11.81 3.45-21.29-.43-28.48-12.37-4.29 8.91-11.16 13.36-20.71 13.37-9.46 0-16.33-4.14-20.89-13.44-4.95 9.84-12.59 14.05-22.86 13.39-11.75-.75-19.58-8.81-19.8-20.59-.16-8.75-.12-17.5-.18-26.26 0-.18-.17-.36.4.77-9.12 0-17.56.42-25.95-.09-14.78-.9-26.2-9.07-27.09-20.86-.5-6.65 2.39-13.68 4.43-20.33.91-2.98 3.47-5.45 5.64-8.68-4.26-3.47-8.74-6.84-12.92-10.56C15.72 237.47-4.17 195.46.73 143.76 5.53 93.22 32.07 55.64 73.97 28.5c67.68-43.87 161.25-36.34 221.28 17.37 71.85 64.27 66.99 173.23-10.33 231.63-1.78 1.34-3.53 2.71-5.18 3.99Zm-86.52-42.17c11.95 19.88 28.75 31.31 51.57 31 25.72-.35 44.04-13.65 53.89-37.15 9.65-23.02 5.9-44.79-9.34-65.23-32.23 23.94-64 47.53-96.12 71.38Zm-40.6.46c-33.74-21.61-67.06-42.96-100.91-64.64-11.67 20.99-12.89 41.88-2.1 62.69 11.03 21.28 29.06 32.87 53.2 32.5 22.02-.34 38.31-11.42 49.82-30.55Zm20.66 51.84c2.3 3.28 3.64 6.25 5.9 8.14 2.61 2.18 6.33 5.09 9 4.61 3.09-.56 7.05-4.03 7.96-7.05 1.24-4.09 1.34-9.67-.55-13.34-3.97-7.72-9.23-14.85-14.56-21.76-4.49-5.82-11.46-5.77-15.58-.16-5.29 7.21-10.34 14.62-15.07 22.21-3.4 5.46-2.38 12.23 1.78 17.03 4.66 5.39 9.97 5.4 14.37-.14 2.25-2.83 4.2-5.9 6.74-9.53Z" data-name="Capa 1" />
        </svg>
        <p className="text-xl">Killer</p>
        <p className="-mt-4">
          (
          {globalResults[3]}
          %)
        </p>
        <p className="text-center font-normal px-6 pt-16 group-hover:text-white text-transparent">
          Killers are highly competitive and enjoy the thrill of competition. They are often strategic thinkers who thrive on the challenge of outsmarting and defeating other players. They can be ruthless and have a strong desire to come out on top. They may struggle with losing and may become frustrated when they don&apos;t win. They are also more likely to be attracted to games that have a strong PvP (player vs player) component.
        </p>
      </div>
    </div>
  );
};

export default Result;
