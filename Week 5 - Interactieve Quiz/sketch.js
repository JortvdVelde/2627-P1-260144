let ActieveVraag = 0; // Welke vraag er wordt laten zien; (25 = eind & 26 = begin)
let Vragen = [ // Vragen van de quiz
  { // Vraag 1
    Vraag: 'Welke van de drie is een kamerplant?',
    Antwoorden: ['Afbeelding 1', 'Afbeelding 2', 'Afbeelding 3', 'Geen van alle'],
    JuisteAntwoord: 1,
    TypeVraag: "fotovraag3",
  },
  { // Vraag 2
    Vraag: 'Welk land ligt er onder de pinguins?',
    Antwoorden: ['Zambia', 'Mozambique', 'Madagaskar', 'Zimbabwe'],
    JuisteAntwoord: 2,
    TypeVraag: "fotovraag1",
  },
  { // Vraag 3
    Vraag: 'Kan je hier mensen van rechts verwachten?',
    Antwoorden: ['Ja', 'Nee'],
    JuisteAntwoord: 0,
    TypeVraag: "janee",
  },
  { // Vraag 4
    Vraag: 'Hoeveel is 46 x 53 / 46 - 53?',
    Antwoorden: ['0', '1', '2', '3'],
    JuisteAntwoord: 0,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 5
    Vraag: 'Hoe duur zijn 4 croisantjes bij de Jumbo?',
    Antwoorden: ['€0,50', '€1,-', '€1,10', '€0,90'],
    JuisteAntwoord: 1,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 6
    Vraag: 'Welke planeet staat het dichtst bij de zon?',
    Antwoorden: ['Neptunes', 'Aarde', 'Venus', 'Mercurius'],
    JuisteAntwoord: 3,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 7
    Vraag: 'De hoofdstad van Australië is Sydney.',
    Antwoorden: ['Waar', 'Niet waar'],
    JuisteAntwoord: 0,
    TypeVraag: "trueorfalse"
  },
  { // Vraag 8
    Vraag: 'Welke taal heeft wereldwijd de meeste moedertaalsprekers?',
    Antwoorden: ['Engels', 'Hindi', 'Mandarijn-Chinees', 'Russisch'],
    JuisteAntwoord: 2,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 9
    Vraag: 'In welk jaar landden mensen voor het eerst op de maan?',
    Antwoorden: ['1966', '1969', '1968', '1971'],
    JuisteAntwoord: 1,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 10
    Vraag: 'Welke rivier is de langste van Europa?',
    Antwoorden: ['Donau', 'Nijl', 'Rijn', 'Wolga'],
    JuisteAntwoord: 3,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 11
    Vraag: 'Welke Nederlandse provincie heeft de grootste oppervlakte?',
    Antwoorden: ['Friesland', 'Noord-Holland', 'Gelderland', 'Noord-Brabant'],
    JuisteAntwoord: 0,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 12
    Vraag: 'Wie was de eerste mens die in 1961 in een baan om de aarde vloog?',
    Antwoorden: ['Neil Armstrong', 'Andre Kuipers', 'Joeri Gagarin', 'Alan Shepard'],
    JuisteAntwoord: 2,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 13
    Vraag: 'Een octopus heeft vier harten.',
    Antwoorden: ['Waar', 'Niet waar'],
    JuisteAntwoord: 1,
    TypeVraag: "trueorfalse"
  },
  { // Vraag 14
    Vraag: 'Wat is de hoofdstad van Canada?',
    Antwoorden: ['Toronto', 'Ottawa', 'Montreal', 'Vancouver'],
    JuisteAntwoord: 1,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 15
    Vraag: 'Welk metaal heeft het chemische symbool Fe?',
    Antwoorden: ['Koper', 'Zilver', 'Ijzer', 'Goud'],
    JuisteAntwoord: 2,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 16
    Vraag: 'Wat is de plek waar wimbeldon plaats vind?',
    Antwoorden: ['Manchester', 'Liverpool', 'Birmingham', 'Londen'],
    JuisteAntwoord: 3,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 17
    Vraag: 'De Incas hebben de machu Picchu gebouw.',
    Antwoorden: ['Waar', 'Niet waar'],
    JuisteAntwoord: 0,
    TypeVraag: "trueorfalse"
  },
  { // Vraag 18
    Vraag: 'Welke man heeft ooit meer dan 400 botten gebroken in zijn leven?',
    Antwoorden: ['Evel Knievel', 'Ethan Johnson', 'Benjamin Smith', 'Neil Armstrong'],
    JuisteAntwoord: 0,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 19
    Vraag: 'De evenaar loopt door het noorden van Zuid-Afrika.',
    Antwoorden: ['Waar', 'Niet waar'],
    JuisteAntwoord: 1,
    TypeVraag: "trueorfalse"
  },
  { // Vraag 20
    Vraag: 'Welk land won het allereerste FIFA-wereldkampioenschap voetbal in 1930?',
    Antwoorden: ['Denemarken', 'Verenigd Koninkrijk', 'Uruguay', 'India'],
    JuisteAntwoord: 2,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 21
    Vraag: 'Welke planeet in ons zonnestelsel heeft de meeste manen?',
    Antwoorden: ['Venus', 'Neptunes', 'Mars', 'Saturnus'],
    JuisteAntwoord: 3,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 22
    Vraag: 'Welke stad staat bekend als de "Eeuwige Stad"?',
    Antwoorden: ['Rome', 'Athene', 'Warschau', 'Madrid'],
    JuisteAntwoord: 0,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 23
    Vraag: 'Bliksem kan heter zijn dan het oppervlak van de zon.',
    Antwoorden: ['Waar', 'Niet waar'],
    JuisteAntwoord: 0,
    TypeVraag: "trueorfalse"
  },
  { // Vraag 24
    Vraag: 'Welke edelsteen staat bekend als de hardste natuurlijke stof?',
    Antwoorden: ['Lapis Lazuli', 'Bergkristal', 'Diamant', 'Kwarts'],
    JuisteAntwoord: 2,
    TypeVraag: "meerkeuze"
  },
  { // Vraag 25
    Vraag: 'De planeet Venus draait om haar as heen op dezelfde manier als de aarde?',
    Antwoorden: ['Waar', 'Niet waar'],
    JuisteAntwoord: 1,
    TypeVraag: "trueorfalse"
  }];

