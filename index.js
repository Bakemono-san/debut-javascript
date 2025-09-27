// destructuration 

const fruits = ["pomme", "banane", "cerise", "orange"]

// 
const [fruits1, fruits2, fruits3] = fruits;
console.log(fruits[2]); //cerise

// const fruits1 = fruits[0];
// const fruits2 = fruits[1];
// const fruits3 = fruits[2];
// const fruits4 = fruits[3];

// const [fruits1, fruits2, fruits3, fruits4] = [fruits[0], fruist[1], fruist[2], fruist[3]]
// const [fruits1, fruits2, fruits3, fruits4] = [fruits[0, 1, 2, 3]]

// const cerise = fruits[2];

// c'est quoi destructuration c'est de recuper un element dans un tableau ou un objet et le assigne a une variable
// 1er etape
// déclaration d'une variable 
//recuperation  des elements dans un tableau ou dans un objet
// assigner les elemnents dans une autre variable

// syntaxe

// const a = [elements];
// const [b] = a;

//const [, , cerise, ]= fruists;

//const [pomme, ...autrefruits] = fruits;

//const pomme = fruits[0];

//const autrefruits = [...fruits[1,2,3]];




//const [pomme]= fruists;




const personne ={
    nom: "ndiaye",
    age: 26,
    ville: dakar
};


const personne2 ={
    nom: "ndiaye",
    age: 26,
    ville: dakar
};

console.log(personne.ville); //dakar

const { nom, age, ville} = personne;
console.log(ville); //dakar



// const nom = personne.nom 
// const age = personne.age 
// const ville = personne.ville 


const {nom: nom1, age: age1, ville: ville1} = personne2;

// const nom1 = personne2.nom 
// const age1 = personne2.age 
// const ville1 = personne2.ville 


//destructuration partiel

const { nom: nom2} = personne

const {nom: nom3, ...autresvariable } = personne2;

// const nom3 = personne2.nom
// const autresvariable = {age: personne2.age, ville: personne2.ville}

// 2) spread (etaler talale) operator


let Nom = "seck"; //equivalent Nom = ["s", "e","c", "k"] 

let [prenom] = Nom;
// let [prenom] = "s" ;
// let [ ,a,b ] = Nom ;


