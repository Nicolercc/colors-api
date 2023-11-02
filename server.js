const app = require("./app");

//gives us access to environment variables in .env
require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
