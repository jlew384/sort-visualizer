export function generateRandomArray(length) {
    let arr = [];
    for(let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 99) + 1);
    }

    return arr;
}