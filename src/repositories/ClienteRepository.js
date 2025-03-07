import Cliente from "../models/Cliente.js";
import connection from "../config/dbConnect.js";

const ClienteRepository = {

    async findAll() {
        const rows = await connection.query("select * from clientes", []);
        return rows.map(row => new Cliente(row.id, row.nome, row.email, row.telefone, row.endereco, row.data_nascimento));
    },

    async createCliente(cliente){  
        const result = await connection.query("insert into clientes (nome) values (?)",
            [cliente.nome]
        );
        cliente.id = result.insertId;
        return cliente;
    }
}

export default ClienteRepository;