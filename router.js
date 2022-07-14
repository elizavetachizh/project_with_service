import Router from 'express'
import Post from "./Post.js";
import PostController from "./postController.js";
   export  const router = new Router();
router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id',  PostController.getOne)
router.put('/posts',  PostController.update)
router.delete('/posts/:id',  PostController.delete)