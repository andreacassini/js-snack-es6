//SNACK 1

//ARRAY INIZIALE
const guests = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'] 

//OBJECT table
const table = guests.map((guest, i) => {
    return {'table_name': 'Tavolo Vip', 'guest': guest, 'seat': i}
})

console.log(table);

//SNACK 2
const students = [
    {
        'id':'213',
        'name':'Marco della Rovere',
        'grades':'78'
    },
    {
        'id':'110',
        'name':'Paola Cortellessa',
        'grades':'96'
    },
    {
        'id':'250',
        'name':'Andrea Mantegna',
        'grades':'48'
    },
    {
        'id':'145',
        'name':'Gaia Borromini',
        'grades':'74'
    },
    {
        'id':'196',
        'name':'Luigi Grimaldello',
        'grades':'68'
    },
    {
        'id':'102',
        'name':'Piero della Francesca',
        'grades':'50'
    },
    {
        'id':'120',
        'name':'Francesca da Polenta',
        'grades':'84'
    }
]

const plates = students.map((students) => students.name.toUpperCase());
console.log(plates)
const super_students = students.filter((student) => student.grades > 70);
console.log(super_students)
const ultra_students = students.filter((student) => student.grades > 70 && student.id > 120)
console.log(ultra_students)

//SNACK 3
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare in console la bici con peso minore utilizzando destructuring e template literal

//Creare un array di oggetti:
const bikes = [
    {
        brand:'Specialized',
        weight: 10
    },
    {
        brand:'Bianchi',
        weight: 11
    },
    {
        brand:'Trek',
        weight: 9.5
    },
    {
        brand:'Cube',
        weight: 11
    },
    {
        brand:'Giant',
        weight: 9
    },
]

//PRENDO COME PARAGONE LA PRIMA BICI DELL'ARRAY
let lightBike = bikes[0];

//CREO ARRAY PER VERIFICARE UNO AD UNO IL PESO
bikes.forEach ((element) => {
    if(element.weight < lightBike.weight){
        lightBike = element;
    }
});

//STAMPO A CONSOLE
//console.log(lightBike);

//STAMPO A CONSOLE CON DESTRUCTURING E TEMPLATE LITERAL
let {brand, weight} = lightBike;

console.log(`La bici piu' leggera e' la ${brand} e pesa solo ${weight} Kg`);

//SNACK 4
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


//CREO ARRAY DI OGGETTI DI SQUADRE DI CALCIO
const squadre = [
    {
        nome:'Juventus',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome:'Milan',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome:'Inter',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome:'Lazio',
        punti_fatti: 0,
        falli_subiti: 0
    }
]

//STAMPO A VIDEO ARRAY DI OGGETTI
//console.log(squadre);


//CICLO L'ARRAY E INVOCO FUNZIONE generateRandomNumber
squadre.forEach((element) => { 
    element.punti_fatti = generateRandomNumber(1,10);
    element.falli_subiti = generateRandomNumber(1,10);
})

console.log(squadre)
//CREO FUNZIONE RANDOM PER ANDARE A SOSTITUIRE GLI 0 IN punti_fatti E falli_subiti
function generateRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) - min);
}

//CREO NUOVO ARRAY DESTRUTTURATO CON ELEMENTI : nome, falli_subiti
const newTeams =[];
for(let i=0; i<squadre.length; i++){
    let squadreAggiornate = squadre[i];

    const {nome, falli_subiti} = squadreAggiornate;

    let obj = {nome, falli_subiti};

    newTeams.push(obj);
}

//STAMPO IN CONSOLE
console.log(newTeams);
