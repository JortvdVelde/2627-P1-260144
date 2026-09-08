function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  
// Variablen
  let x = 100
  let greeting = 'Hello World!'

  let a = 20
  let b = 10
  let y = 80

  let optellen = a + b
  let aftrekken = a - b
  let vermenigvuldigen = a * b
  let delen = a / b
  

  // Uitvoering
  text(x, 20, 20);
  
  text(greeting, 20, y);

  y = y + 20;
  text('Optellen:' + optellen, 20, y); 
  
  y = y + 20;
  text('Aftrekken:' + aftrekken, 20, y);


  y = y + 20;
  text('Vermenigvuldigen:' + vermenigvuldigen, 20, y);

  y = y + 20;
  text('Delen:' + delen, 20, y);
  

/*
------- Variablen -------
Door de variablen kan je ervoor zorgen dat aan een bepaald woord een bepaalde waarde komt.

Na het invoeren van de variablen kan je ze gebruiken in de uitvoeren. Tussendoor zie je ook soms 'y = y + 20;' staan.
Dit zorgt ervoor dat de waarde die in de variablen staan wordt overschreven naar een nieuw getal met +20. 
Iedere keer dat het er staat komt er +20 bij bij het getal van de vorige verhoging of variable.

Kort gezegd de waarde van y = 80 aan het begin iedere keer komt er 20 bij, dus na de eerste keer is y 100 waard. Na de tweede keer is y 120 waard enzo.

------- Uitvoering -------
Tijdens de uitvoering kan je ook variblen combineren met tekst. Dit doe je door de code te schrijven voor een tekst. Hierbij voeg je dan een + toe met de variablen.
Voor de variabelen staat dan de tekst die je wilt met daarna de locatie van de tekst. Hierdoor krijg je alles achter elkaar te staan van deze code. 
*/
}
