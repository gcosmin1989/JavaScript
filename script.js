/*let js = 'amazing';
console.log(40+8+23-10);

console.log('Gherghina');//Gherghina este valoarea
console.log(23); //23 este valoarea

let prenume ="Cosmin"; //Declararea unei variabile

console.log(prenume);
console.log(prenume);
console.log(prenume);

//variable names convetion 🔥 
let cosmin_gherghina="CG";
let PI = 3.1415; //Constanta 

let primulJob = "Agent Vanzari";
let viitorulJob = "Programator";

console.log(viitorulJob);


//Tipuri de Date 🔥 

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
//typeof - arata tipul variabilei
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Cosmin'); 


javaScriptIsFun ='Da!';
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year= 2021;
console.log(year);
console.log(typeof year);
console.log(typeof null);


//LET CONST AND VAR 🔥 

let varsta = 30; // ii da valoarea de 30
varsta=31; //scimba valoarea cu 31 (mutate, reasign)
const anulNasterii= 1989; // Nu se pot schimba sunt valori fixe
//Constantele trebuie sa aiba valori
var job = 'programator';
job ='profesor'; 

Prenume='Cosmin';
console.log(Prenume);


//OPERATORI 🔥 
//ne permite sa transformam sau sa combinam anumite valori

const anActual = 2021;
const varstaCosmin = anActual - 1989;
const varstaNini = anActual - 1995;
console.log(varstaCosmin, varstaNini);

console.log(varstaCosmin * 2, varstaCosmin / 10, 2**3)//2**3 inseamna 2 la puterea a 3 (2*2*2)

const nume ='Gherghina';
const prenume ='Cosmin';

console.log (nume + ' ' + prenume)//Concatenare

let x =10 + 5;//15
x+=10; //x= x+10  //25
x*=4; // x=x*4  //100
x++; //x+1 //101
x--;//x-1 //100
x--; //x-1 //99
console.log(x);


//Operatori de comparare =>rezultat boolean🔥 

console.log(varstaCosmin > varstaNini); //true
console.log(varstaCosmin < varstaNini); //false
console.log(varstaNini >= 18); //true

const varstaLegala = varstaNini >=18; //salvraza true

console.log(anActual-1991 > anActual-2018);


//Ordinea de citire a Operatorilor 🔥 

const anActual = 2021;
const varstaCosmin = anActual - 1989;
const varstaNini = anActual - 1995;

console.log(anActual-1991 > anActual-2018);

console.log(25-10-5);//stanga la dreapta

let x,y;
x = y = 25-10-5; //x = y = 10. x = 10
console.log(y,x);

const medieVarsta = (varstaCosmin + varstaNini) / 2;
console.log(varstaCosmin, varstaNini, medieVarsta)


//STRINGS AND TEMPLATE LITERALS 🔥 

const nume = 'Cosmin';
const job = 'vanzator';
const dataNastere = '1989';
const an ='2021'

const cosmin = "Ma numesc " + nume + ', un ' + job + ' in varsta de '+ (an - dataNastere)+' ani';
console.log(cosmin);


const cosminNou = `Ma numesc ${nume}, un ${job} in varsta de ${an-dataNastere} ani`;
console.log(cosminNou); // Se foloseste ` (deasupra TAB);

console.log(`String
Rand 
cu Rand`);


//DECIZII IF/ELSE  🔥 

const age = 15;

if(age >=18){
    console.log('Poate sa conduca🙂 ')
}else{
    const aniRamasi = 18-age;
    console.log(`Este prea tanara sa conduca mai are de asteptat ${aniRamasi} ani`)
};

const andeNastere = 2001;
let century;
if(andeNastere<=2000){
    secol = 20;
}else{
    secol =21;
};
console.log(secol);


//CONVERSIA TIPURILOR DE DATE🔥 //Type Conversion
//conversia de la un tip de date la altul

const inputYear = '1989'; //string
console.log(Number(inputYear), inputYear)//convert string to number
console.log(Number(inputYear)+18); //2007
console.log(Number('Cosmin')); //NaN - Not a Number (Invalid Number)
console.log(String(23),23); //primul 23 string, al doilea numar

//TIPURI DE CONSTRANGERE //Type Coercion

console.log('Am '+ 23 + ' de ani') //string
console.log('23' - '10' - 3); //numar 10
console.log('23' + '10' + 3); //string 23103
console.log('23'*'2')// numar 46
console.log('22'/'2')// numar 11
console.log('23' > '18')// bolean

let n = '1' + 1;// string 11
n = n-1;//11-1
console.log(n); //10

//Valori TRUTHY and FALSY🔥
//5 valori Falsy: 0, '', undefined, null, Nan

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Cosmin')); //true
console.log(Boolean({}));//true
console.log(Boolean(''));// false

let bani = 0; //false
if(bani){
    console.log("Nu-i cheluii pe toti");
} else {
    console.log("Ar trebuii sa te angajezi"); //se executa
};

bani = 10; //true
if(bani){
    console.log("Nu-i cheluii pe toti");//se executa
} else {
    console.log("Ar trebuii sa te angajezi"); 
};

let inaltime;
if(inaltime){
    console.log('Huray! Inaltimea este definita');
}else{
    console.log('Inaltimea este UNDEFINED');
}

//Operatori de Egalitate == Vs ===🔥

const varsta = '18';
if(varsta === 18) console.log('Esti adult(strict)');
if(varsta == 18) console.log('Esti adult(loose)');

const favorit = Number(prompt("Care este numarul tau favorit?"));
console.log(favorit); 
console.log(typeof favorit)

if(favorit === 20){ //
    console.log('Cool! 20 este un numar minunat')
}else if(favorit===7){
    console.log('Si 7 e un nr Minunat')
}else if (favorit === 9){
    console.log('Si 9 este un Nr Misto')
}else{
    console.log(`Numarul nu este nici 20 nici 7 sau 9 dar este ${favorit}`)
};

if(favorit !==20){
    console.log('de ce nu 20?');
}


//Logica Boolean /Boolean Logic 🔥

const areLicentaDeCondus = true
const areOchiBuni = true;

console.log(areLicentaDeCondus && areOchiBuni); //true daca toti sunt true sau false daca unul sau toti sunt falsi
console.log(areLicentaDeCondus || areOchiBuni);//true daca cel putin unul este adevarat, false daca toti sunt falsi
console.log(!areLicentaDeCondus);

//const poateSaConduca = areLicentaDeCondus && areOchiBuni;
// if(poateSaConduca){
//     console.log('Nini poate sa conduca!');
// }else{
//     console.log('Altcineva ar trebuii sa conduca!');
// }

const esteObosit = false;
console.log(areLicentaDeCondus && areOchiBuni && esteObosit); 

if(areLicentaDeCondus && areOchiBuni && !esteObosit){
    console.log('Nini poate sa conduca!');
}else{
    console.log('Altcineva ar trebuii sa conduca!');
}

//SWITCH STATMENT 🔥 


const zi ='sambata';
switch(zi) {
    case 'luni': //zi ==='Luni'
        console.log(`Astazi este ${zi}`);
        console.log(`Muncesti de la 08:00-16:30`);
        break;
    case 'marti':
        console.log(`Astazi este ${zi}`);
        break;
    case 'miercuri':
    case 'joi':
        console.log(`Astazi este ${zi}`);
        break
    case 'vineri':
        console.log(`Astazi este ${zi}`);
        break
    case 'sambata':
    case 'duminica':
        console.log(`Astazi este ${zi} si este Weekend!`);
        break;
    default:
        console.log('Nu este o zi Valida');
};

if(zi === 'luni'){
    console.log(`Astazi este ${zi} din if`)
}else if(zi === 'marti'){
    console.log(`Astazi este ${zi} din if`)
}else if(zi ==='miercuri' || zi ==='joi'){
    console.log(`Astazi este ${zi}din if`)
}else if( zi === 'vineri'){
    console.log(`Astazi este ${zi} din if`)
}else if (zi ==='sambata' || zi==='duminica'){
    console.log(`Astazi este ${zi} si este Weekend din if`)
} else {
    console.log('Ziua introdusa nu este valida din if');
}

//STATEMENTS AND EXPRESIONS 🔥

3+4 //Expresion fiindca produce o valoare
1989 //Tot expresie fiindca este/produce o valoare
true && false && !false //Expresie produce o valoare booleana

if(23>10){
    const str= '23 este mai mare'; //Declaratie declara variabila si nu produce valoare
}
const eu ='Cosmin'
console.log(`Sunt in varsta de ${2021-1989} ani si ma cheama ${eu} `)


//THE CONDITIONAL(TERNARY OPERATOR) / OPERATORUL TERNAR 🔥

const varsta =13;
varsta >= 18 ? console.log('Imi place sa beau vin🍷 ') : console.log('Trebuie sa beau apa💧 ');
//conditie ? se executa daca conditia e adevarat b se executa daca conditia nu este adevarata
const baut = varsta >=18 ? 'Alcool🍷' : 'Fara Alcool💧';
console.log(baut); 

letrf baut2;
if(varsta>18){
   baut2='Alcool🍷'
}else{
   baut2='Fara Alcool💧'
}
console.log(baut2);

console.log(`Imi place sa beau ${varsta >=18 ? 'Alcool🍷' : 'Fara Alcool💧'}`)
*/
