function silnia(arg){
    var liczba = 1;
    for (var i = 1; i <= arg; i++) {
        liczba *= i;
        
    };
    return liczba;
};
console.log(silnia(3));



function newton(n,k){
    var licznik = silnia(n);
    console.log(licznik);
    var mianownik = silnia(k)*(silnia(n-k));
    console.log(mianownik);
    return (licznik/mianownik);
}; 


console.log(newton(8,2));



