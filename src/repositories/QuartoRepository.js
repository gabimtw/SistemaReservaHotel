import Quarto from "../models/Quarto.js";
import connection from "../config/dbConnect.js";

const QuartoRepository = {

    async findAll() {      
        const rows = await connection.query("select * from quartos", []);
        return rows.map(row => new Quarto(row.id, row.hotel_id, row.numero_quarto, row.tipo, row.capacidade, row.preco, row.status));
    },

    async createQuarto(quarto){
        const result = await connection.query("insert into quartos (nome) values (?)",
            [quarto.nome]
        );
        quarto.id = result.insertId;
        return quarto;
    }
}

export default QuartoRepository;