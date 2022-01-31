// Tri à bulles (bubble sort)

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

console.log(bubbleSort([2020, 1998, 2018, 1986, 2006]));
