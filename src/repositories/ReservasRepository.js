import Reservas from "../models/Reservas.js";
import connection from "../config/dbConnect.js";

const ReservasRepository = {

    async findAll() {
        const rows = await connection.query("select * from Reservas", []);
        return rows.map(row => new Reservas(row.id, row.nome));
    },

    async createProject(Reservas){
        const result = await connection.query("insert into Reservas (nome) values (?)",
            [Reservas.nome]
        );
        Reservas.id = result.insertId;
        return Reservas;
    }
}

export default ReservasRepository;