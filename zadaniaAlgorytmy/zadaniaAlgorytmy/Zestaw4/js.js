//1. Napisz program liczący zarówno max jak i min w zadanej tablicy.

var tablica1 = [ 1, 2, 7, 6, 78, 89, 9 ];
function minMax(param) {
	if (param.length < 2) {
		return undefined;
	}
	var minMax = [ param[0], param[0] ];

	for (var i = 1; i < param.length; i++) {
		if (minMax[0] > param[i]) {
			minMax[0] = param[i];
		}
		if (minMax[1] < param[i]) {
			minMax[1] = param[i];
		}

	}
	return minMax;
}
console.log(" ");
console.log("minMax");
console.log(minMax(tablica1));

// 2. Napisz program liczący silnię.
function silnia(param) {
	var output = 1;
	for (var i = param; i > 0; i--) {
		output *= param;
		param--
	}
	return output;
}
console.log(" ");
console.log("silnia");
console.log(silnia(3));

// 3. Napisz program liczący dwumian Newtona (n nad k).
function newton(n, k) {
	var licznik = silnia(n);
	var mianownik = silnia(k) * (silnia(n - k));

	return (licznik / mianownik);
}
console.log(" ");
console.log("newton");
console.log(newton(5, 6));
// 4. Napisz program sprawdzający czy podana przez użytkownika liczba n jest
// liczbą Amstronga (suma dzielników danej liczby jest jej równa).

function armstrong(param) {
	var test = 0;
	var tmp = param.toString();
	var tab = tmp.split("");
	tmp = 0;
	for (var i = 0; i < tab.length; i++) {

		tmp += Math.pow(parseInt(tab[i]), tab.length);
	}
	if (tmp == param) {
		return true;
	} else {
		return false;
	}
	;
}
console.log(" ");
console.log("armstrong");
console.log(armstrong(154));

// 5. Napisz formularz, któy wyświetli informację o uzupełnionych polach.
// Formularz powinien zawierać pola; imię, nazwisko, płeć, wiek i wyświetlać
// odpowiednią informację po przesłaniu: "Witaj <imie> <nazwisko>! Jesteś <plec>
// i masz <wiek> lat!"

function formularz(imie, nazwisko, wiek, plec) {
	if (isNaN(parseInt(wiek))) {
		console.log("Dane są nieporawne!!!!!");
		return false;
	}
	;

	return "Witaj " + imie + " " + nazwisko + ". Jesteś " + plec + " i masz "
			+ wiek + " lat";
};

$(document).ready(function() {
	$(".tabliczka").append($(tabliczkaMnozenia()));

	$('a#getData').click(function() {
		console.log("test");
		var imie = $('#imie input').val();
		console.log(imie);
		var nazwisko = $('#nazwisko input').val();
		var wiek = $('#wiek input').val();
		var plec = $('#plec input').val();
		console.log(formularz(imie, nazwisko, wiek, plec));
	});

});

// 6. Napisz funkcję, która odwróci elementy tadanej tablicy (w kolejności). Nie
// korzystaj z metody .reverse();

function revArray(param) {
	if (param.lenght < 2) {
		return undefined;
	}
	var out = [];

	for (var i = (param.length - 1); i >= 0; i--) {
		out.push(param[i]);
	}
	return out;
}
console.log(" ");
console.log("revArray");
console.log(revArray([ 1, 2, 3, 4, 5, 6 ]));

// 7. Napisz funkcję, która zwróci średnią arytmetyczną zadanej tablicy.
function avg(param) {
	var out = 0;
	for (var i = 0; i < param.length; i++) {
		out += param[i];

	}
	out = out / param.length;
	return out;
}
console.log(" ");
console.log("avg");
console.log(avg([ 6, 6, 6, 6, 6 ]));

// 8. Napisz funkcję liczącą a do potęgi b, przy założeniu (i sprawdzeniu czy) b
// jest większe od 0. Przygotuj dwie wersje: rekurencyjną oraz iteracyjną.
function power(a, b) {
	if (b < 0) {
		return undefined;
	}
	if (b == 0) {
		return a;
	}
	var out = 1;
	// iteracyjnie
	// for (var i = 0; i < b; i++) {
	// out *= a;
	// }

	// rekurencyhnie
	out = rekurencja(a, b);

	function rekurencja(a, b) {
		if (b == 0)
			return 1;
		return a * rekurencja(a, --b);
	}
	return out;
}
console.log(" ");
console.log("power");
console.log(power(3, 2));
// 9. Napisz funkcję zwracającą wartość bezwzględną liczby.
function getPositive(param) {
	if (isNaN(param)) {
		return undefined;
	}
	if (param > 0) {
		return param;
	} else {
		return -param;
	}
}
console.log(" ");
console.log("bezwgledna");
console.log(getPositive(6));

