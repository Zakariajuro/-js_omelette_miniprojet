// ** Créer un objet personne. Cette personne doit avoir des propriétés et des méthodes : 
// * - nom(string)
// * - lieu(string)
// * - argent(number)
// * - mainDroite(tableau)
// * ( du coup main gauche(tableau))
// * - seDeplacer(lieu)
// * - payerArticle(article)
// * - couper(ingredient, outil)
// */

let personne = {
    nom: "Zakaria",
    lieux: "Bruxelles",
    argent : 50,
    mainDroite : [],
    mainGauche : [],
    seDeplacer(star, end){
        // console.log(`${this.nom} est a la maison`);
        console.log(`${this.nom} est actuellement a la ${star.nom}`);
        if (start.embarquer(this) == true) {
            end.personnes.push(this);
            console.log(`${this.prenom} est arriver a ${end.nom}`);
        } else {
            start.personnes.push(this);
            console.log(`${this.prenom} n'a plus assez d'argent et reste a ${start.nom}`);
        }
    },
    payerArticle(){

    },
    couper(){

    }
}

// * Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :

let maison = {
    nom : "maison",
    personne : [],
}


// * Créer un outil (couteau) pour découper les ingrédients achetés
// * propriétés : nom et action.
// * action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
// */

let outil = {
    nom : "couteau",
    action : "coupé"
};

// Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
//  * propriétés : nom, etats ( entier,coupé, moulu), prix
//  */

class Ingredient {
    constructor(nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}


// // Créer un lieu "epicerie" qui a comme propriétés :
// // nom, personnes = [], paniers (un tableau d'objets "panier" avec une propriété "type" égal à panier et le contenu du panier, égal à un tableau vide),
// // Les "ingrédients" créés juste au dessus contenus dans un tableau.
// /**

let epicerie = {
    nom : "epicerie",
    personne : [],
    panier: {
        type : "panier",
        panier :[]
    }
    
}
// * Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
//  */

let poele ={
    contenu : "",
    cuire(chauffer){
        function chauffer(temp){
            if (temp < 100){
                temp += 20;
                setTimeout(() => {
                    this.contenu.push('cuit');
                    console.log(`la preparation est ${this.contenu}`);
                    chauffer(temp);
                }, 4000);
            } else {
                console.log(`la poele ne cuit pas`);
            };
        };
    }
}

// Créer un bol avec un tableau comme contenu
// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]

let bol ={
    contenu = "",
    nomMelanger(newMelange){
        let newMelange ={
            etat = "pas cuit",
        }
    }
}
// let melange = new Bol ("")



// let maison = new Lieux ('maison', []);
let oignon = new Ingredient ('oignon', 'entier',1.5);
let epice = new Ingredient ('epice', 'moulu',3);
let oeuf = new Ingredient ('oeuf', 'entier',4.5);
let fromage = new Ingredient ('fromage', 'moulu',1);
// let epicerie = new Lieux ('epicerie', []);
// let poele = new Poele (0);
// let bol = new Bol (0);



personne.seDeplacer()
