import { SortAction, SortAnimation } from "../helpers/SortAnimation";

export function bubbleSort(array) {
    let arr = array.slice();
    let anim = new SortAnimation();

    for(let i = 0; i < arr.length; i++) {
      let sorted = true;
      for(let j = 0; j < arr.length - 1; j++) {
        anim.addCompareStep(j, j + 1);
        if(arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          sorted = false;

          anim.addSwapStep(j,  j + 1);
        }
      }

      if(sorted) {
        break;
      }
    }

    anim.addCompleteStep();
    return anim;
  }