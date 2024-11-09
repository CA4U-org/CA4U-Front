import axios from '../axiosConfig';

export async function updateStudentInfo(name, department, major) {
  try {
    const resp = await axios.patch('/api/v1/users/me', {
      name,
      department,
      major,
    });

    return resp;
  } catch (err) {
    console.error(err);
  }
}
