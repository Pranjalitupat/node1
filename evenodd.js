let arr=[1,2,3,4,5,6,7,8,10];
let count=0;
let c=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){

        console.log(arr[i]+'is even');
        count++;
    }
    else{
        console.log(arr[i] +'is odd');
        c++;
    }
}
console.log( 'even count is'+count);
console.log( 'odd count c is'+c);

