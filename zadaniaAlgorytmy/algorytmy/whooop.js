function ScreenFranzee(){

 ///Funkcja ktora tworzy randomowo wartosc kolor w formacie RGBA
 var setColor = function(){
   var rgba = [];
   // petla ktora wstawia wartosci red => rgba[0], green => rgba[1], blue => rgba[2]
     for (var i = 0; i < 3; i++) {
       rgba[i] = Math.round(Math.random()*255);
     }
     //dodawanie do tablicy wartosci przezroczystosci alfa , ktora ma wartosc od 0 do 1
     rgba.push(Math.random());
     //zwracanie wartoscie tekstowej z randomowymi warosciami formatu koloru rgba
     return'rgba('+rgba.join(',')+')';
 }

   // Tworzenie elementu DIV i napisu. Następnie wpychanie tego elementu z napisem to body.
   var napisDiv = "MOŻE SPOWODOWAĆ EPILEPSJĘ";
   var elDiv = document.createElement('DIV');
   elDiv.appendChild(document.createTextNode(napisDiv));
   document.body.appendChild(elDiv);

   // Nadawanie stylu  elementowi ktory zostal wstawiony do documentu html
   elDiv.style.position = 'absolute';
   elDiv.style.fontSize = '40px';
   elDiv.style.top = '50%';
   elDiv.style.left  = '50%';
   elDiv.style.transform  = 'translate(-50%,-50%)';


   //Nadawaanie koloru dla body i napisu za pomocą setInterval z intervale 10 ms
   setInterval(function(){
     elDiv.style.color = setColor();// kolor dla napisu
     document.body.style.backgroundColor= setColor();// kolor dla body
 }, 10 );

}
// Stworzenie instancji
var s1 = new ScreenFranzee();
