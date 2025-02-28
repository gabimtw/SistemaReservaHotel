import Hotel from "../models/Hotel.js";
import connection from "../config/dbConnect.js";

const HotelRepository = {

    async findAll() {
        const rows = await connection.query("select * from Hotel", []);
        return rows.map(row => new Hotel(row.id, row.Nome, row.Email, row.Endereço, row.Cidade, row.Estado, row.Telefone));
    },

    async createProject(Hotel){
        const result = await connection.query("insert into Hotel (nome) values (?)",
            [Hotel.nome]
        );
        Hotel.id = result.insertId;
        return Hotel;
    }
}

export default HotelRepository;