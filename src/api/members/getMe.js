import axios from 'axios';

import { SERVER_URL } from '../../shared/const/consts';

export async function getMe() {
  try {
    const res = await axios.get(`${SERVER_URL}/api/v1/users/me`);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
}
