import mongoose from "mongoose";

export const dbConnection = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;

    mongoose.connection.on("Connected", () => {
      console.log("DB Connected");
    });

    mongoose.connection.on("error", (err) => {
      ``;
      console.error(err);
      process.exit(1);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
