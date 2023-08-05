import React, { useState, useEffect } from 'react';
import api from "../api/dummyApi";
import { Archive, Info, PhoneIncoming, PhoneOutgoing, Voicemail } from "lucide-react";
import { Link } from 'react-router-dom';
import ArchiveButton from './ArchiveButton';
import { toast } from 'react-toastify';

const ActivityFeed = () => {
  // state to store unarchived activities
  const [unarchivedActivities, setUnarchivedActivities] = useState([]);

  // fetch unarchived activities from API
  const fetchUnarchivedActivities = () => {
    const activities = api.getActivities();
    return activities.filter((call) => !call.is_archived);
  };

  // PATCH request to API for specific call - handler
  const handleArchiveToggle = (callId) => {
    api.archiveCall(callId);

  };

  // fetch the unarchived activities and update the state after archived 
  useEffect(() => {
    const updatedUnarchivedActivities = fetchUnarchivedActivities();
    setUnarchivedActivities(updatedUnarchivedActivities);
  }, []);

  // trigger the fetch function and update the state whenever the list changes due to archive action
  useEffect(() => {
    const updatedUnarchivedActivities = fetchUnarchivedActivities();
    setUnarchivedActivities(updatedUnarchivedActivities);
  }, [unarchivedActivities]);

  return (
    <div>

      <ArchiveButton unarchivedActivities={unarchivedActivities} handleArchiveToggle={handleArchiveToggle}/>

      {/* list of unarchived call cards */}
      <div className="max-h-96 overflow-y-auto mt-5">
        <ul className="flex flex-col gap-4 items-center">

          {unarchivedActivities.map((call) => (
            <div key={call.id} className="flex items-center gap-4 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 shadow-md w-5/6">

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
                <div className='flex mx-auto mb-4 px-2 justify-between'>
                  <Link to={`/${call.id}`}>
                    <Info className='hover:cursor-pointer hover:text-blue-500'/>                        
                  </Link>
                  <Archive onClick={() => handleArchiveToggle(call.id)} className='hover:cursor-pointer hover:text-red-500'/> 
                </div>
                <p className='text-xs'>{call.created_at}</p>
              </div>
            </div>   
            
          ))}

        </ul>
      </div>
    </div>
  );
}

export default ActivityFeed;
