

//Napisz funkcj� licz�c� a do pot�gi b, przy za�o�eniu (i sprawdzeniu czy) b jest wi�ksze od 0. 
//Przygotuj dwie wersje:  iteracyjn�


var potegaFunction=function(a,b){
   
    var result=a;
   
    if(b>0){
        
        for(var i=1;i<b;i++){
            result=result*a;
        }
     
         return result;
    }
    else{
        console.log("bledny argument 'b'");
    }
    
}

console.log(potegaFunction(2,3));