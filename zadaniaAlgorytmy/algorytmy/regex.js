/*Napisz funkcj�, w kt�rej dla zadanego �a�cucha znak�w, wszystkie znaki - takie same jak pierwsza litera ci�gu znak�w zostan� zamienione na znak '_', wyj�tkiem jednak jest pierwszy znak. Dla przyk�adu: 
Wej�cie: oksymoron 
Wyj�cie: oksym_r_n 
*/
/*
String.prototype.replaceWith = function(){
	var firstLetter = this[0];
	var regexp1 = new RegExp(firstLetter, 'gi');
	var wordWithoutFirstLetter = this.substr(1, this.length-1);
	var newWordWithReplaced = wordWithoutFirstLetter.replace(regexp1,'_');
	return (firstLetter+newWordWithReplaced);

	
}
console.log("Ala ma kota a kot ma dupe".replaceWith());
*/