// Kleuren quiz
let VraagVlak = 'white'; // Vraag vlak boven
let TekstKleur = 'black'; // Kleur van de teksten

// Score
let PogingAantal = 0; // Houd bij hoe vaak je een fout hebt gemaakt bij 1 vraag
let Score = 0; // Punten bij houden als het goed is.

// Verder gaan na vraag beantwoorden
let VraagBeantwoord = 0; // Bijhouden of je door kan naar de volgende vraag (0 = NIET beantwoord, 1 = WEL beantwoord)

// Foto's inladen 
let Kamerplant;
let KamerplantJungle;
let KamerplantDick;
let Pinguins;
let Wereldkaart;
let Verkeersbord;
let Quiz;

// Buttons
let antwoordKnop1;
let antwoordKnop2;
let antwoordKnop3;
let antwoordKnop4;


function preload() {
  // Quiz plaatje
  Quiz = loadImage('quiz.png'); // inladen foto quiz

  // Vraag 1
  Kamerplant = loadImage('kamerplant.png'); // inladen foto van kamerplant
  KamerplantJungle = loadImage('Kamerplant-jungle.png'); // inladen foto jungle
  KamerplantDick = loadImage('kamerplant-dick.png'); // inladen foto dickschoof

  // Vraag 2
  Pinguins = loadImage('pinguins.png'); // inladen foto pinguins
  Wereldkaart = loadImage('wereldkaart.png') // inladen wereldkaart

  // Vraag 3
  Verkeersbord = loadImage('verkeersbord.png') // inladen verkeersbord
}

function setup() {
  createCanvas(1000, 800);

  antwoordKnop1 = createButton("Antwoord links boven");
  antwoordKnop1.position(38, 558);
  antwoordKnop1.size(460, 100);
  antwoordKnop1.mousePressed(antwoord1Gedrukt);
  antwoordKnop1.style('font-size', '32px');

  antwoordKnop2 = createButton("Antwoord links onder");
  antwoordKnop2.position(38, 678);
  antwoordKnop2.size(460, 100);
  antwoordKnop2.mousePressed(antwoord2Gedrukt);
  antwoordKnop2.style('font-size', '32px');

  antwoordKnop3 = createButton("Antwoord rechts boven");
  antwoordKnop3.position(518, 558);
  antwoordKnop3.size(460, 100);
  antwoordKnop3.mousePressed(antwoord3Gedrukt);
  antwoordKnop3.style('font-size', '32px');

  antwoordKnop4 = createButton("Antwoord rechts onder");
  antwoordKnop4.position(518, 678);
  antwoordKnop4.size(460, 100);
  antwoordKnop4.mousePressed(antwoord4Gedrukt);
  antwoordKnop4.style('font-size', '32px');
}

