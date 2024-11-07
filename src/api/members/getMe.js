import axios from '../axiosConfig';

export async function getMe() {
  try {
    const res = await axios.get('/api/v1/users/me');
    return res.data;
  } catch (err) {
    return err.response.data;
  }
}
