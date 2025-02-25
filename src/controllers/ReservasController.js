import Reservas from "../repositories/ReservasRepository.js";

const ReservasController = {

    async getAll(req, res){
        try {
            const reservas = await ReservasRepository.findAll();
            res.json(reservas);
        }catch(err){
            res.status(500).json({error : "Erro na busca de reservas", err});
        }
    },

    async create(req, res) {
        const {clientes_id, quarto, dataEntrada} = req.body;
        try {
            const novaReserva = {clientes_id, quarto, dataEntrada};
            const reservaCriada = await ReservasRepository.createProject(novaReserva);
            res.status(201).json(reservaCriada);
        }catch(err){
            res.status(500).json({error : "Erro na criação de reservas", err});
        }
    }
}

export default ReservasController;