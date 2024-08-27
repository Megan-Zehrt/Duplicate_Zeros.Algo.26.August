// 1089. Duplicate Zeros



// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 





var duplicateZeros = function(arr) {
    let possibleDups = 0;
    let length = arr.length - 1;

    // Count the number of zeros to be duplicated
    for (let i = 0; i <= length - possibleDups; i++) {
        if (arr[i] === 0) {
            if (i === length - possibleDups) {
                arr[length] = 0;  // Set the last element to 0
                length -= 1;  // Reduce the length for the final array processing
                break;
            }
            possibleDups++;
        }
    }

    // Start backwards from the last element which would be part of the new array
    let last = length - possibleDups;

    // Copy the items backward
    for (let i = last; i >= 0; i--) {
        if (arr[i] === 0) {
            arr[i + possibleDups] = 0;
            possibleDups--;
            arr[i + possibleDups] = 0;  // Duplicate the zero
        } else {
            arr[i + possibleDups] = arr[i];
        }
    }
};
