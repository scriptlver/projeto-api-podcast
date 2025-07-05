import * as http from 'http';

import { getFilterEpisodes, getListEpisodes } from './controllers/podscasts-controller.js';
import { Routes } from './routes/routes.js';
import { HttpMethods } from './utils/htttp-methods.js';




const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {

        //querystring
        const [baseUrl, queryString] = request.url?.split('?') ?? ['', ''];

        if(request.method === HttpMethods.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(request, response);
        }

        if(request.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
            await getFilterEpisodes(request, response);
        }
    }






);



const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})
