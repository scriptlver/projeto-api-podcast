# 🎧 Podcast Manager 💗

![banner](https://i.imgur.com/qLxHp5U.png) <!-- Substitua por um banner personalizado do projeto -->

## ✨ Sobre o Projeto

O **Podcast Manager** é uma aplicação web inspirada na estética da Netflix, feita para organizar e centralizar episódios de **podcasts em vídeo**.  
Com uma interface moderna e simples, o projeto facilita o acesso a conteúdos variados através de categorias e filtros personalizados.

---

## 💫 Funcionalidades

- 🎙️ **Listagem por Categorias**  
  Os episódios são agrupados em temas como:
  - `saúde`
  - `esporte`
  - `bodybuilder`
  - `mentalidade`
  - `humor`

- 🔍 **Filtro por Nome do Podcast**  
  Pesquise episódios rapidamente usando o nome do podcast (ex: `flow`, `podpah`, `inteligência ltda` etc).

---

## 🚀 Endpoints da API

### 🔹 `GET /list` — Listar episódios por categoria

- **Descrição:** Retorna todos os episódios, organizados por suas respectivas categorias.

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
### 🔹 Filtrar episódios por nome de podcast

- **Endpoint:** `GET /episode?podcastName={nome}`
- **Descrição:** Retorna uma lista de episódios de podcast com base no nome do podcast fornecido.
- **Exemplo de requisição:**

```http
GET /episode?podcastName=flow

📦 TypeScript      - Linguagem de programação utilizada no projeto
⚙️ Tsup            - Ferramenta de build e empacotamento
⚡ Tsx             - Executor/compilador de projetos TypeScript
🌐 Node.js         - Ambiente de execução do JavaScript no servidor
📁 @types/node     - Tipagens auxiliares para Node.js em TypeScript
