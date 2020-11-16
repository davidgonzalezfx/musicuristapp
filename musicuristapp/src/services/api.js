import { create } from 'axios';

const createApi = () => {
  
  const api = create({
    timeout: 50000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  });

  const getTracks = (query) => api.get(`/search?q=${query}`);

  return {
    getTracks,
  };
};

// let's return back our create method as the default.
export default createApi;