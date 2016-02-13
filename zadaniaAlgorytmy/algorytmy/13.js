function euklides(a,b){
    //sprawdzamy czy a jest rozne od b
    //http://eduinf.waw.pl/inf/utils/010_2010/images/0208_09.gif
    
    if(a==b){
        return a;
    };
    
    while (a!=b){
        if (a>b){
            a=a-b;
        }else if(b>a){
            b=b-a;
        }
    };
    return a;
    
};

console.log(euklides(54,8));