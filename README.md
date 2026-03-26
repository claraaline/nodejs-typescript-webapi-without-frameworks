Podcast Manager
📌 Descrição

O Podcast Manager é uma API inspirada em plataformas como a Netflix, com o objetivo de centralizar episódios de podcasts em vídeo, organizados por categorias.

A aplicação permite listar e filtrar episódios de diferentes podcasts, facilitando a navegação e descoberta de conteúdos.

🎯 Domínio
Podcasts em formato de vídeo
Organização por categorias
🚀 Funcionalidades
📂 Listar episódios de podcasts por categorias:
Saúde
Bodybuilder
Mentalidade
Humor
🔍 Filtrar episódios por nome do podcast
⚙️ Tecnologias utilizadas
Node.js
TypeScript
API REST
JSON
🛠️ Como funciona

A aplicação fornece uma API REST que retorna dados dos podcasts em formato JSON.

📥 Exemplo de resposta da API
[
  {
    "podcastName": "flow",
    "episode": "RICARDO MARCÍLIO - Flow #565",
    "videoID": "7X-iDQYbFAk",
    "cover": "https://i.ytimg.com/vi/7X-iDQYbFAk/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=7X-iDQYbFAk",
    "category": ["saude", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "FERNANDO DE BORTHOLE - Flow #553",
    "videoID": "lpfmnBSFI7o",
    "cover": "https://i.ytimg.com/vi/lpfmnBSFI7o/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=lpfmnBSFI7o",
    "category": ["esporte", "corrida"]
  }
]
📡 Endpoints
🔹 GET /podcasts

Retorna todos os episódios organizados por categorias.

🔹 GET /podcasts?name=flow

Retorna episódios filtrados pelo nome do podcast.

🧠 Como será implementado
Criação de uma API REST
Leitura de dados em JSON
Filtro por parâmetros via query string
Organização por categorias
📁 Estrutura esperada
src/
 ├── controllers/
 ├── services/
 ├── models/
 ├── data/
 └── server.ts
👨‍💻 Autor

Projeto desenvolvido por você 🚀

Se quiser, posso deixar esse README ainda mais avançado (com badges, deploy, instruções de instalação tipo npm install, etc.) ou até adaptar ele pro nível de portfólio pro ITA/estágio.
