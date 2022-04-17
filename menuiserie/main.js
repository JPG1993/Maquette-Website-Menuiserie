function getValue(){
    // Sélectionner l'élément input et récupérer sa valeur
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var message = document.getElementById("message").value;
    var rgpd = document.getElementById("rgpd").value;
    // Afficher la valeur
    alert(nom + " " + prenom + " " + email + " " + telephone + " " + message + " " + rgpd );
}


$( function() {
    var availableTags = [
      "Porte",
      "fenetre",
      "terrasse",
      "blog1",
      "blog2",
      "blog3",
    ];

    $( "#tags" ).autocomplete({
      var : availableTags
    });
  });

// $(function(){
//   $("contactform").submit(function(e){
//     e.preventDefault();
//     nom = $('#nom').value();
//     prenom = $('#prenom').value();
//     email = $('#email').value();
//     message = $('#message').value();
//     $.ajax ("addmessage.php", {nom: nom, prenom: prenom, email: email, message: message}, function (data){
//     return false;
//   });
// });

