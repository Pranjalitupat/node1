let arr = [23, 2, 4, 77, 90, 76, 4];


let largest = 0;
let smallest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
    if (arr[i] < smallest) {
        smallest=arr[i];
    }
}
console.log('largest element is ' + largest);
console.log('smallest element is ' + smallest);