import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST() {
  const coockieStore = cookies();
  coockieStore.delete("auth");

  redirect("/login");
}
