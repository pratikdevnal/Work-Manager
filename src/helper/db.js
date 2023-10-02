// import mongoose from "mongoose";
// export const connectDb = async () => {
//   try {
//     const { connection } = await mongoose.connect(
//       process.env.MONGO_DB_URL,
//       {
//         dbName: "work_manager",
//       },
//       { useNewUrlParser: true },
//       function (err) {
//         if (err) throw err;

//         console.log("Successfully connected");
//       }
//     );

//     console.log("db connected...");
//     console.log("connected with host ", connection.host);
//   } catch (error) {
//     console.log("failed to connect with db");
//   }
// };

// import mongoose from "mongoose";
// export const connectDb = async () => {
//   try {
//     mongoose.connect(process.env.MONGO_DB_URL, {
//       dbName: "work_manager",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   } catch (error) {
//     console.error("Failed to connect to MongoDB:", error);
//   }
// };

import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("MongoDB is already connected");
      return;
    }

    await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

export default connectDb;
