# 🎧💗 Podcast Manager 💗

## 📌💗 Sobre o Projeto

O **Podcast Manager** é uma aplicação inspirada no layout da Netflix, projetada para reunir e organizar episódios de podcasts em formato de vídeo. O objetivo é oferecer uma navegação simples, prática e visualmente atrativa, permitindo que os usuários encontrem rapidamente conteúdos de seu interesse.

## ✨💗 Funcionalidades

- **Exploração por Categorias:** Os episódios são organizados em sessões temáticas como saúde, bodybuilder, mentalidade e humor, facilitando a descoberta de novos conteúdos.
- **Filtro por Nome do Podcast:** É possível buscar episódios específicos utilizando o nome do podcast como critério.

## 🚀💗 Endpoints Disponíveis

### 🔹 Listar episódios por categoria

- **Rota:** `GET /list`  
- **Descrição:** Retorna todos os episódios agrupados por categorias.  
- **Exemplo de resposta:**

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
