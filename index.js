// Fonction pour envoyer le message via l'API Telegram
function sendMessage() {
  var user_name = document.getElementById("name").value;
  var user_email = document.getElementById("email").value;
  var user_tel = document.getElementById("tel").value;

  // Validation basique des champs du formulaire
  if (!user_name || !user_email || !user_tel) {
      document.getElementById("confirmation").style.color = "red";
      document.getElementById("confirmation").innerText = "Veuillez remplir tous les champs ! ❌";
      document.getElementById("confirmation").style.display = "block";
      // Masque le message après 3 secondes
      setTimeout(() => {
          document.getElementById("confirmation").style.display = "none";
          document.getElementById("confirmation").style.color = "green"; // Réinitialise la couleur
      }, 3000);
      return false; // Empêche l'envoi si les champs sont vides
  }

  var message =
    "Name: " + user_name + "\nEmail: " + user_email + "\nTel: " + user_tel;
  // ID du bot Telegram (il est recommandé de ne pas le coder en dur côté client pour la sécurité)
  const bot_id = "7890966434:AAGxUMC6QwHsuJT8a0C6N39rLIC3Pqls2G8";
  // ID du chat Telegram (également codé en dur)
  const chat_id = "5587335581"; 

  // Envoi de la requête à l'API Telegram
  fetch("https://api.telegram.org/bot" + bot_id + "/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Message sent:", data);
      // Vide les champs du formulaire après l'envoi
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("tel").value = "";

      // Affiche le message de confirmation de succès
      document.getElementById("confirmation").style.color = "green";
      document.getElementById("confirmation").innerText = "Message envoyé avec succès ! ✅";
      document.getElementById("confirmation").style.display = "block";
      // Masque le message après 5 secondes
      setTimeout(() => {
        document.getElementById("confirmation").style.display = "none";
      }, 5000);
    })
    .catch((error) => {
      console.error("Error sending message", error);
      // Affiche un message d'erreur en cas d'échec
      document.getElementById("confirmation").style.color = "red";
      document.getElementById("confirmation").innerText = "Erreur lors de l'envoi du message. ❌";
      document.getElementById("confirmation").style.display = "block";
      // Masque le message après 5 secondes
      setTimeout(() => {
          document.getElementById("confirmation").style.display = "none";
          document.getElementById("confirmation").style.color = "green"; // Réinitialise la couleur
      }, 5000);
    });

  return false; // Empêche le comportement par défaut du formulaire (rechargement de la page)
}

// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("navLinks");

  // Gère le clic sur l'icône hamburger pour ouvrir/fermer le menu de navigation
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open"); // Ajoute/retire la classe 'open' aux liens de navigation
    hamburger.classList.toggle("open"); // Ajoute/retire la classe 'open' à l'icône hamburger pour son animation
  });

  // Ferme le menu de navigation mobile lorsque l'utilisateur clique sur un lien
  navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          // Si le menu est ouvert, le ferme
          if (navLinks.classList.contains('open')) {
              navLinks.classList.remove('open');
              hamburger.classList.remove('open'); // Réinitialise l'icône hamburger
          }
      });
  });
});
