import React from 'react'
import api from "../api/dummyApi"
import { Archive, Info, PhoneIncoming, PhoneOutgoing, Voicemail } from "lucide-react"
import { Link } from 'react-router-dom';

const ActivityFeed = () => {

  const handleArchiveToggle = (callId) => {
    api.archiveCall(callId);
  }
  const activities = api.getActivities();

  const archivedActivities = activities.filter((call) => call.is_archived);


  return (
    <div className='mt-5'>

      <div className="max-h-96 overflow-y-auto ">
        <ul className="flex flex-col gap-4 items-center">
            {archivedActivities.map((call) => (
              
              <Link to={`/${call.id}`} className='w-5/6 '>

                <div key={call.id} className="flex items-center gap-4 bg-gray-200 p-4 rounded-lg hover:bg-green-200 cursor-pointer">

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
                
              </Link>

            ))}
        </ul>
      </div>
 
    </div>
  )
}

export default ActivityFeed