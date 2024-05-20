import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: Request) {
  try {
    // const users = await sql`SELECT * FROM users;`; ==> this command retreives all historical rows not considering UPDATES!
    const users =
      await sql`SELECT DISTINCT ON (id) id, name, email, age FROM users;`;
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
