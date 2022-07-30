import { SortAnimation } from "../helpers/SortAnimation";

export function selectionSort(array) {
    const anim = new SortAnimation();
    let arr = array.slice();

    for(let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for(let j = i + 1; j < arr.length; j++){
        anim.addCompareStep(j, minIndex);
        if(arr[j] < arr[minIndex]) {
          minIndex = j;
          
        }
        
      }

      if(minIndex != i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        anim.addSwapStep(i, minIndex);
      }      
    }

    anim.addCompleteStep();
    return anim;
  }