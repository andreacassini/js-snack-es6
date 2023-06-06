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
