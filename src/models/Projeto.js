class Projeto {
    constructor(id, nome, categoria){
        this._id = id;
        this._nome = nome;
        this._categoria = { _id: categoria.id, _nome: categoria.nome };
    }

    setId(id){
        this._id = id;
    }

    setNome(nome){
        this._nome = nome;
    }

    getId(){
        return this._id;
    }

    getNome(){
        return this._nome;
    }
}

export default Projeto;

//Cria um novo projeto que acho que é um conjunto de categorias(ainda não sabo muito)
// mas é usado em outros arquivos. EXEMPLO:

/* 
import Categoria from "./Categoria.js";
import Projeto from "./Projeto.js";

const categoria1 = new Categoria(1, "Tecnologia");
const projeto1 = new Projeto(101, "Desenvolvimento Web", categoria1);

console.log(projeto1.getNome()); // Saída: Desenvolvimento Web
console.log(projeto1._categoria); // Saída: { _id: 1, _nome: 'Tecnologia' }
*/