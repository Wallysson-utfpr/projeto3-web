var conexao = require('../config/conexao');

var UsuarioSchema = conexao.Schema({
    nome:{type:String},
    idade:{type:String}
})

module.exports = conexao.model("Usuario", UsuarioSchema);