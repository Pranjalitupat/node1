let arr = [1, 3, 2, 59, 62, 54];

let smallest = arr[0];
let secsmall = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }

    if (arr[i] < smallest && secsmall < smallest) {
        secsmall = arr[i];
    }
}

console.log('smallest element is ' + smallest);
console.log('second smallest element is ' + secsmall);
