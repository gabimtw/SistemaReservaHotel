import Clientes from "../models/Clientes.js";
import connection from "../config/dbConnect.js";

const ClientesRepository = {

    async findAll() {
        const rows = await connection.query("select * from Clientes", []);
        return rows.map(row => new Clientes(row.Id, row.nome, row.CPF, row.Email, row.Telefone, row.Endereço, row.Data_nascimento));
    },

    async createProject(Clientes){
        const result = await connection.query("insert into Clientes (nome) values (?)",
            [Clientes.nome]
        );
        Clientes.id = result.insertId;
        return Clientes;
    }
}

export default ClientesRepository;