import axios from '../axiosConfig';

export const getRelatedClubs = async (clubIds) => {
  const query = clubIds.join(',');
  const res = await axios.get(
    `/api/clubs/content-recommendation?clubIds=${query}`
  );
  return res.data;
};
