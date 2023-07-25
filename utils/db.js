import mongoose from "mongoose";

export const connectToDB = async () => {
    if (mongoose.connection) {
        console.log("DB already connected");
        return
    }
    await mongoose.connect(process.env.MONGO_URI, (err) => {
        console.log("Connected to DB");
        if (err) {
            console.error(err)
        }
    })
}