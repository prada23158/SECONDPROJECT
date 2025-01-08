function somme(a, b) {
    return a + b;
}
console.log("La somme de 1 et 2 est :", somme(1, 2));

//fonction de difference
function difference(a, b) {
    return a - b;
}
console.log("La soustraction de 1 et 2 est :", difference(1, 2));

//Fonction de produit
function produit(a, b) {
    return a * b;
}

console.log("Le produit entre 1 et 2 est :", produit(1, 2));


function difference(a, b) {
    return Math.abs(a - b);
}

let a = 1;
let b = 2;

console.log("La soustraction de 1 et 2 est :", difference(a, b));

//Fonction de produit
function produit(a, b) {
    return a * b;
}

console.log("Le produit entre 1 et 2 est :", produit(1, 2));

// Fonction de division
function division(a, b) {
    if( b == 0){
        return "Impossible de diviser par O";
    }

    return a / b;
}

console.log("La division entre 1 et 2 est :", division(1, 2));