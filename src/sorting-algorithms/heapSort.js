import { SortAnimation } from "../helpers/SortAnimation";

export function heapSort(anim) {

    let heapify = (arr, length, i) => {
      let parent = i;
      let leftChild = 2 * i + 1;
      let rightChild = 2 * i + 2;


      if(leftChild < length) {
        anim.addCompareStep(parent, leftChild);
        if(arr[leftChild] > arr[parent]) {
          parent = leftChild;
        }
      }

      if(rightChild < length) {
        anim.addCompareStep(parent, rightChild);
        if(arr[rightChild] > arr[parent]) {          
          parent = rightChild;
        }
      } 

      if(parent !== i) {
        let temp = arr[i];
        arr[i] = arr[parent];
        arr[parent] = temp;
        anim.addSwapStep(i, parent);

        heapify(arr, length, parent);
      }
    }

    let sort = (arr) => {
      let length = arr.length;

      for(let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(arr, length, i);
      }

      for(let i = length - 1; i > 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        anim.addSwapStep(i, 0);

        heapify(arr, i, 0);
      }
    }

    let arr = anim.array.slice();
    sort(arr);
    anim.addCompleteStep();
    return anim;
  }