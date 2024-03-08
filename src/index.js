import app from "./app.js";
import dotenv from "dotenv"
dotenv.config();
const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
