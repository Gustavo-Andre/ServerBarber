import { response, Router } from "express";

const routes = Router();

routes.get("/", (request, response)=>{
  return response.json({testeRouter:"testando Rotas do Servidor"})
})

export default routes;