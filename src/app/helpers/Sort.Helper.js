// **==========================================================================
// **          Array Sort (using quick sort due to performance)
// **==========================================================================

const partition = (arr, key, start, end, isDescending) => {
  const pivotValue = arr[end][key];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (
      (!isDescending && arr[i][key] < pivotValue) ||
      (isDescending && arr[i][key] > pivotValue)
    ) {
      [arr[i][key], arr[pivotIndex][key]] = [arr[pivotIndex][key], arr[i][key]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex][key], arr[end][key]] = [arr[end][key], arr[pivotIndex][key]];
  return pivotIndex;
};

const quickSort = (arr, key, start, end, isDescending) => {
  if (start >= end) return;
  const pivot = partition(arr, key, start, end, isDescending);
  quickSort(arr, key, start, pivot - 1, isDescending);
  quickSort(arr, key, pivot + 1, end, isDescending);
};

export default ({ array, sortBy, isDescending }) =>
  quickSort(array, sortBy, 0, array.length - 1, isDescending);
