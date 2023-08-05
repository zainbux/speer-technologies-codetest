import React from 'react'
import { Sliders } from 'lucide-react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <div className='flex items-center justify-center text-base h-14 bg-slate-500 text-white p-5 drop-shadow-lg'>
            <ul className='flex gap-x-5 '>
                <li className='hover:underline cursor-pointer'>
                    <Link to="/">Activity Feed</Link> 
                </li>

                <li className='hover:underline cursor-pointer'>
                    <Link to="/archived">Archived</Link> 
                </li>
            </ul>    
            <div className='flex flex-1 justify-end cursor-pointer'>
                <Sliders />
            </div>  
        </div>        


    </div>

  )
}

export default Nav