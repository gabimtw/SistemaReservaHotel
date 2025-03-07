import ClienteRepository from "../repositories/ClienteRepository.js";

const ClienteController = {

    async getAll(req, res){
        try {
            const Clientes = await ClienteRepository.findAll();
            res.json(Clientes);
        }catch(err){
            res.status(500).json({error : "Erro na busca de clientes", err});
        }
    },

    async create(req, res) {
        const {nome} = req.body;
        try {
            const novoCliente = {nome};
            const ClienteCriado = await ClienteRepository.createCliente(novoCliente);
            res.status(201).json(ClienteCriado);
        }catch(err){
            res.status(500).json({error : "Erro na criação de clientes", err});
        }
    }

}

export default ClienteController;