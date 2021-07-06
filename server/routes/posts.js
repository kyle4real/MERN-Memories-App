import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts);
router.route("/").post(createPost);
router.route("/:id").patch(updatePost);
router.route("/:id").delete(deletePost);
router.route("/:id/likePost").patch(likePost);

export default router;
