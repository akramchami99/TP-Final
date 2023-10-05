
process_search_profil()

function process_search_profil()
{
    const search_box = document.querySelector("#champ_de_recherche")
    listener_update_profil_list()

    function listener_update_profil_list()
    {
        search_box.addEventListener("keyup", update_profil_list)
    }

    // Quand l'utilisateur frappe au clavier dans le champ de recherche
    function update_profil_list()
    {
        let all_profils = document.querySelectorAll(".profil_design")

        // On rend invisible tout les profils, de base
        all_profils.forEach(profil => 
            {
                profil.style.display = "none"
            })

        // On verifie s'il y a des caractère dans le champ de recherche
        // Si oui
        if(search_box.value != "")
        {
            // On va rendre visible tout les profils qui ont pour nom : le nom rentrer dans le champ de saisie
            let all_prenom = document.querySelectorAll(".user_prenom")
            all_prenom.forEach(prenom => 
                {
                    let value_prenom = prenom.innerHTML
                    if(value_prenom.toLowerCase().includes(search_box.value.toLowerCase()))
                    {
                        prenom.closest(".profil_design").style.display = "flex"
                    }
                }) 
        }
        // Si non
        else
        {
            // On remet en visible tout les profils
            all_profils.forEach(profil => 
                {
                    profil.style.display = "flex"
                })
        }
    }
}



