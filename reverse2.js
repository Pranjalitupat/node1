function rev(n){
    let revno=0;
    while(n>0){
    let r=n%10;
    revno=revno*10+r;
     n=n/10;
    }
    console.log(r);

}
rev(876);