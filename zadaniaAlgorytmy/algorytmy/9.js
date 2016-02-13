//Math.abs(-1423);

var licza = [];

function bezwzgledna(liczba) {
    if (typeof (liczba) == "number") {
        if (liczba >= 0) {
            console.log(liczba);
        } else if (liczba < 0) {
            console.log(liczba = liczba * (-1));
        } else {
            return  null;
        }
    } else {
        console.log("Podaj liczbê, cio³ku!");
    }
    return liczba;
};

bezwzgledna("gjskdflsjdf");



