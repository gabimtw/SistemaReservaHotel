import Hotel from "../models/Hotel.js";
import connection from "../config/dbConnect.js";

const HotelRepository = {

    async findAll() {
        const rows = await connection.query("select * from hoteis", []);
        return rows.map(row => new Hotel(row.id, row.nome, row.email, row.endereço, row.cidade, row.estado, row.telefone));
    },

    async createHotel(hotel){
        const result = await connection.query("insert into hoteis (nome) values (?)",
            [hotel.nome]
        );
        hotel.id = result.insertId;
        return hotel;
    }
}

export default HotelRepository;