let arr=[5,3,7,9,4,2,6];
 function ascen(){
    for(let i=0;i<=arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(arr);
 }
 ascen();

