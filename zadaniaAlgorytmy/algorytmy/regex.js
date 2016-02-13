/*Napisz funkcjê, w której dla zadanego ³añcucha znaków, wszystkie znaki - takie same jak pierwsza litera ci¹gu znaków zostan¹ zamienione na znak '_', wyj¹tkiem jednak jest pierwszy znak. Dla przyk³adu: 
Wejœcie: oksymoron 
Wyjœcie: oksym_r_n 
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