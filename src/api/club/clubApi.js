// api/clubApi.js
import axios from '../axiosConfig';
import { CLUB_LIST } from '../../page/search/ClubData';

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

export const findClubsWithCondition = (condition) => {
  return CLUB_LIST.filter((c) => c.clubNm.includes(condition.query))
    .filter((c) => {
      if (condition.isRecruit !== null) {
        return c.isRecruit === condition.isRecruit;
      }
      return true;
    })
    .filter((c) => {
      if (condition.campusScope !== null) {
        return c.campusScope === condition.campusScope;
      }
      return true;
    })
    .filter((c) => {
      if (condition.collegeId !== '') {
        return c.collegeId === condition.collegeId;
      }
      return true;
    })
    .filter((c) => {
      if (condition.majorId !== '') {
        return c.majorId === condition.majorId;
      }
      return true;
    })
    .filter((c) => {
      if (condition.categories.length > 0) {
        return condition.categories.includes(c.category);
      }
      return true;
    })
    .filter((c) => {
      if (condition.clubTypes.length > 0) {
        return condition.clubTypes.includes(c.clubType);
      }
      return true;
    })
    .filter((c) => {
      if (condition.sizes.length > 0) {
        return condition.sizes.includes(c.size);
      }
      return true;
    });
};
