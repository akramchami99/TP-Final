
function focus_on_this_profil(event)
{
    let all_user_prenom = document.querySelectorAll(".user_prenom")
    let prenom_under_mouse = event.target.innerHTML
    all_user_prenom.forEach(prenom => 
        {
            if(prenom.innerHTML == prenom_under_mouse)
            {
                let profil_match = prenom.closest(".profil_design")
                profil_match.classList.add("focus_on")
            }
        })
}

function remove_focus_on_this_profil(event)
{
    let all_user_prenom = document.querySelectorAll(".user_prenom")
    let prenom_under_mouse = event.target.innerHTML
    all_user_prenom.forEach(prenom => 
        {
            if(prenom.innerHTML == prenom_under_mouse)
            {
                let profil_match = prenom.closest(".profil_design")
                profil_match.classList.remove("focus_on")
            }
        })
}

function load_all_name_in_nav_bar()
{
    // On selectionne la destination
    let destination = document.querySelector("#myDropdown")
    // On reset la destination
    destination.innerHTML = ""
    // On récupère tout les prenom
    let all_prenom = document.querySelectorAll(".user_prenom")

    // S'il n'y a pas encore de profil rajouter
    if(all_prenom.length == 0)
    {
        let template = `<div class="profil-container-empty">(vide)</div>`
        destination.innerHTML = template
    }
    else
    {
        // Pour chaque prénom on créé u template qu'on injecte dans la destination
        all_prenom.forEach(prenom => 
            {
                let template = `<div class="profil-container">${prenom.innerHTML}</div>`
                destination.innerHTML += template
            })
    }

    // Une fois que les noms de profils ont été injecter, on ajoute un listener pour le survol de la souris sur les noms
    let all_profils_names = destination.querySelectorAll(".profil-container")
    // On ajoute un listener au survol
    all_profils_names.forEach(profil => 
        {
            profil.removeEventListener("mouseover", focus_on_this_profil)
            profil.addEventListener("mouseover", focus_on_this_profil)

            profil.removeEventListener("mouseout", remove_focus_on_this_profil)
            profil.addEventListener("mouseout", remove_focus_on_this_profil)
        })
}

load_all_name_in_nav_bar()