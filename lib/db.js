import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
  const connectionString = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.7ztaz.mongodb.net/blog?retryWrites=true&w=majority&appName=${process.env.MONGODB_APPNAME}`;
  const client = await MongoClient.connect(connectionString);

  return client;
};
