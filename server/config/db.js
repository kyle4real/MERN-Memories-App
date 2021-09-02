import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });

        mongoose.set("useFindAndModify", false);

        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error.message);
    }
};

export default connectDB;
