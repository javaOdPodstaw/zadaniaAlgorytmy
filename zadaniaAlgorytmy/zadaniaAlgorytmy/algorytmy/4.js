/*
// 4. Napisz program sprawdzający czy podana przez użytkownika liczba n jest
// liczbą Amstronga (suma dzielników danej liczby jest jej równa).

function armstrong(arg){
	var liczba = arg.toString().split('');
	console.log(liczba);
	var wynik = 0;
	for (var i=0; i<liczba.length; i++) {
		wynik+=Math.pow(liczba[i], liczba.length);
	}
	if (wynik==arg) {
		console.log(arg+' jest liczba armstronga');
		return true;
	}else {
		console.log(arg +' nie jest liczba armstronga');
		return false;
	}


}

armstrong(1635);

*/
