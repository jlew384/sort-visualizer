import { SortAnimation } from "../helpers/SortAnimation";

export function quickSort(array) {
    const anim = new SortAnimation();

    let partition = (arr, start, end) => {
      let pivot = arr[end];

      let i = start - 1;
      for(let j = start; j <= end - 1; j++) {
        anim.addCompareStep(j, end);
        if(arr[j] < pivot) {
          i++;
          if(i !== j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            anim.addSwapStep(i, j);
          }          
        }
      }

      if(i + 1 !== end) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[end];
        arr[end] = temp;
        anim.addSwapStep(i + 1, end);
      }
      
      return i + 1;
    }

    let sort = (arr, start, end) => {
      if(start < end) {
        let pivot  = partition(arr, start, end);

        sort(arr, start, pivot - 1);
        sort(arr, pivot + 1, end);
      }
    }

    let arr = array.slice();

    sort(arr, 0 , arr.length - 1);
    anim.addCompleteStep();
    return anim;
  }