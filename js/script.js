$(document).ready(function() {

  // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

  var student = {
    "nome": "Samuele",
    "cognome": "Madrigali",
    "eta": 29
  };

  for (var key in student) {
    //console.log(key + " : " + student[key]);
  }

  // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

  var students = [
    {
      "nome": "Samuele",
      "cognome": "Madrigali",
      "eta": 29
    },
    {
      "nome": "Franco",
      "cognome": "Rossi",
      "eta": 45
    },
    {
      "nome": "Gigi",
      "cognome": "Bianchi",
      "eta": 18
    },
  ];

  for (var i = 0; i < students.length; i++) {
    //console.log(students[i].nome + " " + students[i].cognome);
  }

  // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

  var nomeStudente = prompt("Inserisci il nome");
  var cognomeStudente = prompt("Inserisci il cognome");
  var etaStudente = parseInt(prompt("Inserisci l'età"));

  var userStudent = {
    "nome": nomeStudente,
    "cognome": cognomeStudente,
    "eta": etaStudente
  };

  students.push(userStudent);

  console.log(userStudent);

  var source =  $("#students-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < students.length; i++) {

    var html = template(students[i]);

    $("#students-list").append(html);
  }

});
