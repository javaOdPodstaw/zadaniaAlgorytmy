function czas(s,m,g){
    return (s + (m*60) + (g*3600));
};

console.log("szukany czas: " + czas(10,1,1));