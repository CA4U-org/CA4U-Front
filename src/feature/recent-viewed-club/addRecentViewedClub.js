import { EncodedLocalStorage } from '../../shared/EncodedLocalStorage';
import { RecentQueue } from '../../shared/RecentQueue';

export function addRecentViewedClub(clubId) {
  const jsonRecentViewedClubs = EncodedLocalStorage.getItem(
    'recent-viewed-clubs'
  );

  const recentViewedClubs = jsonRecentViewedClubs
    ? RecentQueue.fromJson(jsonRecentViewedClubs)
    : new RecentQueue(5);

  recentViewedClubs.push(clubId);

  EncodedLocalStorage.setItem(
    'recent-viewed-clubs',
    recentViewedClubs.toJsonObject()
  );
}
