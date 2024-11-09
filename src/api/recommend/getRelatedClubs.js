import axios from '../axiosConfig';

export const getRelatedClubs = async (clubId) => {
  const res = await axios.get(`/api/clubs/${clubId}/content-recommendation`);
  return res.data;
};
