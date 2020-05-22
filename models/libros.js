var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema = Schema({
    ISBN: Number,
    Autor: String,
    Título: String,
    Género: String,
    Edición: String,
    Editorial: String,
    Número_de_páginas: Number,
    Sinópsis: String
    
  
  
  });

  
module.exports = mongoose.model('Libro', LibroSchema);
