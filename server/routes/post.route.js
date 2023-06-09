const PostControl = require("../controllers/post.control");
module.exports = function (app) {
  app.get("/api", PostControl.index);
};
