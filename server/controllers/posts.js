import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const post = req.body;
  const updatePost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatePost);
};
export const deletePost = async (req, res) => {
  const id = req.params.id;
  console.log(id, " id");
  const deletedPost = await PostMessage.findByIdAndDelete(id);
  res.json(deletedPost);
};
