export const isArraySorted = (array) => {
    for(let i = 1; i < array.length; i++) {
        if(array[i - 1] > array[i]) {
            return false;
        }
    }
    return true;
}