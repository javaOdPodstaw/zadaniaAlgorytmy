function sredniaArytmetyczna(inputArray) {
    if (inputArray.length === 0) {
        return 'Pusta tablica';
    }

    var sum = 0;
    var howMayNumbers = inputArray.length;

    for (var i = 0; i < inputArray.length; i++) {
        if (typeof (inputArray[i]) === 'number') {
            sum += inputArray[i];
        } else {
            howMayNumbers--;
        }
    }

    return sum / howMayNumbers;
}

var sampleArray = [];
var sampleArray1 = ['ss', 1, 2, 3, 'dd', 4, 5];

console.log('Œrednia arytmetyczna tablicy ' + sampleArray + ' to ' + sredniaArytmetyczna(sampleArray));
console.log('Œrednia arytmetyczna tablicy ' + sampleArray + ' to ' + sredniaArytmetyczna(sampleArray1));