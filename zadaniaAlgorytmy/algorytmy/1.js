/*
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
console.log("minMax");
console.log(minMax(tablica1));
*/
