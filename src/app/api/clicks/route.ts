import { NextRequest, NextResponse } from "next/server";
import { getMongoClientPromise } from "@/lib/mongodb";

const DB_NAME = "linknamu";
const COLLECTION = "link_clicks";

// In-memory fallback so clicks still count during local dev without
// MONGODB_URI configured. Resets whenever the server restarts.
const memoryCounts = new Map<string, number>();

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const linkId = body?.linkId;

  if (!linkId || typeof linkId !== "string") {
    return NextResponse.json({ error: "linkId is required" }, { status: 400 });
  }

  const clientPromise = getMongoClientPromise();

  if (!clientPromise) {
    const next = (memoryCounts.get(linkId) ?? 0) + 1;
    memoryCounts.set(linkId, next);
    return NextResponse.json({ linkId, count: next, persisted: false });
  }

  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection(COLLECTION);
  const result = await collection.findOneAndUpdate(
    { linkId },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return NextResponse.json({
    linkId,
    count: result?.count ?? 1,
    persisted: true,
  });
}
