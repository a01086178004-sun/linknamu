import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

// Returns null when MONGODB_URI isn't configured, so callers can fall back
// to a non-persistent store during local development.
export function getMongoClientPromise(): Promise<MongoClient> | null {
  if (!uri) return null;

  if (!clientPromise) {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }

  return clientPromise;
}
