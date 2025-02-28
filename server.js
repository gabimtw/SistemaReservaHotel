import dotenv from "dotenv"; //protege as pastas
dotenv.config();

import app from "./src/app.js";
import connection from "./src/config/dbConnect.js";
import ClientesRouters from "./src/routers/ClientesRouters.js";
import HotelRouters from "./src/routers/HotelRouters.js";
import QuartosRouters from "./src/routers/QuartosRouters.js";
import ReservasRouters from "./src/routers/ResevasRouters.js";

//Definição de uma constante para a !porta! TCP
const PORT = process.env.PORT || 3000;

app.use("/clientes", ClientesRouters);
app.use("/hotel", HotelRouters);
app.use("/quartos", QuartosRouters);
app.use("/reservas", ReservasRouters);

//app.use("/projetos",ProjetoRouters); Qualquer requisição para /projetos será tratada pelo ProjetoRouters.js.
//app.use("/categorias", CategoriaRouters); Qualquer requisição para /categorias será tratada pelo CategoriaRouters.js.

//Inicialização de um servidor WEB pela porta especificada
app.listen(PORT, () => {
    console.log("Servidor inicializado");
});

//podemos acessar a API em "http://localhost:3000"

/* 
GET	/projetos / Retorna todos os projetos
POST	/ projetos / Cria um novo projeto
GET	/ categorias	/ Retorna todas as categorias
POST	/ categorias	/ Cria uma nova categoria

*/