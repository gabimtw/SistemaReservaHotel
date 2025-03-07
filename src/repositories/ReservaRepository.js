import Reserva from "../models/Reserva.js";
import connection from "../config/dbConnect.js";

const ReservaRepository = {

    async findAll() {
        const rows = await connection.query("select * from Reservas", []);
        return rows.map(row => new Reserva(row.id, row.nome));
    },

    async createReserva(reserva){
        const result = await connection.query("insert into Reservas (nome) values (?)",
            [reserva.nome]
        );
        reserva.id = result.insertId;
        return reserva;
    }
}

export default ReservaRepository;