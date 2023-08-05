import React from 'react'

import { Archive } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify';

function UnarchiveButton({ archivedActivities, handleArchiveToggle }) {

  const handleUnarchiveAll = () => {
    archivedActivities.forEach((call) => {
      handleArchiveToggle(call.id);
    });

    toast.success('All calls unarchived!', {
      position: 'bottom-center',
      autoClose: 1000, 
    });

  };

  return (
    <div>
        <button onClick={handleUnarchiveAll} className='bg-gray-200 h-10 w-4/6 mx-auto rounded-b-lg flex items-center justify-center space-x-3 hover:bg-green-300 border-2 cursor-pointer focus:outline-none active:border-green-400'>
            <Archive/>
            <p className='font-semibold'>Unarchive all calls</p>
        </button>
    </div>
  )
}

export default UnarchiveButton