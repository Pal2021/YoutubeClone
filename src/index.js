import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});
connectDB();

// (async () => {
//   try {
//     mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     application.on("error", () => {
//       console.log("ERROR ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listen on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR: ", error);
//     throw err;
//   }
// })();
