require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const server = http.createServer(app);
const port = process.env.PORT || 3300;

const main = async () => {
  server.listen(port, () => {
    console.log(`Social Link's server is running on port ${port}`);
  });
};
main();