// 10. Napisz funkcję, która dla zadanego dnia wyświetli jego dzień tygodnia
// (np. 1 - niedziela). (należy zbadać czy liczba mieści się w zakresie)
console.log(" ");
console.log("dzien tygodnia");

function week(param) {
	if (param < 1 || param > 7) {
		console.log("Podaj od 1 do 7!!!!");
		return undefined;
	}
	param--;
	var dni = [ "poniedizałek", "wtorek", "sroda", "czwartek", "piatek",
			"sobota", "niedizela" ];

	return dni[param];
}
console.log(week(5));

// 11. Napisz funkcję, która zwróci nazwę miesiąca dla przekazanej liczby
// (należy zbadać czy liczba mieści się w zakresie)

// identyczne jak wyzej. odpuszczam

// 12. Napisz funkcję licząca NWD wykorzystując algorytm Euklidesa.
console.log(" ");
console.log("NWS");

function NWD(param1, param2) {

	while (param1 != param2) {
		if (param1 > param2) {
			param1 -= param2;
		} else {
			param2 -= param1;
		}

	}
	if (param1 == 1) {
		console.log("nie ma wspolnego dzielnika...")
		return undefined
	}
	return param1;
}

console.log(NWD(8, 3));

// 13. Napisz funkcję, która przyjmuje jako argumenty: g - godziny, m - minuty,
// s - sekundy, a następnie zwraca podany czas w sekundach.
function getTime(g, m, s) {
	var time = 0;
	if (isNaN(g) || isNaN(m) || isNaN(s) || g < 0 || m < 0 || s < 0) {
		console.log("nieprawidłowe dane!!");
		return undefined;
	}
	time += 60 * 60 * g;
	time += 60 * m;
	time += s;
	return time;
}
console.log(" ");
console.log("getTime:");
console.log(getTime(0, 1, 1));

// 14. Użytkownik podaje dwie liczby całkowite a, b. algorytm ma za zadanie
// wypisać wszystkie
// parzyste liczby w kolejności rosnącej, a następnie wszystkie liczby
// nieparzyste w kolejności
// malejącej z przedziału <a;b>. niech a, b –liczby całkowite z zakresu 0-255.
// Np. dla danych
// wejściowych a=3, b=8,otrzymujemy plik wynikowy: 4, 6, 8, 7, 5, 3.
function getOddAndEven(a, b) {
	if (a < 0 || b < 0 || a > 255 || b > 255 || isNaN(a) || isNaN(b)) {
		console.log("nieprawidłowe dane!!");
		return undefined;
	}
	if (a > b) {
		var tmp = a;
		a = b;
		b = tmp;
	}
	var result = [];

	for (var i = a; i <= b; i++) {
		if (i % 2 == 0) {
			result.push(i);
		}

	}
	for (var i = b; i >= a; i--) {
		if (i % 2 != 0) {
			result.push(i);
		}

	}

	return result;
}
console.log(" ");
console.log("even and odd");
console.log(getOddAndEven(8, 3));

// 15. Napisz funkcję, która dla zadanej liczby zwróci sumę kwadratów
// poszczególnych liczb od 1 do
// zadanej liczby. Przyjmij i zbadaj czy użytkownik przekazał liczbę w
// przedziale <0, 10>
function multiplePower(param) {
	if (param < 1 || param > 10) {
		console.log("podaj liczbę w zakresie od 1 do 10!!");
		return undefined;
	}
	var output = 0;
	for (var i = 1; i <= param; i++) {
		output += Math.pow(i, i);
	}
	return output;
}
console.log(" ");
console.log("suma potęg");
console.log(multiplePower(11));

// 16. Napisz algorytm liczący ile potrzeba elementów (bloczków) dla piramidy o
// poziomie N (1
// poziom 1 bloczek, 2 poziom, dwa bloczki itd.)
function pyramid(param) {
	if (isNaN(param)) {
		console.log("musisz podac liczbe!!!");
		return undefined;
	}
	var out = 0;
	for (var i = 0; i <= param; i++) {
		out += i;
	}
	return out;
}
console.log(" ");
console.log("piramida");
console.log(pyramid(3));

// 17. Napisz funkcję, która wydrukuje tabliczkę mnożenia.

function tabliczkaMnozenia() {
	var output = "";
	output += "<table border='1'>";

	for (var y = 1; y <= 10; y++) {
		output += "<tr>";
		for (var x = 1; x <= 10; x++) {
			if (x == 1 || y == 1) {
				output += "<th>" + (x * y) + "</th>";
			} else {
				output += "<td>" + (x * y) + "</td>";
			}
		}
		output += "</tr>";
	}

	output += "</table>";
	return output;
}
