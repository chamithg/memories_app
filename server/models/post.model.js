import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  album: String,
  comments: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const post = mongoose.model("post", postSchema);

export default post;
