

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

function pot(a,b){
    if(b == 0){
        return 1;
    }else{
        return a * pot(a,b-1);
    }
}

console.log(potegaFunction(2,3));
console.log(pot(2,3));

Math.abs(-1423);