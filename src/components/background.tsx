import React from 'react';

import socializerIcon from '@assets/socializer.svg';
import explorerIcon from '@assets/explorer.svg';
import achieverIcon from '@assets/achiever.svg';
import killerIcon from '@assets/killer.svg';

const Background = () => (
  <div className="absolute background w-screen h-screen flex -z-50">
    <div className="bg-socializer w-1/4 flex flex-col items-center"><img src={socializerIcon} className="px-2 pt-10 w-[150px] h-[150px] max-h-[25%]" alt="Socializer icon" /></div>
    <div className="bg-explorer w-1/4 flex flex-col items-center"><img src={explorerIcon} className="px-2 pt-10 w-[150px] h-[150px] max-h-[25%]" alt="Explorer icon" /></div>
    <div className="bg-achiever w-1/4 flex flex-col items-center"><img src={achieverIcon} className="px-2 pt-10 w-[150px] h-[150px] max-h-[25%]" alt="Achiever icon" /></div>
    <div className="bg-killer w-1/4 flex flex-col items-center"><img src={killerIcon} className="px-2 pt-10 w-[150px] h-[150px] max-h-[25%]" alt="Killer icon" /></div>
  </div>
);

export default Background;
