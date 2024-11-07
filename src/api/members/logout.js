import axios from '../axiosConfig';

export async function logout() {
  try {
    const resp = await axios.post('/logout');
    console.log(resp);
  } catch (err) {
    console.error(err);
  }
}
