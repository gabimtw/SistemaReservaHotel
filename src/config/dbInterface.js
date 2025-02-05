import connection from "./dbConnect.js";

const DBInterface = {
    //preenche aquela mensagem no sql quando abrimos alguma tabela
    async query(sql, params) {
        try {
            //define results como a conexão dessa mensagem e não permite que o codigo continue sem a consulta
            const results = await connection.query(sql, params);
            return results;
        }catch(err){
            console.error("Erro no banco de dados: ", err.message);
            throw err;
        }
    }
};

export default DBInterface;
//permite que outros arquivos usem a váriavel para fazer consulta ao banco de dados