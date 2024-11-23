import express from "express";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";


 const routes = (app) =>{
  app.use(express.json());

  app.get("/posts", listarPosts);
  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single('image'), uploadImagem);
}

export default routes;

