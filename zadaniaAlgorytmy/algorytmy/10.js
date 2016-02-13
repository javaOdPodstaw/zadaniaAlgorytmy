function day(x){
    switch(x){
        case 1:
            console.log('Poniedzialek');
            break;
        case 2:
            console.log('Wtorek');
            break;
        case 3:
            console.log('Sroda');
            break;
        case 4:
            console.log('Czwartek');
            break;
        case 5:
            console.log('Piatek');
            break;
        case 6:
            console.log('Sobota');
            break;
        case 7:
            console.log('Niedziela');
            break;
        default:
            console.log('LIczba poza zakresem');
        
    }
};

day(0);
function day2(y){
    var table = ['Poniedzialek','Wtorek','Sroda','Czwartek','Piatek','Sobota','Niedziela'];
    y=y+1; 
    if (y>8){
        return 'Liczba poza zakresem';
    }else{
       
        return table[y-2]; 
    }
}
console.log(day2(7));