import { toSortedArray } from '../../../../../utils/sort-files';
import { isEmpty } from 'lodash';

export function getTargetEditor(challengeFiles) {
  if (isEmpty(challengeFiles)) return null;
  else {
    let targetEditor = Object.values(challengeFiles).find(
      ({ editableRegionBoundaries }) => !isEmpty(editableRegionBoundaries)
    )?.key;

    // fallback for when there is no editable region.
    return targetEditor || toSortedArray(challengeFiles)[0].key;
  }
}
