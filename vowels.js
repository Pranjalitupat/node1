let arr=['a','b','c','e','f','i'];
function vowel(){
for(let x=0;x<arr.length;x++){
    if(arr[x]=='a'||arr[x]=='e'||arr[x]=='i'||arr[x]=='o'){
        console.log('vowel is  ' + arr[x]);
        
    }
}
}
vowel();