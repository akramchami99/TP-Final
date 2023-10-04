main()

////////// Fonction du main
function main()
{
    listener_pilote()
}

///////// Lancement des pilotes au chargement de la page
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

const Users_data = [];
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
    const formData = {
      Nom: nom,
      Prenom: prenom,
      Âge: age,
      Sexe: sexe,
      Présentation: presentation
    };
    
    Users_data.push(formData)
    // Create a new result container
    const resultContainer = document.createElement("article");
    resultContainer.classList.add("profil_design")
    // Display the values in the new result container
    const classList = ['user_nom','user_prenom','user_age','user_sexe','user_presentation']
    let i = 0
    for (const key in formData) {
      const para = document.createElement("p");
      const value = document.createElement("p");
      value.classList.add(classList[i]);
      i++;
      value.textContent = `${formData[key]}`
      para.textContent = `${key}: `;
      para.appendChild(value);
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
    afficher_cacher_le_formulaire()
    load_all_name_in_nav_bar()
  }
  
  

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
            console.log(Users_data);
            return
    }
}

