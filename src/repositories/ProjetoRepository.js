import Projeto from "../models/Projeto.js";
//import DBInterface from "../config/dbInterface.js";
import connection from "../config/dbConnect.js";

const ProjetoRepository = {

    async findAll() { //pega todos os projetos
        const rows = await connection.query("select projeto.id, projeto.nome, categoria.nome from projeto inner join categoria on categoria.id = projeto.categoria_id", []); //juntas os projetos com suas respctivas categorias
        return rows.map(row => new Projeto(row.id, row.nome));
    },

    async createProject(projeto){
        const result = await connection.query("insert into projeto (nome) values (?)",
            [projeto.nome]
        );
        projeto.id = result.insertId; //Obtém o id gerado automaticamente pelo banco de dados após a inserção.
        return projeto;
    }
}

export default ProjetoRepository;