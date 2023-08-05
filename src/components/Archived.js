import React, { useState, useEffect } from 'react';
import api from "../api/dummyApi";
import { Archive, Info, PhoneIncoming, PhoneOutgoing, Voicemail } from "lucide-react";
import { Link } from 'react-router-dom';
import UnarchiveButton from './UnarchiveButton';

const ActivityFeed = () => {
  const [archivedActivities, setArchivedActivities] = useState([]);

  const fetchArchivedActivities = () => {
    const activities = api.getActivities();
    return activities.filter((call) => call.is_archived);
  };

  const handleArchiveToggle = (callId) => {
    api.resetCalls(callId);
  };

  useEffect(() => {
    const updatedArchivedActivities = fetchArchivedActivities();
    setArchivedActivities(updatedArchivedActivities);
  }, [archivedActivities]);

  return (
    <div>
      <UnarchiveButton archivedActivities={archivedActivities} handleArchiveToggle={handleArchiveToggle}/>

      <div className="max-h-96 overflow-y-auto mt-5">
        <ul className="flex flex-col gap-4 items-center">
          {archivedActivities.map((call) => (
            <Link to={`/${call.id}`} className='w-5/6 ' key={call.id}>
              <div className="flex items-center gap-4 bg-gray-200 p-4 rounded-lg hover:bg-gray-200 cursor-pointer">

                {/* Outgoing/Incoming call icon */}
                <div className="text-2xl">
                  {call.direction === 'inbound' ? (
                    <PhoneIncoming />
                  ) : (
                    <PhoneOutgoing />
                  )}
                </div>

                {/* caller number and called from */}
                <div className="flex flex-col">
                  {call.call_type === ('missed' || 'voicemail') ? (
                    <p className="font-semibold text-lg">{call.from}</p>
                  ) : (
                    <p className="font-semibold text-lg text-red-700">{call.from}</p>
                  )}
                  <p>{call.via}</p>
                </div>

                {/* call detail and archive buttons and call time/date*/}
                <div className="ml-auto items-center justify-center">
                  <div className='flex mx-auto mb-4 px-2 justify-end'>
                    <Link to={`/${call.id}`}>
                      <Info className='hover:cursor-pointer hover:text-blue-500'/>                        
                    </Link>

                  </div>
                  <p className='text-xs'>{call.created_at}</p>
                </div>

              </div>   
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ActivityFeed;
