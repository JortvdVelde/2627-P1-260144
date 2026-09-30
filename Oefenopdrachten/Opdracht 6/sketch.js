let Kleuren = []

let Tellen = []

function setup() {
  createCanvas(400, 400);

  for (let index = 0; index < 5; index++) {
    Kleuren.push([random(0, 255), random(0, 255), random(0, 255)])
  }

  for (let index = 0; index < 12; index++) {
    Tellen.push(round(random(0, 100)));
  }

}

function draw() {
  background(220);
  let Color = ['red', 'green', 'blue', 'purple', 'yellow'];
  let Digits = ['400', '240', '10', '490', '30', '60', '244', '500', '301', '300'];

  let Filter = Digits.filter(num => num < 300);

  let Optellen = [3, 55, 93, 20, 102, 6];
  let Optellen2 = [14, 22, 80, 5];

  let Woord = 'Overheidsfinancieringstekort';
  let WoordCount = 0;

  let ColorNew = ['red', 'green', 'blue', 'purple', 'yellow'];

  textStyle(BOLD);

  // Cijfers laten komen op scherm.
  fill('black');
  text('1.', 20, 15);
  text('2.', 20, 100);
  text('3.', 20, 190);
  text('4.', 20, 250);
  text('5.', 120, 15);
  text('6.', 120, 100);
  text('7.', 120, 190);
  text('8.', 120, 280);
  text('9.', 240, 15);

  // Tekenen array kleuren volgorde in de kleur van het woord
  for (let index = 0; index < Color.length; index++) {
    fill(Color[0 + index * 1]);
    text(Color[0 + index * 1], 40, 15 + index * 15);
  }

  // Tekenen array kleuren met ipv rood bovenaan rood onderaan en groen bovenaan
  Color.shift()
  Color.push('red')
  for (let index = 0; index < Color.length; index++) {
    fill(Color[0 + index * 1]);
    text(Color[0 + index * 1], 40, 100 + index * 15);
  }

  // Blauw en paars eruit halen
  Color.splice(1, 2)
  for (let index = 0; index < Color.length; index++) {
    fill(Color[0 + index * 1]);
    text(Color[0 + index * 1], 40, 190 + index * 15);
  }

  // Getallen onder de 300 laten zien
  for (let index = 0; index < Filter.length; index++) {
    fill('black')
    text(Filter[0 + index * 1], 40, 250 + index * 15)
  }

  // 2 array's bij elkaar laten optellen.
  let Uitkomst = 0;
  for (let index = 0; index < Optellen.length; index++) {
    if (index < Optellen2.length) {
      Uitkomst += Optellen2[index];
    }
    Uitkomst += Optellen[index];

  }
  text(Uitkomst, 120, 30);

  // Letters op tellen. 
  for (let index = 0; index < Woord.length; index++) {
    if (Woord[index] == 'e') {
      WoordCount++
    }
  }
  text(WoordCount + 'x', 140, 100)

  // Kleuren sorteren
  ColorNew.sort()
  for (let index = 0; index < ColorNew.length; index++) {
    fill(ColorNew[0 + index * 1]);
    text(ColorNew[0 + index * 1], 140, 190 + index * 15);
  }

  // Zorgen dat er random kleuren komen op een rij
  let UitkomstTellen = 0;
  let UitkomstGemiddeld = 0;

  for (let index = 0; index < Kleuren.length; index++) {
    fill(Kleuren[index]);
    rect(140 + index * 40, 270, 40, 40);
  }

  // 12 random getallen + optellen
  for (let index = 0; index < Tellen.length; index++) {
    fill('black');
    text(Tellen[0 + index * 1], 260, 15 + index * 15);

    UitkomstTellen += Tellen[index];

    UitkomstGemiddeld = UitkomstTellen / Tellen.length;
  }
  text('Totaal: ' + UitkomstTellen, 260, 200);
  text('Gem: ' + UitkomstGemiddeld, 260, 215);

}
