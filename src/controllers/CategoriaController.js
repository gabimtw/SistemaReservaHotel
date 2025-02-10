import CategoriaRepository from "../repositories/CategoriaRepository.js";

const CategoriaController = {

    async getAll(req, res){
        try {
            const categorias = await CategoriaRepository.findAll(); //encontra todas as categorias
            res.json(categorias);//coloca as categorias em JSON
        }catch(err){
            res.status(500).json({error : "Erro na busca de categorias", err}); //se ocorrer erro
        }
    },

    async create(req, res) {
        const {nome} = req.body;
        try {
            const novaCategoria = {nome};
            const categoriaCriada = await CategoriaRepository.createCategoria(novaCategoria); //cria nova categoria
            res.status(201).json(categoriaCriada);
        }catch(err){
            res.status(500).json({error : "Erro na criação de categorias", err});
        }
    }

}

export default CategoriaController;