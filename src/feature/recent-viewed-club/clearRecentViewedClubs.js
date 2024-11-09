import { EncodedLocalStorage } from '../../shared/EncodedLocalStorage';

export function clearRecentViewedClubs() {
  EncodedLocalStorage.deleteItem('recent-viewed-clubs');
}
