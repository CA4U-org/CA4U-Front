export class SearchCondition {
  query;
  isRecruit;
  campusScope;
  collegeId;
  majorId;
  categoryIds;
  clubTypes;
  sizes;

  constructor() {
    this.query = '';
    this.isRecruit = null;
    this.campusScope = null;
    this.collegeId = '';
    this.majorId = '';
    this.categorㅑㄷㄴ = [];
    this.clubTypes = [];
    this.sizes = [];
  }

  isNoneSelected() {
    return (
      this.query === '' &&
      this.isRecruit === null &&
      this.campusScope === null &&
      this.collegeId === '' &&
      this.majorId === '' &&
      this.categoryIds.length === 0 &&
      this.clubTypes.length === 0 &&
      this.sizes.length === 0
    );
  }
}
