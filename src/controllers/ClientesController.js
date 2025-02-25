import Clientes from "../repositories/ClientesRepository.js";

const ClientesController = {

    async getAll(req, res){
        try {
            const Clientes = await ClientesRepository.findAll();
            res.json(Clientes);
        }catch(err){
            res.status(500).json({error : "Erro na busca de lientes", err});
        }
    },

    async create(req, res) {
        const {nome} = req.body;
        try {
            const novoCliente = {nome};
            const ClienteCriado = await ClientesRepository.createProject(novoCliente);
            res.status(201).json(ClienteCriado);
        }catch(err){
            res.status(500).json({error : "Erro na criação de clientes", err});
        }
    }

}

export default ClientesController;