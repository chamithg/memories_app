import post from "../models/post.model.js";

export const getPosts = async (req, res) => {
  try {
    const foundPost = await post.find();
    res.status(200).json(foundPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const newpost = req.body;
  const newPost = new post(newpost);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
