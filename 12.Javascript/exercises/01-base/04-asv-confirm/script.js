/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const age = prompt ('Quel âge avez vous?');
    const sexe = prompt ('Quel est votre genre?');
    const ville = prompt ('Dans quelle ville habitez vous?');
    var resultat = window.confirm('Ces infos sont elles correctes? Age: '+ age + ', Sexe: ' + sexe + ', Ville: ' + ville + '?');
    

    if (resultat == true){
        alert('Merci de votre honnêteté!')
    
    }else{
        window.location.reload();
        alert((age) (sexe) (ville));
    }

})();
