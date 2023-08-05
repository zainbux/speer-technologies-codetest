// The hardcoded data
const calls = [
    {
      id: 1,
      created_at: "2023-08-03 09:15",
      direction: "inbound",
      from: "+123456890",
      to: "+9876543210",
      via: "Whatsapp Audio",
      duration: 300,
      is_archived: false,
      call_type: "answered"
    },
    {
      id: 2,
      created_at: "2023-08-03 11:30",
      direction: "outbound",
      from: "Elon Musk",
      to: "+1234567890",
      via: "phone",
      duration: 180,
      is_archived: true,
      call_type: "answered"
    },
    {
      id: 3,
      created_at: "2023-08-03 1:45",
      direction: "inbound",
      from: "+9876543210",
      to: "+1234567890",
      via: "mobile",
      duration: 0,
      is_archived: false,
      call_type: "missed"
    },
    {
      id: 4,
      created_at: "2023-08-03 4:00",
      direction: "inbound",
      from: "John W",
      to: "+1111111111",
      via: "phone",
      duration: 120,
      is_archived: true,
      call_type: "voicemail"
    },
    {
      id: 5,
      created_at: "2023-08-03 10:30",
      direction: "outbound",
      from: "Justin Turdeau",
      to: "+1234567890",
      via: "phone",
      duration: 180,
      is_archived: true,
      call_type: "answered"
    },
    {
      id: 6,
      created_at: "2023-08-03 2:25",
      direction: "inbound",
      from: "+14162329089",
      to: "+1234567890",
      via: "mobile",
      duration: 0,
      is_archived: false,
      call_type: "voicemail"
    },
    {
      id: 7,
      created_at: "2023-08-03 01:07",
      direction: "inbound",
      from: "J. Cole",
      to: "+1111111111",
      via: "phone",
      duration: 120,
      is_archived: true,
      call_type: "voicemail"
    },
    {
      id: 8,
      created_at: "2023-08-03 17:20",
      direction: "inbound",
      from: "Kim K",
      to: "+1111111111",
      via: "phone",
      duration: 120,
      is_archived: true,
      call_type: "voicemail"
    },
    {
      id: 9,
      created_at: "2023-08-03 10:30",
      direction: "outbound",
      from: "BAYC founder",
      to: "+1234567890",
      via: "phone",
      duration: 180,
      is_archived: true,
      call_type: "answered"
    },
    {
      id: 10,
      created_at: "2023-08-03 22:05",
      direction: "inbound",
      from: "Luka Doncic",
      to: "+1234567890",
      via: "mobile",
      duration: 0,
      is_archived: false,
      call_type: "voicemail"
    },
    {
      id: 11,
      created_at: "2023-08-03 14:00",
      direction: "inbound",
      from: "Ousmane Dembele",
      to: "+1111111111",
      via: "phone",
      duration: 120,
      is_archived: true,
      call_type: "voicemail"
    }
  ];

const api = {
    getActivities: () => {
      return calls;
    },
  
    getCallDetail: (callId) => {
      const numericCallId = parseInt(callId);
      return calls.find((call) => call.id === numericCallId);
    },
  
    archiveCall: (callId) => {
      const callToArchive = calls.find((call) => call.id === callId);
      if (callToArchive) {
        callToArchive.is_archived = !callToArchive.is_archived;
        return callToArchive;
      }
      return null;
    },
  
    resetCalls: () => {
      calls.forEach((call) => {
        call.is_archived = false;
      });
      return true;
    },
  };

  export default api;

  
