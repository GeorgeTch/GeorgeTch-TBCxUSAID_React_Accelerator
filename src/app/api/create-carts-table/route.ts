import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await sql`CREATE TABLE carts ( 
        id SERIAL PRIMARY KEY, 
        user_id INTEGER NOT NULL, 
        products jsonb NOT NULL DEFAULT '{}', 
        added_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
