import React from 'react'
import { useParams } from 'react-router-dom'
import api from '../api/dummyApi'

const CallDetail = () => {

  //get the id from the params and using it to get call details
  const { id } = useParams()
  const call = api.getCallDetail(id);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">

      {/* Number/Name and Archived indicator */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl font-semibold">{call.from}</p>
        <p className={`text-xs font-semibold ${call.is_archived ? 'text-red-600' : 'text-green-600'}`}>
          {call.is_archived ? 'Archived' : ''}
        </p>
      </div>

      <div className='space-y-10 text-base'>

        {/* Recent Call info */}
        <div className='bg-gray-200 rounded-md p-3 items-center justify-between'>
        
          <div className='flex justify-between mb-2'>
            <p className="text-gray-600 font-semibold">Recent call at</p>
            <p>{call.created_at}</p>        
          </div>
          <div className='flex justify-between'>
            <p className="text-gray-600 items-center">duration: {call.duration} s</p>
            <p> {call.call_type}</p>
          </div>

        </div>

        {/* Call location */}
        <div className='bg-gray-200 rounded-md p-3 flex justify-between'>
          <p className="text-gray-600 font-semibold mb-1">Aircall number via</p>
          <p>{call.via}</p>
        </div>        
      </div>

    </div>
  );
}

export default CallDetail