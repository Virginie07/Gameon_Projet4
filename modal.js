function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// selection de la partie span "close"
const btnClose = document.querySelector(".close");            

 // selection du paragraphe "merci"
const txtValid = document.getElementById("success");         
 
// Sélection du contenu du formulaire
const formContainer = document.querySelector(".formContainer"); 


  


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Evenement sur const btnClose qui appelle fonction closeModal
btnClose.addEventListener("click", closeModal);  

// Evenement qui appelle la fonction validate
formContainer.addEventListener("submit", validate)



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction qui permet de cacher l'intégralité de la modale 
function closeModal() {
  modalbg.style.display = "none";       
}

// Fonction qui fait apparaitre le txt de validation
function txtValidAppear() {
  formContainer.style.display = "none";
  txtValid.style.display = "block";    
}

// Fonction de vérification du formulaire

function validate(event) {
  event.preventDefault()

  const firstName = document.getElementById("first");
  const firstValid = document.getElementById("firstValid");

  const lastName = document.getElementById("last");
  const lastValid = document.getElementById("lastValid");

  const mail = document.getElementById("email");
  const mailValid = document.getElementById("mailValid");

  const date = document.getElementById("birthdate");
  const dateValid = document.getElementById("dateValid");

  const tournoi = document.getElementById("quantity");
  const quantityValid = document.getElementById("quantityValid");

  const ville = document.querySelector("input[name='location']:checked");
  const villeValid = document.getElementById("inputValid");

  const accepted = document.getElementById("checkbox1");
  const acceptedValid = document.getElementById("acceptedValid");


  let isValid = true;
  firstValid.style.display = "none";
  lastValid.style.display = "none";
  dateValid.style.display = "none";
  mailValid.style.display = "none";
  quantityValid.style.display = "none";
  villeValid.style.display = "none";
  acceptedValid.style.display = "none";

  // Verification Prenom
  if (firstName.value.length <= 2){               
    firstValid.style.display = "block";
    isValid = false;
  }
  
  // Verification Nom
  if(lastName.value.length <= 2){                 
    lastValid.style.display = "block";
    isValid = false;
  }
  
  // Verification Anniversaire
  if (date.value.length < 10){                    
    dateValid.style.display = "block";
    isValid = false;
  }

  // Vérification email
  if(mail.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)=== null){        
    mailValid.style.display = "block";
    isValid = false;
  }
  
  // Verification Nombre tournois
  if (tournoi.value < 1){                       
    quantityValid.style.display = "block";
    isValid = false;
  }

  // Verification Ville
  if(ville === null){                           
    villeValid.style.display = "block";
    isValid = false;
  }

  // Verification Conditions d'utilisation
  if(accepted.checked === false){              
    acceptedValid.style.display = "block";
    isValid = false;
  }


  if(isValid){
    txtValidAppear();
  }
}

