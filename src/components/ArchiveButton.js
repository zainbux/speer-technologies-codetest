import { Archive } from 'lucide-react'
import React from 'react'
import { toast } from 'react-toastify';

const ArchiveButton = ({ unarchivedActivities, handleArchiveToggle }) => {

  // archive all handler that goes through the filteredCalls and toggles its archived value to true
  const handleArchiveAll = () => {
    unarchivedActivities.forEach((call) => {
      handleArchiveToggle(call.id);
    });

    // Show the toast when the unarchive button is used
    toast.success('All calls archived!', {
      position: 'bottom-center',
      autoClose: 1000, 
    });

  };

  return (
    <div>
        <button onClick={handleArchiveAll} className='bg-gray-200 h-10 w-4/6 mx-auto rounded-b-lg flex items-center justify-center space-x-3 hover:bg-green-300 border-2 cursor-pointer focus:outline-none active:border-green-400'>
            <Archive/>
            <p className='font-semibold'>Archive all calls</p>
        </button>
    </div>
  )
}

export default ArchiveButton