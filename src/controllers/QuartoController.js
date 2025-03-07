import QuartoRepository from "../repositories/QuartoRepository.js";

const QuartoController = {

    async getAll(req, res){
        try {
            const quartos = await QuartoRepository.findAll();
            res.json(quartos);
        }catch(err){
            res.status(500).json({error : "Erro na busca de quartos", err});
        }
    },

    async create(req, res) {
        const {tipoQuarto} = req.body;
        try {
            const novoQuarto = {tipoQuarto};
            const quartoCriado = await QuartoRepository.createQuarto(novoQuarto);
            res.status(201).json(quartoCriado);
        }catch(err){
            res.status(500).json({error : "Erro na criação de quartos", err});
        }
    }
}

export default QuartoController;