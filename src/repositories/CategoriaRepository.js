import Categoria from "../models/Categoria.js"; //pega o modelo da categoria
import connection from "../config/dbConnect.js"; //conecta com o bd

const CategoriaRepository = { //todas as funções são armazenadas nessa variável 

    async findAll() { //pega todas as categorias
        const rows = await connection.query("select * from categoria", [] /*executa consulta com MySQL*/);
        return rows.map(row => new Categoria(row.id, row.nome));
    },

    async createCategoria(categoria){ //cria categoria
        const result = await connection.query("insert into categoria (nome) values (?)",
            [categoria.nome]
        );
        categoria.id = result.insertId;
        return categoria;
    }
}

export default CategoriaRepository;