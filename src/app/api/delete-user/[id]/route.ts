import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    // Check if the id is provided and valid
    if (!id || isNaN(Number(id))) {
      throw new Error("Invalid or missing ID");
    }

    // Delete the user from the database
    await sql`DELETE FROM users WHERE id = ${id}`;

    // Select the remaining users
    const users = await sql`SELECT * FROM users`;

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
