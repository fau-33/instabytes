import express from "express";

const posts = [
  { id: 1, descricao: "Uma foto teste", imagem: "https://picsum.photos/200/300"  },
  { id: 2, descricao: "Gato fofo dormindo", imagem: "https://picsum.photos/id/237/200/300"  },
  { id: 3, descricao: "Cachorro dormindo", imagem: "https://picsum.photos/id/237/200/300"  },
];


const app = express();
app.use(express.json());

app.listen(3000, () =>{
  console.log("Servidor escutando...");
});

app.get("/posts", (req, res) =>{
  res.status(200).json(posts);
});

function getPostById(id) {
  return posts.findIndex((post) =>{
    return post.id === Number(id);
  })
}

app.get("/posts/:id", (req, res) => {
  const index = getPostById(req.params.id);
  res.status(200).json(posts[index]);
});
