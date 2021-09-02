import express from "express";

import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";
import auth from "./../middleware/auth.js";

const router = express.Router();

router.route("/").get(getPosts);
router.route("/").post(auth, createPost);
router.route("/:id").patch(auth, updatePost);
router.route("/:id").delete(auth, deletePost);
router.route("/:id/likePost").patch(auth, likePost);

export default router;
