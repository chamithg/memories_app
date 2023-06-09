const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
require("./routes/post.route")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
