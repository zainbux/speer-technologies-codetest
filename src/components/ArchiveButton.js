import { Archive } from 'lucide-react'
import React from 'react'

function ArchiveButton() {
  return (
    <div>
        <button className='bg-gray-200 h-10 w-4/6 mx-auto rounded-b-lg flex items-center justify-center space-x-3 hover:bg-green-300 border-2 cursor-pointer focus:outline-none active:border-green-400'>
            <Archive/>
            <p className='font-semibold'>Archive all calls</p>
        </button>
    </div>
  )
}

export default ArchiveButton