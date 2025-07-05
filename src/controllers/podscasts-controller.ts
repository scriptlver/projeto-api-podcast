import {IncomingMessage, ServerResponse} from 'http';
import {serviceListEpisodes} from '../services/list-episodes-service.js';
import { serviceFilterEpisodes } from '../services/filter-episodes-service.js';
import { StatusCode } from '../utils/status-code.js';

export const getListEpisodes = async (req : IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodes();
   res.writeHead(StatusCode.OK, {'Content-Type': "application/json"});
   res.end(JSON.stringify(content));

}

export const getFilterEpisodes = async (req : IncomingMessage, res: ServerResponse) => 
    { 

        
        
        
        const content = await serviceFilterEpisodes(req.url);
    
        res.writeHead(StatusCode.OK, {'Content-Type': "application/json"});
        res.end(JSON.stringify(content));
    
    }

