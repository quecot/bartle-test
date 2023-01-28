/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

import socializerIcon from '@assets/socializer.svg';
import explorerIcon from '@assets/explorer.svg';
import achieverIcon from '@assets/achiever.svg';
import killerIcon from '@assets/killer.svg';

const Result = () => {
  const [globalResults, setGlobalResults] = useState([25, 25, 25, 25]);

  useEffect(() => {
    // Implement global results fetching from backend with axios
  }, []);

  return (
    <div className="absolute top-0 w-screen h-screen flex">
      <div className="group w-1/4 flex flex-col gap-4 text-white font-bold items-center hover:backdrop-blur">
        <img src={socializerIcon} className="px-2 pt-10 w-[125px] h-[125px] max-h-[25%]" alt="Socializer icon" />
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
        <img src={explorerIcon} className="px-2 pt-10 w-[125px] h-[125px] max-h-[25%]" alt="Explorer icon" />
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
        <img src={achieverIcon} className="px-2 pt-10 w-[125px] h-[125px] max-h-[25%]" alt="Achiever icon" />
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
        <img src={killerIcon} className="px-2 pt-10 w-[125px] h-[125px] max-h-[25%]" alt="Killer icon" />
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
