import Quartos from "../models/Quartos.js";
import connection from "../config/dbConnect.js";

const QuartosRepository = {

    async findAll() {
        const rows = await connection.query("select * from Quartos", []);
        return rows.map(row => new Quartos(row.id, row.Quartos, row.Status));
    },

    async createProject(Quartos){
        const result = await connection.query("insert into Quartos (nome) values (?)",
            [Quartos.nome]
        );
        Quartos.id = result.insertId;
        return Quartos;
    }
}

export default QuartosRepository;