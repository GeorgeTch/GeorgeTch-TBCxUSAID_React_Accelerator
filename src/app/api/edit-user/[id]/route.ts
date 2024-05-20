import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const { id, name, email, age } = await request.json();
  try {
    if (!id || !name || !email)
      throw new Error("ID, Name, and Email are required");
    await sql`
      UPDATE users 
      SET Name = ${name}, Email = ${email}, Age = ${age}
      WHERE id = ${id};
    `;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}
