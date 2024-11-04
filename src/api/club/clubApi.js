// api/clubApi.js
import axios from '../axiosConfig';

const BASE_URL =
  'http://ec2-15-165-135-235.ap-northeast-2.compute.amazonaws.com:8080/api';

export const searchClubs = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/clubs`, {
      params: { search: query }, //   /clubs/search=query 이렇게 검색됨. 쿼리 파라미터.
    });
    return response.data;
  } catch (error) {
    console.error('Error searching clubs:', error);
    throw error;
  }
};

export const getCategoryClubs = async (categoryId) => {
  try {
    const response = await axios.get(`/categories/${categoryId}/clubs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching category clubs:', error);
    throw error;
  }
};
