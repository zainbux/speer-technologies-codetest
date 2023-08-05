import React from 'react';
import { Sliders } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  //useLocation hook to animate the nav!!!!!
  const location = useLocation();

  return (
    <div>
      {/* links to different tabs and settings icon */}
      <div className='flex items-center justify-center text-base h-14 bg-slate-500 text-white p-5 drop-shadow-lg'>
        <ul className='flex gap-x-5 '>
          <li className={`hover:underline cursor-pointer ${location.pathname === '/' ? 'text-green-400' : ''}`}>
            <Link to="/">Activity Feed</Link>
          </li>
          <li className={`hover:underline cursor-pointer ${location.pathname === '/archived' ? 'text-green-400' : ''}`}>
            <Link to="/archived">Archived</Link>
          </li>
        </ul>
        <div className='flex flex-1 justify-end cursor-pointer'>
          <Sliders />
        </div>
      </div>
    </div>
  );
};

export default Nav;