function antwoord1Gedrukt() {
  let vraag = Vragen[ActieveVraag]; // Zorgen dat je vraag kan gebruiken als afkorting
  if (vraag.JuisteAntwoord == 0) {
    antwoordKnop1.style('background-color', '#39B827');
    antwoordKnop2.style('background-color', '#FF2C00');
    antwoordKnop3.style('background-color', '#FF2C00');
    antwoordKnop4.style('background-color', '#FF2C00');
    VraagBeantwoord = 1; // Zetten dat de vraag beantwoord is
    if (PogingAantal == 0) {
      Score = Score += 1;
    }
  }

  else {
    antwoordKnop1.style('background-color', '#FF2C00');
    PogingAantal = PogingAantal += 1;
  }
}

function antwoord2Gedrukt() {
  let vraag = Vragen[ActieveVraag]; // Zorgen dat je vraag kan gebruiken als afkorting
  if (vraag.JuisteAntwoord == 1) {
    antwoordKnop1.style('background-color', '#FF2C00');
    antwoordKnop2.style('background-color', '#39B827');
    antwoordKnop3.style('background-color', '#FF2C00');
    antwoordKnop4.style('background-color', '#FF2C00');
    VraagBeantwoord = 1; // Zetten dat de vraag beantwoord is
    if (PogingAantal == 0) {
      Score = Score += 1;
    }
  }

  else {
    antwoordKnop2.style('background-color', '#FF2C00');
    PogingAantal = PogingAantal += 1;
  }
}

function antwoord3Gedrukt() {
  let vraag = Vragen[ActieveVraag]; // Zorgen dat je vraag kan gebruiken als afkorting
  if (vraag.JuisteAntwoord == 2) {
    antwoordKnop1.style('background-color', '#FF2C00');
    antwoordKnop2.style('background-color', '#FF2C00');
    antwoordKnop3.style('background-color', '#39B827');
    antwoordKnop4.style('background-color', '#FF2C00');
    VraagBeantwoord = 1; // Zetten dat de vraag beantwoord is
    if (PogingAantal == 0) {
      Score = Score += 1;
    }
  }

  else {
    antwoordKnop3.style('background-color', '#FF2C00');
    PogingAantal = PogingAantal += 1;
  }
}

function antwoord4Gedrukt() {
  let vraag = Vragen[ActieveVraag]; // Zorgen dat je vraag kan gebruiken als afkorting
  if (vraag.JuisteAntwoord == 3) {
    antwoordKnop1.style('background-color', '#FF2C00');
    antwoordKnop2.style('background-color', '#FF2C00');
    antwoordKnop3.style('background-color', '#FF2C00');
    antwoordKnop4.style('background-color', '#39B827');
    VraagBeantwoord = 1; // Zetten dat de vraag beantwoord is
    if (PogingAantal == 0) {
      Score = Score += 1;
    }
  }

  else {
    antwoordKnop4.style('background-color', '#FF2C00');
    PogingAantal = PogingAantal += 1;
  }
}

