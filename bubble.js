let arr=[6,3,4,2,9];
for(let j=0;j<=arr.length-2;j++){
for(let i=0;i<=arr.length-2;i++){
if(arr[i]>arr[i+1]){
    let temp=arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=temp;
}
}
}
console.log(arr);