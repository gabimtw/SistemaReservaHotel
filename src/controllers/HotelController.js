import Hotel from "../repositories/HotelRepository.js";

const HotelController = {

    async getAll(req, res){
        try {
            const hoteis = await HotelRepository.findAll();
            res.json(hoteis);
        }catch(err){
            res.status(500).json({error : "Erro na busca de hotéis", err});
        }
    },

    async create(req, res) {
        const {nome} = req.body;
        try {
            const novoHotel = {nome};
            const hotelCriado = await HotelRepository.createProject(novoHotel);
            res.status(201).json(hotelCriado);
        }catch(err){
            res.status(500).json({error : "Erro na criação de hotéis", err});
        }
    }
}

export default HotelController;