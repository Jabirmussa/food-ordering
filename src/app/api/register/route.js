import {User} from "/src/app/models/User";
import mongoose from "mongoose";

export async function POST(req){
    const body = await req.json();
    const mongoURI = process.env.MONGO_URL;
    mongoose.connect(mongoURI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      useFindAndModify: false 
  },)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch(err => console.error('Error connecting to MongoDB:', err));
    const createdUser = await User.create(body);
    return Response.json(createdUser);
}
