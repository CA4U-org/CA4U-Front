// api/clubApi.js
import axios from '../axiosConfig';

export const searchClubs = async (query) => {
  try {
    const response = await axios.get(`/api/clubs`, {
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
    const response = await axios.get(`/api/categories/${categoryId}/clubs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching category clubs:', error);
    throw error;
  }
};

// 클럽 상세 정보를 가져오는 API 추가 예시
export const getClubDetail = async (clubId) => {
  try {
    const response = await axios.get(`/api/clubs/${clubId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching club detail:', error);
    throw error;
  }
};
