// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studente = {
    nome : 'federico',
    cognome : 'ferrara',
    eta : 33
}
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
console.log(studente);

for (var key in studente){
    console.log(key + ':' +  studente[key]);
}
// Creare un array di oggetti di studenti.

var classe_studenti = [
    studente_1 = {
        nome : 'federico',
        cognome : 'ferrara',
        eta : 33
    },
    studente_2 = {
        nome : 'geppetto',
        cognome : 'ferrara',
        eta : 60
    },
    studente_3 = {
        nome : 'federica',
        cognome : 'ferraro',
        eta : 35
    }
]
console.log(classe_studenti);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < classe_studenti.length; i++){
    console.log(classe_studenti[i].nome);
    console.log(classe_studenti[i].cognome);
}

var a = prompt('dimmi nome');
var b = prompt('dimmi cognome');
var c = parseInt(prompt('dimmi eta'));
var nuovo_studenti = {};
nuovo_studenti.nome=a;
nuovo_studenti.cognome=b;
nuovo_studenti.eta=c;
classe_studenti.push(nuovo_studenti);
console.log(classe_studenti);
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
