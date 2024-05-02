"use strict"

addEventListener("keydown", spatie);
addEventListener("keydown", pijltje);

const tetrisBlok1_1 =
[
    ['X','O','O',],
    ['X','X','O',],
    ['O','X','O',]
];

const tetrisBlok1_2 =
[
    ['O','X','X',],
    ['X','X','O',],
    ['O','O','O',]
];

const tetrisBlok1_3 =
[
    ['O','X','O'],
    ['O','X','X'],
    ['O','O','X']
];

const tetrisBlok1_4 =
[
    ['O','O','O'],
    ['O','X','X'],
    ['X','X','O']
];


const tetrisBlok2_1 =
[
    ['X','O','O',],
    ['X','O','O',],
    ['X','X','O',]
];

const tetrisBlok2_2 =
[
    ['X','X','X',],
    ['X','O','O',],
    ['O','O','O',]
];

const tetrisBlok2_3 =
[
    ['O','X','X'],
    ['O','O','X'],
    ['O','O','X']
];

const tetrisBlok2_4 =
[
    ['O','O','O'],
    ['O','O','X'],
    ['X','X','X']
];


const tetrisBlok3_1 =
[
    ['X','O','O','O'],
    ['X','O','O','O'],
    ['X','O','O','O'],
    ['X','O','O','O']
];

const tetrisBlok3_2 =
[
    ['O','O','O','O'],
    ['X','X','X','X'],
    ['O','O','O','O'],
    ['O','O','O','O']
];


const tetrisBlok4_1 =
[
    ['O','X','O'],
    ['X','X','X'],
    ['O','O','O']
];
const tetrisBlok4_2 =
[
    ['O','O','O'],
    ['X','X','X'],
    ['O','X','O']
];

const tetrisBlok5_1 =
[
    ['O','O','X','O','O'],
    ['O','O','X','O','O'],
    ['X','X','X','X','X'],
    ['O','O','X','O','O'],
    ['O','O','X','O','O']
]



const tetrisShape1 = 
[   
    tetrisBlok1_1, 
    tetrisBlok1_2, 
    tetrisBlok1_3, 
    tetrisBlok1_4
];

const tetrisShape2 =
[  
    tetrisBlok2_1,
    tetrisBlok2_2,
    tetrisBlok2_3,
    tetrisBlok2_4
];

const tetrisShape3 =
[
    tetrisBlok3_1,
    tetrisBlok3_2
];

const tetrisShape4 =
[
    tetrisBlok4_1,
    tetrisBlok4_2
];

const tetrisShape5 =
[
    tetrisBlok5_1
];


const tetrisBlok = 
[
    tetrisShape1, 
    tetrisShape2, 
    tetrisShape3, 
    tetrisShape4,
    tetrisShape5
];


const tetrisKleur = [ ];

function randomIntFromInterval(min, max){
    let returnValue;

    returnValue = Math.floor(Math.random() * (max - min + 1) + min);
    return returnValue;
};
//Vult tetrisKleur array met kleuren
function setRandomColor() {
    for (let kleur = 0; kleur < tetrisBlok.length; kleur++) {
        let rgbRed = randomIntFromInterval(0,255);
        let rgbGreen = randomIntFromInterval(0,255);
        let rgbBlue = randomIntFromInterval(0,255);

        let rgbColor = "rgb(" + rgbRed + ", "+ rgbGreen + ", "+ rgbBlue + ")";

        tetrisKleur.push(rgbColor)    
    }  
};
setRandomColor();

//Maakt table en vult kleur blokjes in.
function tetris (tetrisBlok) {
    const tableElement = document.getElementById("table");
    tableElement.remove();

    const tableMake = document.createElement("table");
    tableMake.id = "table";
    const parentTable = document.getElementById("tetris");
    parentTable.appendChild(tableMake);
    
    let count = 0;
   
    for (let rij = 0; rij < tetrisBlok.length; rij++) {
        const tableRow = document.createElement("tr");
        const tableElement = document.getElementById("table");
        tableElement.appendChild(tableRow); 

        console.log(tetrisBlok[rij]);

        for (let blokje = 0; blokje < tetrisBlok[rij].length; blokje++) {
            const tableData = document.createElement("td");
            tableRow.appendChild(tableData);

            const tetrisCell = tableElement.getElementsByTagName("td");
            if ((tetrisBlok[rij][blokje]) === 'X') {
                tetrisCell[count].style.background = tetrisKleur[blok];    
            }
            
            count++;           
        }
    }        
};

let blok = tetrisBlok.length;
let shape = 0;
 
function spatie (event) {
    
    if (event.key == " ") {
        blok++;

            if (blok >= tetrisBlok.length) {
                    blok = 0; 
            }

            if (shape >= tetrisBlok[blok].length) {
                shape = 0; 
            }

            bigTetris (blok,shape);        
    }
};


function pijltje (event) {
    
    if (event.key == "ArrowRight") { 
        shape++;

        if (shape >= tetrisBlok[blok].length) {
            shape = 0;
        }

        bigTetris (blok,shape);
        return;
    }

    if (event.key == "ArrowLeft") {
        shape--;

        if (shape < 0) {
            shape = tetrisBlok[blok].length-1;
        }

        bigTetris (blok,shape);
    }
};

function bigTetris (blok,shape) {
    console.log("tetrisBlok"+(blok+1)+"_"+(shape+1));
    tetris(tetrisBlok[blok][shape]);
};