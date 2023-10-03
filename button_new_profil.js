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
            console.log("controle enregistrement")
            return
    }
}