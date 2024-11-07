export class EncodedLocalStorage {
  // Base64 인코딩하여 저장
  static setItem(key, value) {
    try {
      const encodedKey = btoa(encodeURIComponent(key)); // Base64 인코딩
      const jsonString = JSON.stringify(value); // JSON 문자열로 변환
      const encodedValue = btoa(encodeURIComponent(jsonString)); // Base64 인코딩
      localStorage.setItem(encodedKey, encodedValue);
    } catch (e) {
      console.error('Error encoding value for localStorage:', e);
    }
  }

  // Base64 디코딩하여 가져오기 (JSON 객체 반환)
  static getItem(key) {
    try {
      const encodedKey = btoa(encodeURIComponent(key)); // Base64 인코딩
      const encodedValue = localStorage.getItem(encodedKey);
      if (encodedValue) {
        const decodedValue = decodeURIComponent(atob(encodedValue)); // Base64 디코딩
        return JSON.parse(decodedValue); // JSON 객체로 변환
      }
      return null;
    } catch (e) {
      console.error('Error decoding value from localStorage:', e);
      return null;
    }
  }
}
