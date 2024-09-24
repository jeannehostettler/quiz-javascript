// Quiz: Veuillez répondre aux questions ci-dessous. (50 min) (+15 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. VOus avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE: c'est un moyen de pouvoir stocker une information pour la réutiliser et la manipuler.
// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.
const firstName = "Jeanne";
// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.
let age = 19;
// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML: input
// - Classe(s): card-input
// - Attribut(s): type, name, placeholder, id, class

// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE: la class indique des classes qui sont associé à une ou plusieures balises HTML. Elle permet de modifier les classes par CSS ou par JavaScript. L'id définit un identifiant unique.

// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE: La méthode querySelector("...") permet de définir un variable en allant rechercher les informations dans le HTML. querySelector permet d'aller chercher éléments dans l'HTML

// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
// 7.1 Créez une variable appelée "cardContent".
// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.
const cardContent = document.querySelector(".card-content");
// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
// 8.1 Utilisez la propriété .classList pour ajouter (.add("...")) la class ".highlight" à l'élément HTML.
cardContent.classList.add(".highlight");
// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder" (.getAttribute("...")) de l'élément HTML <input> (ligne 17 du code HTML).
const input = document.querySelector("input");
console.log(input.getAttribute("placeholder"));
// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE: L'écouteur d'événement va écouter l'action à réaliser pour que l'événement ce produise. Par exemple : lorsqu'un boutton est cliqué, le texte apparaît. Pour ce faire, il faut placer un écouteur d'événement qui va dire au texte d'apparaître quand le boutton est cliqué ("click").

// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
// 11.2 : Utilisez la méthode .addEventListener("...", function() {...}) sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class ".hide" de l'élément HTML <p> (ligne 29-31 du code HTML).
const textBtn = document.querySelector("button");
const toggleText = document.querySelector("#toggle-text");
textBtn.addEventListener("click", function () {
  toggleText.classList.toggle("hide");
});
