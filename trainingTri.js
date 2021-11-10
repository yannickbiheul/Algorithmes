// Tri à bulles
function bubbleSort(arr) {
    let isSwapped;

    do {
        isSwapped = false;
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSwapped = true;
            }
        }
    } while (isSwapped);

    return arr;
}

let array = [18, 1981, 12, 7, 48, 59, 1200, 22, 29, 36];

console.log(bubbleSort(array));