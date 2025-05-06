import { dossierPrincipal } from "./dossier-principal.js";

const afficherDossier = (dossier) => {
    console.log("📁 " + dossier.nom)
}

afficherDossier(dossierPrincipal);
console.log('------------------');

const afficherDossierIteratif = (dossier) => {
    console.log("📁 " + dossier.nom)
    for (let x = 0 ; x < dossier.nom.length ; x++) {
        if (dossier.contenu[x].contenu) {
            console.log('📁 ' + dossier.contenu[x].nom)
        }
        else {
            console.log('📑 ' + dossier.contenu[x].nom)
        }
    }
}
afficherDossierIteratif(dossierPrincipal)

console.log('------------------');

const afficherDossierRecursif = (dossier) => {
}
// afficherDossierRecursif(dossierPrincipal)