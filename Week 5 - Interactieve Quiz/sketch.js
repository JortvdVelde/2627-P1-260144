let ActieveVraag = 0; // Welke vraag er wordt laten zien; 
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
    TypeVraag: "janeefoto",
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

// Foto's inladen 
let Kamerplant;
let KamerplantJungle;
let KamerplantDick;
let Pinguins;
let Wereldkaart;
let Verkeersbord;
let Quiz;


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
}

function draw() {
  background(220);
  textWrap(WORD); // Zorgen dat teksten niet groter worden dan bepaald gegeven
  let vraag = Vragen[ActieveVraag]; // Zorgen dat je vraag kan gebruiken als afkorting

  if (vraag.TypeVraag == 'meerkeuze') { // Meerkeuze in de vraagtype omzetten naar een layout
    meerkeuze()
  }
  else if (vraag.TypeVraag == 'janee') { // Ja of nee in de vraagtype omzetten naar een layout
    janee()
  }
  else if (vraag.TypeVraag == 'janeefoto') {
    janeefoto()
  }
  else if (vraag.TypeVraag == 'trueorfalse') { // Waar of niet waar in de vraagtype omzetten naar een layout
    trueorfalse()
  }
  else if (vraag.TypeVraag == 'fotovraag1') { // Fotovraag met 1 plaatje in de vraagtype omzetten naar een layout
    fotoVraag1()
  }
  else if (vraag.TypeVraag == 'fotovraag3') { // Fotovraag met 3 plaatjes in de vraagtype omzetten naar een layout
    fotoVraag3()
  }

  if (vraag.TypeVraag == 'meerkeuze' || vraag.TypeVraag == 'janee' || vraag.TypeVraag == 'trueorfalse') {
    image(Quiz, 290, 250, 400, 200)
  }

  // Vraag
  textSize(30)
  textStyle(BOLD);
  text(vraag.Vraag, 60, 80, 920) // zorgen dat de vragen op het scherm komen

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

  console.log(ActieveVraag);
}

function beginscherm() {
  rect(40, 40, 910, 270, 30); // Balk voor bericht
  textStyle(BOLD);
  textSize(70);
  text('Welkom bij de quiz!', 160, 130);
  textSize(50);
  text('Klik op het scherm om te beginnen.', 90, 230);
}


function meerkeuze() {
  let vraag = Vragen[ActieveVraag]; // Zorgen dat je vraag kan gebruiken als afkorting
  rect(40, 40, 910, 150, 30); // Balk voor de vraag
  rect(30, 550, 460, 100, 30); // Links boven
  rect(30, 670, 460, 100, 30); // Links onder
  rect(510, 550, 460, 100, 30); // Rechts boven
  rect(510, 670, 460, 100, 30); // Rechts onder

  // Antwoorden laten zien
  textSize(40);
  text(vraag.Antwoorden[0], 75, 610); // Links boven
  text(vraag.Antwoorden[1], 75, 730); // Links onder
  text(vraag.Antwoorden[2], 570, 610); // Rechts boven
  text(vraag.Antwoorden[3], 570, 730); // Rechts onder
}

function trueorfalse() {
  rect(40, 40, 910, 150, 30); // Balk voor de vraag
  textStyle(BOLD)
  textSize(80)
  rect(30, 550, 460, 200, 30); // Links
  text('Waar', 150, 670); // tekst waar (links)
  rect(510, 550, 460, 200, 30); // Rechts
  text('Niet waar', 570, 670); // tekst niet waar (rechts)
}

function janee() {
  rect(40, 40, 910, 150, 30); // Balk voor de vraag
  textStyle(BOLD)
  textSize(80)
  rect(30, 550, 460, 200, 30); // Links
  text('Ja', 200, 670); // tekst ja (links)
  rect(510, 550, 460, 200, 30); // Rechts
  text('Nee', 670, 670); // tekst nee (rechts)
}

