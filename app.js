var peakIndexInMountainArray = function(arr) {
    let index = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[index] < arr[i]) index = i
    }
    return index
};