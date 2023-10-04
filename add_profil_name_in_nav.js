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
        let template = `<div class="profil-container">(vide)</div>`
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
}

load_all_name_in_nav_bar()