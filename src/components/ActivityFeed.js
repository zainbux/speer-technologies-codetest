import React from 'react'
import api from "../api/dummyApi"
import { Archive, Info, PhoneIncoming, PhoneOutgoing, Voicemail } from "lucide-react"
import { Link } from 'react-router-dom';
import ArchiveButton from './ArchiveButton';

const ActivityFeed = () => {

  const handleArchiveToggle = (callId) => {
    api.archiveCall(callId);
  }
  const activities = api.getActivities();

  const unarchivedActivities = activities.filter((call) => !call.is_archived);

  return (
    <div >
    
      <ArchiveButton/>

      <div className="max-h-96 overflow-y-auto mt-5">
        <ul className="flex flex-col gap-4 items-center">
            {unarchivedActivities.map((call) => (
              
                <div key={call.id} className="flex items-center gap-4 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 shadow-md w-5/6">

                    <div className="text-2xl">
                        {call.direction === 'inbound' ? (
                                <PhoneIncoming />
                            ) : (
                                <PhoneOutgoing />
                            )}
                    </div>

                    <div className="flex flex-col">
                      {call.call_type === ('missed' || 'voicemail') ? (
                        <p className="font-semibold text-lg">{call.from}</p>
                        ) : (
                        <p className="font-semibold text-lg text-red-700">{call.from}</p>
                      )}
                    <p>{call.via}</p>
                    </div>

                    <div className="ml-auto items-center justify-center">
                      <div className='flex mx-auto mb-4 px-2 justify-between'>

                        <Link to={`/${call.id}`}>
                          <Info className='hover:cursor-pointer hover:text-green-600'/>                        
                        </Link>
                        
                        <Archive onClick={handleArchiveToggle} className='hover:cursor-pointer hover:text-red-500'/> 
                        
                      </div>

                      <p className='text-xs'>{call.created_at}</p>
                    </div>

                </div>   


            ))}
        </ul>
      </div>
 
    </div>
  )
}

export default ActivityFeed