import { EncodedLocalStorage } from '../../shared/EncodedLocalStorage';

export function getRecentViewedClubs() {
  const jsonRecentViewedClubs = EncodedLocalStorage.getItem(
    'recent-viewed-clubs'
  );

  if (!jsonRecentViewedClubs) {
    return [];
  } else {
    return jsonRecentViewedClubs.queue;
  }
}
