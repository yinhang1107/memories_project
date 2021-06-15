import express from "express";

import {
  getPosts,
  getPost,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controller/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.get("/:id", getPost);
router.post("/", auth, createPost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.put("/:id/likePost", auth, likePost);

export default router;
