mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://LuceroCortes:Marian200213@cluster0-guf3h.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));

function nuevoLibro(){

  var libro= Libro({
    ISBN: "2453539034",
    Autor: "Isabel Allende",
    Título: "La casa de los fantasmas",
    Género: "Novela",
    Edición: "Primera",
    Editorial: "Editorial Sudamericana",
    Número_de_páginas: "466",
    Sinópsis: "La historia relata la vida de la familia Trueba a lo largo de cuatro generaciones y sigue los movimientos sociales y políticos del período poscolonial de Chile. Narrada desde la perspectiva de dos de sus protagonistas, los acontecimientos retratados en ella tratan sobre el amor, la familia, la muerte, los fantasmas, las clases sociales, la revolución, la política, los ideales y lo maravilloso."    
    
  });

  libro.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
    }
  });
}

function nuevosLibros() {


  var libros=[
    {ISBN: "4389429862", Autor: "Soman Chainani", Título: "La escuela del bien y el mal", Género: "Fantasía", Edición:"Primera edición", Editorial: "PUCK", Número_de_páginas: "476", Sinópsis: "Chicas y chicos comunes reciben entrenamiento para ser héroes y viollanos de cuentos de hadas, pero pronto descrubrirán que su futuro será transtornado"},

    {ISBN:"5670214722", Autor: "Soman Chainani", Título: "La escuela del bien y el mal, Un Mundo sin príncipes", Género: "Fantasía", Edición:"Primera edición", Editorial: "PUCK", Número_de_páginas: "41", Sinópsis: "Al estar viviendo su felices para siempre, Agatha desea haber tenido otro final, sin embargo, el mundo está por cambiar"},

    {ISBN: "5637291038",Autor: "Diana Wynne Jones", Título: "El castillo ambulante", Género: "Ficción", Edición:"Primera edición", Editorial: "Berenice", Número_de_páginas: "168", Sinópsis: "Cuando la bruja del páramo convierte a Sophie en una anciana, la joven abandona la sombrerería para pedir ayuda en el castillo ambulante "},

    {ISBN: "6483921057",Autor: "Stephenie Mayer", Título: "Eclipse", Género: "Ficción", Edición:"Primera edición", Editorial: "Alfaguara", Número_de_páginas: "622", Sinópsis: "Bella se encuentra de nuevo en peligro: una serie de asesinaros está sembrando pánico en la ciudad y hay un maligno tras ella. Bella tendrá que elegir entre el amor por Edwar y su amistad con Jacob"},
    
    {ISBN:"5374851073",Autor: "Stephen king", Título: "It", Género: "Terror", Edición:"Primera edición", Editorial: "Debolsillo", Número_de_páginas: "1502", Sinópsis: "¿Quién o qué mutila y mata a los niños del pueblo norteamericano? Tras veintisiete años de tranquilidad y lejanía, una antigua promesa infantil les hace volver al lugar en el que vivieron su infancia y juventud como una terrible pesadilla"},

    {ISBN:"5647109347",Autor: "Kiera Kass", Título:"La elegida", Género: "Ficción", Edición:"Primera edición", Editorial: "rocaeditoriam", Número_de_páginas: "256", Sinópsis: "La situación en el palacio es cada vez más peligrosa, los rebeldes atacan tanto como por el norte como por el sur y America, las chicas que siguen en la selección y Maxon se encuentran en verdadero peligro"},

    {ISBN:"3125634801",Autor: "Marqués de Sade", Título: "Filosofía en el tocador", Género: "Novela Literaria", Edición:"Primera edición", Editorial: "Austral", Número_de_páginas: "256", Sinópsis: "Dos instructores enseñan a una joven el arte del libertinaje, al mismo tiempo le dan lecciones sobre religión y eso pone en duda la existencia o la verdad de esto"}, 

    {ISBN:"3729439130",Autor: "Ángel David Revilla", Título: "El festival de la blasfemia", Género: "Fantasía", Edición:"Primera edición", Editorial: "Planeta", Número_de_páginas: "150", Sinópsis: "No todo festival se desarrolla con ánimo festivo, ni toda blasfemia se pronuncia en vano, a esto viene el festival de la blasfemia"},

    {ISBN: "6428024702",Autor: "Francisco Martin Moreno", Título: "Arrebatos Carnales", Género: "Ensayo literario", Edición:"Primera edición", Editorial: "Planeta", Número_de_páginas: "456", Sinópsis: "A lo largo de los siglos, hombres y mujeres han sido arrastrados por el inevitable impulso de poseer a quienes parece ostentar el sentido de la vida. Y de esta atracción impetuosa no se libran los grandes forjadores de una nación: ¿qué apetitos y obsesiones sirvieron como causa para algunos protagonistas de la historia de México?"},

    {ISBN: "5374927456",Autor: "Ignacio Larrañaga", Título: "El hermano de Asís", Género: "Teología", Edición:"Décima cuarta edición", Editorial: "San Pablo", Número_de_páginas: "383", Sinópsis: "Historia de San Francisco de Asís y su relación con Dios"},

    {ISBN: "6475389230",Autor: "Elizabeth K. Ross", Título: "La rueda de la vida", Género: "Autobiografía tanatológica", Edición:"Primera edición", Editorial: "Espiritual B", Número_de_páginas: "347", Sinópsis: "Habla de su infancia en Suiza y experiencia en la fuera, el tratado a los heridos y cómo entendi´p el significado de la muerte y del buen morir"},

  ];

  Libro.collection.insert(libros,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}
  
  function findLibroByISBN(nisbn){
    Libro.find({'ISBN':nisbn},function(err,documentos){
      console.log(documentos);
    });
  }
  

  function cambiarTítuloByISBN(nisbn, nuevoTítulo){
    Libro.findOneAndUpdate({'ISBN':nisbn},{'Título':nuevoTítulo},function(err,data){
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  }

function main() {
  // nuevoLibro();
  //findLibroByISBN("2453539034");
  cambiarTítuloByISBN("2453539034", "La casa de los espíritus");

}

main();    // ejecutamos main


