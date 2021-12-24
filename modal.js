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
  
  const btnClose = document.querySelector(".close");  // selection de la partie span "close"
  
  const txtValid = document.getElementById("success");          // selection du paragraphe "merci"
  
  const formContainer = document.querySelector(".formContainer"); 
  const modalValid = document.querySelectorAll(".btn-submit");  // selection du bouton "submit"
  
  
  
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  btnClose.addEventListener("click", closeModal);  // Evenement sur const btnClose qui appelle fonction closeModal
  
  formContainer.addEventListener("submit", validate)
  
  // modalValid.forEach((btn) => btn.addEventListener("click", txtValidAppear));
  
  // modalValid.forEach((btn) => btn.addEventListener("click", validate));
  
  
  
  
  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }
  
  function closeModal() {
    modalbg.style.display = "none";       // fonction qui permet de cacher la modale derrière le reste
  }
  
  function txtValidAppear() {
    formContainer.style.display = "none";
    txtValid.style.display = "block";    // Fonction qui fait apparaitre le txt
    console.log("testvalidappear")
  }
  
  
  
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
  
    console.log("essai")
    if (firstName.value.length <= 2){         // Verification Prenom
      firstValid.style.display = "block";
      isValid = false;
    }
  
    if(lastName.value.length <= 2){                 // Verification Nom
      lastValid.style.display = "block";
      isValid = false;
    }
    
  
    if (date.value.length < 10){                // Verification Anniversaire
      dateValid.style.display = "block";
      isValid = false;
    }
  
    if(mail.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)=== null){        
      mailValid.style.display = "block";
      isValid = false;
    }
  
    if (tournoi.value < 1){                       // Verification Nombre tournois
      quantityValid.style.display = "block";
      isValid = false;
    }
    console.log(ville)
  
    if(ville === null){                           // Verification Ville
      villeValid.style.display = "block";
      isValid = false;
    }
  
    if(accepted.checked === false){              // Verification Conditions d'utilisation
      acceptedValid.style.display = "block";
      isValid = false;
    }
  
  
    if(isValid){
      txtValidAppear();
    }
  }
  
  