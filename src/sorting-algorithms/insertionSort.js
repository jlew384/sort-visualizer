import { SortAnimation } from "../helpers/SortAnimation";

export function insertionSort(anim) {
    let arr = anim.array.slice();
    for(let i = 1; i < arr.length; i++) {
      let j = i;
      for(let j = i; j > 0; j--) {
        anim.addCompareStep(j, j - 1);
        if(arr[j - 1] > arr[j]) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
          anim.addSwapStep(j , j - 1);
        }
      }
    }
    anim.addCompleteStep();
    return anim;
  }