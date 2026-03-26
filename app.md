# Podcast menager


### Deescrição  
um app ao estilo neetflix, aonde possa centralizar diferentes episodios podcast
separados por categorias 

### Dominio 
Podcast feitos em videeo


### Features //  funcionalidades
- listar os epsodios podcasts em sessoes de categorias
    - [ saude, bodybuilder, mentalidade, humor ]
- Filtrar epsodios por nome de podcast

## Como
- listar os epsodios podcasts em sessoes de categorias

### Features

### Como vou implementar:
GET Vou retornar uma API Rest (json) o 
nome do podcast, nome do epsodio, imagem de capa, link, category
RESPONSE:

```js 
[
{
    podcastName: " flow ",
    episode: " RICARDO MARCÍLIO - Flow #565 ",
    videoID: "7X-iDQYbFAk",
    cover: " https://i.ytimg.com/vi/7X-iDQYbFAk/maxresdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCzaIxS3V_JKURSfYuFJE0DGhaE7g",
    link:  " https://www.youtube.com/watch?v=7X-iDQYbFAk  " 
    category: [ "saude", "bodybuilder" ] 
} , 
{
    podcastName: " flow ",
    episode: " FERNANDO DE BORTHOLE - Flow #553 ",
    videoID: "lpfmnBSFI7o",
    cover: " https://i.ytimg.com/vi/lpfmnBSFI7o/maxresdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD9v8T0dzi2EmQJWYftVMwK-4Mpcw",
    link:  " https://www.youtube.com/watch?v=lpfmnBSFI7o  " 
    category: [ "esporte", "corrida" ] 
}


]
```

GET: Retorna lista e episodios baseado em um parametro enviado
pelo clinete o nomee o podcast