class Categoria {
    constructor(id, nome){
        this._id = id;
        this._nome = nome;
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

export default Categoria;

//Facilitar a criação ou mudança de categorias aos outros arquivos. EXEMPLO:

/*
import Categoria from "./Categoria.js";

const categoria1 = new Categoria(1, "Tecnologia");

console.log(categoria1.getNome()); // Saída: Tecnologia

categoria1.setNome("Inovação");
console.log(categoria1.getNome()); // Saída: Inovação 
*/