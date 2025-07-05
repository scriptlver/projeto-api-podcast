import {IncomingMessage, ServerResponse} from 'http';


export const getListEpisodes = async (req : IncomingMessage, res: ServerResponse) => {
   res.writeHead(200, {'Content-Type': "application/json"});
   res.end(JSON.stringify([
    {
    "podcastName": "flow",
    "episode": "CBUM – Flow #319",
    "videoId": "pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO – Flow #339",
    "videoId": "4KDGTdi0V4I",
    "categories": ["esporte", "corrida"]
  },
  {
    "podcastName": "flow",
    "episode": "LÁZARO RAMOS – Flow #290",
    "videoId": "9MdIH33ArhY",
    "categories": ["cultura", "cinema", "entrevista"]
  },
  {
    "podcastName": "flow",
    "episode": "FELIPE NETO – Flow #278",
    "videoId": "vJ-LrIjBWXg",
    "categories": ["internet", "opinião", "influenciador"]
  }
    
 
   ]));
}


