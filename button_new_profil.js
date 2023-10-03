main()

/////////// Fonction du main
function main()
{
    listener_pilote()
}

/////////// Lancement des pilotes au chargement de la page
function listener_pilote()
{
    let button_new_profil = document.querySelector("#new_profil"),
        button_enregistrer_annuler_formulaire = document.querySelectorAll(".form_button");


        

    button_enregistrer_annuler_formulaire.forEach(bouton => 
        {
            bouton.removeEventListener("click", verification_bouton_appuyer)
            bouton.addEventListener("click", verification_bouton_appuyer)
        })

    button_new_profil.removeEventListener("click", afficher_cacher_le_formulaire)
    button_new_profil.addEventListener("click", afficher_cacher_le_formulaire)
}

/////////// Fonction des pilotes

// Sert à afficher ou cacher le formulaire
function afficher_cacher_le_formulaire()
{
    let overlay_element = document.querySelector("#overlay")
    let display = getComputedStyle(overlay_element).getPropertyValue("display")
    if(overlay_element.style.display == "")
    {
        display == "none" ? overlay_element.style.display = "flex" : overlay_element.style.display="none"
    }
    else
    {
        overlay_element.style.display == "none" ? overlay_element.style.display = "flex" : overlay_element.style.display = "none"
    }
}


// Function to retrieve form values, save them in an array, and display them
function processForm() {
    // Get form elements
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const age = document.getElementById("age").value;
    const sexeElements = document.getElementsByName("sexe");
    let sexe = "";
    for (const element of sexeElements) {
      if (element.checked) {
        sexe = element.value;
        break;
      }
    }
    const presentation = document.getElementById("presentation").value;
  
    // Create an array to store the values
    const formData = [nom, prenom, age, sexe, presentation];
  
    // Create a new result container
    const resultContainer = document.createElement("div");
    resultContainer.classList.add("profil_design")
    // Display the values in the new result container
    for (let i = 0; i < formData.length; i++) {
      const para = document.createElement("p");
      para.textContent = `${formDataLabels[i]}: ${formData[i]}`;
      resultContainer.appendChild(para);
    }
  
    // Append the new result container to the main results container
    const mainResultContainer = document.getElementById("profils_box");
    mainResultContainer.appendChild(resultContainer);
  
    // Clear the form inputs for the next submission
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("age").value = "";
    for (const element of sexeElements) {
      element.checked = false;
    }
    document.getElementById("presentation").value = "";
  }
  
  // Add an event listener to the form to call the processForm function when submitted
  const form = document.getElementById("formulaire");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting
    processForm();
  });
  
  // Labels for the form data
  const formDataLabels = ["Nom", "Prenom", "Âge", "Sexe", "Présentation"];
  

// Sert à verifier sur quel bouton l'utilisateur a appuyer dans le formulaire
function verification_bouton_appuyer(event)
{
    let value_bouton = event.target.value
    switch(value_bouton)
    {
        // S'il clique sur annulation, on fait disparaitre le formulaire
        case "Annuler":
            event.preventDefault()
            afficher_cacher_le_formulaire()
            return
        // S'il clique sur enregistrer, on lance la fonction pour injecter un élément dans le dom, et on cache le formulaire
        case "Enregistrer":
            event.preventDefault()
            processForm();
            return
    }
}