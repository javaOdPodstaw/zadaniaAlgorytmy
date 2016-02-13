var table = [1,2,3];

function reverse (tab){
	var temp = [];
	for (var i = tab.length-1; i>=0; i--){
		temp.push(tab[i]);
	}
	return temp;
		
}
console.log(reverse(table));