function janeefoto() {
  rect(40, 40, 910, 150, 30); // Balk voor de vraag
  textStyle(BOLD)
  textSize(80)
  rect(30, 550, 460, 200, 30); // Links
  text('Ja', 200, 670); // tekst ja (links)
  rect(510, 550, 460, 200, 30); // Rechts
  text('Nee', 670, 670); // tekst nee (rechts)
}

function fotoVraag1() {
  let vraag = Vragen[ActieveVraag]; // Zorgen dat je vraag kan gebruiken als afkorting
  rect(40, 40, 910, 150, 30); // Balk voor de vraag
  rect(350, 200, 300, 300); // plek foto midden

  // Vlakken voor keuze
  rect(30, 550, 460, 100, 30); // Links boven
  rect(30, 670, 460, 100, 30); // Links onder
  rect(510, 550, 460, 100, 30); // Rechts boven
  rect(510, 670, 460, 100, 30); // Rechts onder

  // Antwoorden laten zien
  textSize(40);
  text(vraag.Antwoorden[0], 195, 610); // Links boven
  text(vraag.Antwoorden[1], 135, 730); // Links onder
  text(vraag.Antwoorden[2], 630, 610); // Rechts boven
  text(vraag.Antwoorden[3], 650, 730); // Rechts onder
}

function fotoVraag3() {
  textSize(25);
  rect(40, 40, 910, 150, 30); // Balk voor de vraag
  // Vlakken voor foto's
  rect(30, 200, 300, 300); // plek foto links  
  text('Afbeelding 1', 100, 530); // tekst afbeelding 1
  rect(350, 200, 300, 300); // plek foto midden
  text('Afbeelding 2', 425, 530); // tekst afbeelding 2
  rect(670, 200, 300, 300); // plek foto rechts
  text('Afbeelding 3', 750, 530); // tekst afbeelding 3

  // Vlakken voor de keuze
  rect(30, 550, 460, 100, 30); // Links boven
  rect(30, 670, 460, 100, 30); // Links onder
  rect(510, 550, 460, 100, 30); // Rechts boven
  rect(510, 670, 460, 100, 30); // Rechts onder

  // Antwoord mogelijkheden
  textSize(40);
  text('Afbeelding 1', 135, 610); // Links boven
  text('Afbeelding 2', 135, 730); // Links onder
  text('Afbeelding 3', 630, 610); // Rechts boven
  text('Geen van alle', 620, 730); // Rechts onder
}

function mousePressed() {
  let vraag = Vragen[ActieveVraag]; // Zorgen dat je vraag kan gebruiken als afkorting
  
  if (vraag.vraagtype == 'meerkeuze' || vraag.vraagtype == 'fotovraag1' || vraag.vraagtype == 'fotovraag3') { // Zorgen dat het alleen werkt bij meerkeuze en foto vragen
    if (mouseX > 30 && mouseX < 30 + 460 &&
      mouseY > 550 && mouseY < 550 + 100) { // Links boven

    }
    else if (mouseX > 30 && mouseX < 30 + 460 &&
      mouseY > 670 && mouseY < 670 + 100) { // Links onder

    }
    else if (mouseX > 510 && mouseX < 510 + 460 &&
      mouseY > 550 && mouseY < 550 + 100) { // Rechts boven

    }
    else if (mouseX > 510 && mouseX < 510 + 460 &&
      mouseY > 670 && mouseY < 670 + 100) { // Rechts onder

    }
  }

  if (vraag.vraagtype == 'janee' || vraag.vraagtype == 'janeefoto' || vraag.vraagtype == 'trueorfalse') { // Zorgen dat het alleen werkt bij vragen met 2 antwoorden
    if (mouseX > 30 && mouseX < 30 + 460 &&
      mouseY > 550 && mouseY < 550 + 200) { // vak links
      if (Vragen.JuisteAntwoord == 0) {
        VraagJuist0 = 'green';
        VraagJuist1 = 'red';
      }

      else {
        VraagJuist0 = 'red';
        VraagJuist1 = 'green';
      }
    }
    else if (mouseX > 510 && mouseX < 510 + 460 &&
      mouseY > 550 && mouseY < 550 + 200) { // vak rechts

    }
  }
}
