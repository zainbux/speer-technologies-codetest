const BASE_URL = "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/";

const api = {
  getActivities: async () => {
    const response = await fetch(`${BASE_URL}/activities`);
    return response.json();
  },

  getCallDetail: async (callId) => {
    const response = await fetch(`${BASE_URL}/activities/${callId}`);
    return response.json();
  },

  archiveCall: async (callId) => {
    const response = await fetch(`${BASE_URL}/activities/${callId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ is_archived: true }),
    });
    return response.json();
  },

  resetCalls: async () => {
    const response = await fetch(`${BASE_URL}/reset`, {
      method: 'PATCH',
    });
    return response.json();
  },
};

export default api;
