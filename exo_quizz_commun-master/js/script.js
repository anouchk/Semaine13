// DECLARATION DES VARIABLES : QUESTIONS (il y a j questions, j compris entre 1 et 10) ET REPONSES (i réponses à chaque fois, i compris entre 1 et 4)
// Dans la propriété bonneReponse, j'ai remplacé bonneReponse : reponses[x] directement par bonneReponse : x+1, comme ça bonneReponse aura le même numéro que la div #rep, ce sera utile pour plus tard
var question1 = {
	titre: "Combien y a t-il de nains autour de Blanche Neige ?",
	reponses: [5, 6, 7, 8],
	bonneReponse: 3,
	ReponsesUtilisateur : [],
	
};

var question2 = {
	titre: "Qui est l'inventeur de l'ordinateur ?",
	reponses: ["Brad Pitt", "Steve Jobs", "Ronald McDonald", "Alan Turing"],
	bonneReponse: 4,
	ReponsesUtilisateur : [],
	
};

var question3 = {
	titre: "Quelle est la couleur du cheval blanc d'henri IV ?",
	reponses: ["Jaune", "Blanc", "Gris", "Noir"],
	bonneReponse: 2,
	ReponsesUtilisateur : [],
	
};

var question4 = {
	titre: "Qui est l'auteur du livret de la Traviata (La Dame aux camélias) ?",
	reponses: ["Le père d\'Alexandre Dumas", "Alexandre Dumas", "Le fils d\'Alexandre Dumas", "Le neveu d\'Alexandre Dumas"],
	bonneReponse: 3,
	ReponsesUtilisateur : [],
	
};

var question5 = {
	titre: "Combien y a t il de départements français ?",
	reponses: [98, 99, 100, 101],
	bonneReponse: 4,
	ReponsesUtilisateur : [ ],
	
};

var question6 = {
	titre: "Quel est le langage de programmation le plus utilisé ?",
	reponses: ["C", "C#", "JavaScript", "ActionScript"],
	bonneReponse: 1,
	ReponsesUtilisateur : [ ],
	
};

var question6 = {
	titre: "Combien y a t il de pays membres dans UE en 2016 (avant le Brexit, ahem) ?",
	reponses: [20, 24, 28, 35],
	bonneReponse: 3,
	ReponsesUtilisateur : [ ],
	
};

var question7 = {
	titre: "Quel pays ne figure pas parmi les membres de UE (2016) ?",
	reponses: ["Suède", "Norvège", "Danemark", "Finlande"],
	bonneReponse: 2,
	ReponsesUtilisateur : [ ],
	
};

var question8 = {
	titre: "Quel est le meilleur ami de Tintin ?",
	reponses: ["Milou", "Jean-Luc Mélenchon", "Le schtroumpf dormeur", "Naruto"],
	bonneReponse: 1,
	ReponsesUtilisateur : [ ],
	
};

var question9 = {
	titre: "Quelle couleur n'est pas présente dans un arc en ciel ?",
	reponses: ["jaune", "Vert", "Violet", "Marron"],
	bonneReponse: 4,
	ReponsesUtilisateur : [ ],
	
};

var question10 = {
	titre: "Combien de jours y a t il dans une année bissextile ?",
	reponses: [364, 365, 366, 367],
	bonneReponse: 3,
	ReponsesUtilisateur : [ ],
	
};

var questions = [
	question1, question2, question3, question4, question5, question6, question7, question8, question9, question10
];

//INITIALISER POUR QUE CE SOIT LA PREMIÈRE QUESTION QUI SOIT AFFICHÉE
var j=0 ;

// BOUTONS NEX ET PREVIOUS
$("#next").on ("click", function () {
	//console.log('old'+ j);  vérifier que j augmente bien
	if (j < 9) {
		j++ ;
	} ;
	//console.log('new' + j);  vérifier que j augmente bien
	afficherQuestionJ(j);
});

$("#prev").on ("click", function () {
	//console.log('old'+ j);  vérifier que j diminue bien
	if (j > 0) {
		j-- ;
	};
	//console.log('new' + j);  vérifier que j diminue bien
	afficherQuestionJ(j) ;
});

// QUAND L'UTILISATEUR CLIQUE SUR UNE DES 4 REPONSES AU QUIZZ, STOCKER LA REPONSE DANS [ ] POUR CHAQUE QUESTION
$("#rep1").on ("click", function () {
	if (questions[j].ReponsesUtilisateur.length == 0) { // vérifie que l'utilisateur n'a pas déjà répondu 
		questions[j].ReponsesUtilisateur = 1 ;
		afficherQuestionJ(j) ;
	};
});

$("#rep2").on ("click", function () {
	if (questions[j].ReponsesUtilisateur.length == 0) { // vérifie que l'utilisateur n'a pas déjà répondu
		questions[j].ReponsesUtilisateur = 2 ;
		afficherQuestionJ(j) ;
	};
});

$("#rep3").on ("click", function () {
	if (questions[j].ReponsesUtilisateur.length == 0) { // vérifie que l'utilisateur n'a pas déjà répondu
		questions[j].ReponsesUtilisateur = 3 ;
		afficherQuestionJ(j) ;
	};
});

$("#rep4").on ("click", function () {
	if (questions[j].ReponsesUtilisateur.length == 0) { // vérifie que l'utilisateur n'a pas déjà répondu
		questions[j].ReponsesUtilisateur = 4 ;
		afficherQuestionJ(j) ;
	};
});

// AFFICHER LA QUESTION, LES REPONSES, ET METTRE EN VERT OU EN ROUGE SELON LE CHOIX DE L'UTILISATEUR

afficherQuestionJ = function (j) {
	
	
	
	// AFFICHER LA QUESTION
	$question = $("#question");
	$question.html(questions[j].titre) ;
	
	// AFFICHER LES 4 RÉPONSES
	var divReponseId = ["#rep1" , "#rep2" , "#rep3" , "#rep4"] ;
	for (var i = 0 ; i < 4 ; i++) { 
		$(divReponseId[i]).html(questions[j].reponses[i]) ;
		$(divReponseId[i]).removeClass("vert rouge") ;
	} ;
	// c'est la même chose que de faire :
	// $("#rep1").html(question[j].reponses[0]) ;
	// $("#rep2").html(question[j].reponses[1]) ;
	// $("#rep3").html(question[j].reponses[2]) ;
	// $("#rep4").html(question[j].reponses[3]) ;
	
	//METTRE EN VERT OU EN ROUGE 
	var iUtilisateur = questions[j].ReponsesUtilisateur ;
	if (iUtilisateur == questions[j].bonneReponse) {
		$(divReponseId[iUtilisateur-1]).addClass("vert") ;
	} else {  // vérifie que l'utilisateur n'a pas déjà répondu
		$(divReponseId[iUtilisateur-1]).addClass("rouge") ;
	} ;
}; 

$(document).ready (afficherQuestionJ(j) );
		
