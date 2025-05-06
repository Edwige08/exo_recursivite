import { dossierPrincipal } from "./dossier-principal.js";
import { dossierPrincipal2 } from "./dossier-principal-2.js";

// -------------------------------------------------------------
// Etape 1 : fonction qui affiche seulement le dossier principal
const afficherDossier = (dossier) => {
    console.log("📁 " + dossier.nom);
}

afficherDossier(dossierPrincipal);
// -------------------------------------------------------------

console.log('------------------'); // Pour séparer les résultats dans la console

// -------------------------------------------------------------
// Fonction itérative qui affiche jusqu'aux fichiers de 3e niveau :
const afficherDossierIteratif = (dossier) => {
    console.log("📁 " + dossier.nom);
    for (let x = 0; x < dossier.contenu.length; x++) {
        if (dossier.contenu[x].contenu) {
            console.log('📁 ' + dossier.contenu[x].nom);
            for (let y = 0; y < dossier.contenu[x].contenu.length; y++) {
                if (dossier.contenu[x].contenu[y].contenu) {
                    console.log('📁 ' + dossier.contenu[x].contenu[y].nom);
                    for (let z = 0; z < dossier.contenu[x].contenu[y].contenu.length; z++) {
                        if (dossier.contenu[x].contenu[y].contenu[z].contenu) {
                            console.log('📁 ' + dossier.contenu[x].contenu[y].contenu[z].nom);
                        } else {
                            console.log('📑 ' + dossier.contenu[x].contenu[y].contenu[z].nom);
                        }
                    }
                } else {
                    console.log('📑 ' + dossier.contenu[x].contenu[y].nom);
                }
            }
        }
        else {
            console.log('📑 ' + dossier.contenu[x].nom);
        }
    }
}
afficherDossierIteratif(dossierPrincipal);
// -------------------------------------------------------------

console.log('------------------'); // Pour séparer les résultats dans la console

// -------------------------------------------------------------
// Fonction récursive qui affiche tous les niveaux de dossiers :
const afficherDossierRecursif = (dossier) => {
    if (dossier.contenu) {
        console.log('📁 ' + dossier.nom)
        for (let x = 0; x < dossier.contenu.length; x++) {
            afficherDossierRecursif(dossier.contenu[x])
        }
    } else {
        console.log('📑 ' + dossier.nom);
    }
}
afficherDossierRecursif(dossierPrincipal);
// -------------------------------------------------------------

console.log('------------------'); // Pour séparer les résultats dans la console

// ---------------------------------------------------
// Etape 4 : Compare tes deux fonctions afficherDossierIteratif 
// et afficherDossierRecursif. Qu’en penses-tu ? Quels sont les 
// avantages et inconvénients de chaque manière d’écrire ?

// Réponse : La fonction récursive est plus simple à écrire, 
// elle prend moins de lignes et elle n'a pas de limite de niveaux
// de sous-dossiers contrairement à la fonction itérative.
// -------------------------------------------------------------

afficherDossierRecursif(dossierPrincipal2);