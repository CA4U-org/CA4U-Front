import axios from '../axiosConfig';

export async function getUserRecommendedClubs(userId) {
  try {
    const resp = await axios.get('/api/clubs/user-recommendation');
    return resp.data;
  } catch (error) {
    return error.response.data;
  }
}