function draw() {
  background(220);
  textWrap(WORD); // Zorgen dat teksten niet groter worden dan bepaald gegeven
  let vraag = Vragen[ActieveVraag]; // Zorgen dat je vraag kan gebruiken als afkorting

  if (vraag.TypeVraag == 'fotoVraag3') { // Fotovraag met 3 plaatjes in de vraagtype omzetten naar een layout
    fotoVraag3() // Inladen template
  }

  if (vraag.TypeVraag == 'janee' || vraag.TypeVraag == 'trueorfalse') {
    antwoordKnop3.hide()
    antwoordKnop4.hide()
  }
  else if (vraag.TypeVraag == 'meerkeuze' || vraag.TypeVraag == 'fotovraag1' || vraag.TypeVraag == 'fotovraag3') {
    antwoordKnop3.show()
    antwoordKnop4.show()
  }

  if (vraag.TypeVraag == 'meerkeuze' || vraag.TypeVraag == 'janee' || vraag.TypeVraag == 'trueorfalse') { // Zorgen voor opvulfoto
    image(Quiz, 290, 250, 400, 200) // Quiz foto
  }

  if (ActieveVraag == 25) {
    eindscherm()
    antwoordKnop1.hide()
    antwoordKnop2.hide()
    antwoordKnop3.hide()
    antwoordKnop4.hide()
  }


  // Buttons antwoorden geven
  antwoordKnop1.html(vraag.Antwoorden[0]);
  antwoordKnop2.html(vraag.Antwoorden[1]);
  antwoordKnop3.html(vraag.Antwoorden[2]);
  antwoordKnop4.html(vraag.Antwoorden[3]);

  // Foto's plaatsen juiste plekken
  if (ActieveVraag == 0) { // Vraag 1 (Kamerplant)
    image(KamerplantJungle, 30, 200, 300, 300); // foto jungle links
    image(Kamerplant, 350, 200, 300, 300); // foto kamerplant midden
    image(KamerplantDick, 670, 200, 300, 300); // foto dick schoof rechts
  }
  else if (ActieveVraag == 1) { // Vraag 2 (Wereldkaart)
    rect(200, 200, 600, 300); // rand foto
    image(Wereldkaart, 200, 200, 600, 300); // foto wereldkaart
    image(Pinguins, 520, 390, 70, 40); // foto pinguins
  }
  else if (ActieveVraag == 2) { // Vraag 3 (Verkeersbord)
    image(Verkeersbord, 350, 200, 300, 300)
  }

  // Zorgen voor vlak voor vraag en tekst
  if (VraagBeantwoord == 0) {
    fill(VraagVlak); // Zorgen dat het vlak met de vraag de juiste kleur krijgt
    rect(40, 40, 910, 150, 30); // Balk voor de vraag
    
// Vraag
fill('black')
  textSize(30) // Grootte van de tekst 
  textStyle(BOLD);
  text(vraag.Vraag, 60, 80, 920) // zorgen dat de vragen op het scherm komen
  }
  
  // Zorgen dat je op verder kan klikken als vraag beantwoord is
  else if (VraagBeantwoord == 1) {
    Verder()
  }
  

  console.log('Pogingen: ' + PogingAantal + ' Score: ' + Score);
}

function beginscherm() {
  fill(VraagVlak);
  rect(40, 40, 910, 270, 30); // Balk voor bericht
  textStyle(BOLD);
  textSize(70);
  fill(TekstKleur); // Zorgen dat de teksten de juiste kleur krijgen
  text('Welkom bij de quiz!', 160, 130);
  textSize(50);
  text('Klik op het scherm om te beginnen.', 90, 230);
}

function eindscherm() {
  fill(VraagVlak);
  rect(40, 40, 910, 270, 30); // Balk voor bericht
  textStyle(BOLD);
  textSize(70);
  fill(TekstKleur); // Zorgen dat de teksten de juiste kleur krijgen
  text('Je hebt de quiz uitgespeeld!', 160, 130);
  textSize(50);
  text('De behaalde score = ' + Score, 90, 230);
}

function Verder() {
  fill(VraagVlak); // Zorgen dat het vlak met de tekst de juiste kleur krijgt
  rect(40, 40, 910, 150, 30); // Balk voor aanwijzing
  fill(TekstKleur); // Zorgen dat de teksten de juiste kleur krijgen
  textSize(50);
  text('Klik op het blok om verder te gaan.', 80, 130);
  fill(VraagVlak); // Zorgen dat het vlak met de tekst de juiste kleur krijgt
  rect(290, 250, 400, 200, 30); // Balk voor tekst VERDER
  fill(TekstKleur); // Zorgen dat de teksten de juiste kleur krijgen
  textSize(70);
  text('Verder', 380, 370);
}

function fotoVraag3() {
  textSize(25);
  // Vlakken voor foto's
  fill(TekstKleur); // Zorgen dat de teksten de juiste kleur krijgen
  rect(30, 200, 300, 300); // plek foto links  
  text('Afbeelding 1', 100, 530); // tekst afbeelding 1
  rect(350, 200, 300, 300); // plek foto midden
  text('Afbeelding 2', 425, 530); // tekst afbeelding 2
  rect(670, 200, 300, 300); // plek foto rechts
  text('Afbeelding 3', 750, 530); // tekst afbeelding 3
}

function mousePressed() {
  let vraag = Vragen[ActieveVraag]; // Zorgen dat je vraag kan gebruiken als afkorting
  if (VraagBeantwoord == 1) {
    if (mouseX > 290 && mouseX < 290 + 400 &&
      mouseY > 250 && mouseY < 250 + 200) {
      VraagBeantwoord = 0; // Zorgen dat het systeem naar de volgende vraag kan
      ActieveVraag = ActieveVraag += 1; // Zorgen dat het naar de volgende vraag gaat
      PogingAantal = 0 // Pogingen resetten

      antwoordKnop1.style('background-color', '#F5F5F5');
      antwoordKnop2.style('background-color', '#F5F5F5');
      antwoordKnop3.style('background-color', '#F5F5F5');
      antwoordKnop4.style('background-color', '#F5F5F5');
    }
  }

}
