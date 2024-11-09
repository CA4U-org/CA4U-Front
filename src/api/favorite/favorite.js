import axios from '../axiosConfig';

// 즐겨찾기 토글 (추가/제거)
export const toggleFavorites = async (clubId) => {
  try {
    const response = await axios.post(
      `/api/clubs/${clubId}/favorites`,
      {},
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error toggling favorite:', error);
    throw error;
  }
};

// 즐겨찾기 목록 조회
export const getFavorites = async () => {
  try {
    const response = await axios.get('/api/clubs/favorites', {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching favorites:', error);
    throw error;
  }
};
