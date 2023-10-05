function showDropdown() {
    document.getElementById("myDropdown").style.display = "flex";
}

function hideDropdown() {
    document.getElementById("myDropdown").style.display = "none";
}


let show_profil_element = document.querySelector(".profil-container")
show_profil_element.addEventListener("keyup", controle_key_press_on_profil_button)
function controle_key_press_on_profil_button(event)
{
    if(event.which === 13)
    {
        // On préciser l'élément à afficher
        let element_à_afficher_ou_non = document.getElementById("myDropdown")
        // On récupère le display qui a été défini dans la feuille css
        let display = getComputedStyle(element_à_afficher_ou_non).getPropertyValue("display")
        // On plaque ce display à l'élément ( pour éviter d'avoir à appuyer deux fois sur entrée pour l'initialisation )
        element_à_afficher_ou_non.style.display = display
        // On fait unt ernaire pour gérer l'affichage ou non
        element_à_afficher_ou_non.style.display == "none" ? element_à_afficher_ou_non.style.display = "flex" : element_à_afficher_ou_non.style.display = "none"
    }
}

let element_triche = document.querySelector("#title")
element_triche.addEventListener("focus", hideDropdown)
