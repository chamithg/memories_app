import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/post.route.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", router);

const CLOUD_URI =
  "mongodb+srv://root:rootroot@clustermern.fqrxx7d.mongodb.net/memories_app_db?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;
mongoose
  .connect(CLOUD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
