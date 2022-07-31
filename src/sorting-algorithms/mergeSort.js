import { SortAnimation } from "../helpers/SortAnimation";

export function mergeSort(anim) {
    let nextGap = (gap) => {
      if(gap <= 1) {
        return 0;
      }
      return Math.floor(Math.ceil(gap / 2.0));
    }

    let merge = (arr, start, end) => {
      let gap = end - start + 1;
      for(gap = nextGap(gap); gap > 0 ; gap = nextGap(gap)) {
        for(let i = start; i + gap <= end; i++) {
          let j = i + gap;
          anim.addCompareStep(i, j);
          if(arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            anim.addSwapStep(i, j);
          }
        }
      }
    }

    let sort = (arr, start, end) => {
      if(start === end) {
        return;
      }

      let mid = Math.floor((start + end) / 2);

      sort(arr, start, mid);
      sort(arr, mid + 1, end);
      merge(arr, start, end);
    }

    
    let arr = anim.array.slice();
    sort(arr, 0, arr.length);
    anim.addCompleteStep();
    return anim;

    // let sort = (array) => {
    //   if(array.length === 1) return array;

    //   const middleIndex = Math.floor(array.length / 2);
    //   const firstHalf = sort(array.slice(0, middleIndex));
    //   const secondHalf = sort(array.slice(middleIndex));

    //   const sortedArray = [];
    //   let i = 0;
    //   let j = 0;
    //   while(i < firstHalf.length && j < secondHalf.length) {
    //     if(firstHalf[i] < secondHalf[j]) {
    //       sortedArray.push(firstHalf[i++]);
    //     }
    //     else {
    //       sortedArray.push(secondHalf[j++]);
    //     }
    //   }
    //   while(i < firstHalf.length) sortedArray.push(firstHalf[i++]);
    //   while(j < secondHalf.length) sortedArray.push(secondHalf[j++]);
    //   return sortedArray;
    // }

    // console.log("merge sort");
    // console.log(sort(arr));
  }