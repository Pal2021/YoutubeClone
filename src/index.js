import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(` Server is running at PORT : ${process.env.PORT}`);
    });
    app.on("error", () => {
      console.log("ERROR ", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!!", error);
  });

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
