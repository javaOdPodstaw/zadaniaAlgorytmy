/*
// 5. Napisz formularz, któy wyświetli informację o uzupełnionych polach.
// Formularz powinien zawierać pola; imię, nazwisko, płeć, wiek i wyświetlać
// odpowiednią informację po przesłaniu: "Witaj <imie> <nazwisko>! Jesteś <plec>
// i masz <wiek> lat!"

function formularz(imie, nazwisko, wiek, plec) {
	if(isNaN(parseInt(wiek))) {
		console.log("ttttttttttt!!!!!!!!!!!!");
		return false;
	}
	;

	return "Witaj " + imie + " " + nazwisko + ". Jesteś " + plec + " i masz "
			+ wiek + " lat";
};

$(document).ready(function() {

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
*/
