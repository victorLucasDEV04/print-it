
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]




const totalSlide = slides.length;
let compteurSlide = 0;



// EVENT LISTENERS
const arrowLeft = document.querySelector(".arrow_left"); //création de la variable arrowLeft qui correspond a la class ".arrow_left"
arrowLeft.addEventListener("click", function() { // on creer un événement lors du click
	console.log("Clique sur la fleche de gauche");
});
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function() {
	console.log("Clique sur la fleche de droite");
});


// BULLET POINTS
const bulletPoints = document.querySelector(".dots"); 
for (let index = 0; index < totalSlide; index++) { // on utilise la boucle for comprenant 3 expressions
	let dot = document.createElement("div"); // Création de la div via la balise "div"
	dot.classList.add("dot"); //Ajout la div avec sa classe
	bulletPoints.appendChild(dot); //On rattache la div de classe "dot" vers la div parent de classe "dots" via appendchild
	if (index === compteurSlide) {  // avec l'instruction "if" avec la condition index est strictement egal au compteur des images
	  dot.classList.add("dot_selected"); // alors on ajoute la class "dot_selected" sur le point de l'index selectionné
	}
}



// Flèche gauche

let flecheGauche = document.querySelector(".arrow_left"); // Avec le selecteur "querySelector" on renvoie l'element "arrow_left" qui correspond a la class, dans la variable arrow_left.
	flecheGauche.addEventListener("click", function() { // On créer un évenement au click sur la fleche de gauche
	compteurSlide--;// Décrémentation de - 1 la position de l'image
	
	if (compteurSlide < 0) {// On applique la condition "if" , si le compteur des image est inferieur à O. pour définir position de la slide après incrémentation
		compteurSlide = slides.length -1;//  slide.lenght permet de compter le nombre d'images du tableau slide. on retire -1.
	}

	// Changer point selectionné
	let divDot = document.querySelectorAll(".dot"); //création de la variable divDot en selectionant tous les class dot
	divDot.forEach((dot, index) => { //la boucle permet de parcourir pour chaque éléments de la divDot , les dot,
	dot.classList.toggle("dot_selected", index == compteurSlide); //classList.toggle permet d'afficher la dot selected sur le point selectionné, si l'index est égal au slide du compteur d'image.
	});
	
	// Changer l'image
	const imageBanner = document.querySelector(".banner-img"); //la variable imageBanner selectionne la banner-img
	console.log(compteurSlide);
	imageBanner.src = "./assets/images/slideshow/" + slides[compteurSlide].image;// on indique le chemin des images de la banner

	
	// Changer le texte
	const imageTexte = document.querySelector("#banner p"); //Création de la variable du texte, en récupérant l'élement banner p.
	imageTexte.innerHTML = slides[compteurSlide].tagLine;
});






// Flèche droite

let flecheDroite = document.querySelector(".arrow_right");
flecheDroite.addEventListener("click", function() {
	compteurSlide++;

	if (compteurSlide > slides.length -1) {
		compteurSlide = 0;
	}
	
	// Changer point selectionné
	const divDot = document.querySelectorAll(".dot");
	divDot.forEach((dot,index) => {
		dot.classList.toggle("dot_selected", index == compteurSlide);	
	});
	
	// Changer l'image
	const imageBanner = document.querySelector(".banner-img");
	console.log(compteurSlide);
	imageBanner.src = "./assets/images/slideshow/" + slides[compteurSlide].image;
	
	// Changer le texte
	const imageTexte = document.querySelector("#banner p");
	imageTexte.innerHTML = slides[compteurSlide].tagLine;
});
