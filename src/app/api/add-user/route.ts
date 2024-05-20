import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, age } = await request.json();
  try {
    if (!name || !email) throw new Error("Name and Email are required");
    await sql`INSERT INTO users (Name, Email, Age) VALUES (${name}, ${email}, ${age});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}
