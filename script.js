// Script pour mettre en surbrillance le lien de navigation actif

document.addEventListener("DOMContentLoaded", function() {
    // Récupérer le nom du fichier actuel (ex: index.html)
    const currentPath = window.location.pathname.split("/").pop();
    
    // Si le chemin est vide (racine), considérer comme index.html
    const targetPath = currentPath === "" ? "index.html" : currentPath;

    // Sélectionner tous les liens de navigation
    const navLinks = document.querySelectorAll("nav ul li a");

    // Parcourir les liens et ajouter la classe 'active' si le href correspond
    navLinks.forEach(link => {
        // Obtenir le nom du fichier depuis le href
        const linkPath = link.getAttribute("href");
        
        if (linkPath === targetPath) {
            link.classList.add("active");
        }
    });
});