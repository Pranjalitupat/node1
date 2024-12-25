let arr=['a','b','c','a','e','f','i'];
function vowel(){
    let count=0;
for(let x=0;x<arr.length;x++){
    if(arr[x]=='a'||arr[x]=='e'||arr[x]=='i'){
        count ++;
    }
}
console.log('totalcount of vowels is '+count);

}
vowel();