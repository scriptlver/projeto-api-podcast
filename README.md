# 🎧 Podcast Manager 💗

## ✨ Sobre o Projeto

O **Podcast Manager** é uma aplicação inspirada no visual da Netflix, criada para centralizar e organizar episódios de podcasts em vídeo. A ideia é oferecer uma experiência de navegação simples, bonita e eficiente para quem gosta de acompanhar diferentes conteúdos de áudio e vídeo.

## 💫 Funcionalidades

- 🎙️ **Organização por Categorias:** Os episódios são agrupados em temas como saúde, bodybuilder, mentalidade, humor, entre outros.
- 🔍 **Filtro por Nome do Podcast:** Permite ao usuário pesquisar episódios com base no nome do podcast desejado.

## 🚀 Endpoints Disponíveis

### 🔹 `GET /list` — Listar episódios por categoria

- **Descrição:** Retorna uma lista com todos os episódios disponíveis, agrupados por categorias.

#### 🧾 Exemplo de resposta:

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
```
### ✨ `GET /list` — Buscar por nome

- **Descrição:** Filtra episódios de podcast a partir do nome fornecido.

Exemplo:
GET /episode?podcastName=flow







