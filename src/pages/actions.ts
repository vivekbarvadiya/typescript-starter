"use server";

export async function submit(data: FormData) {
  const name = data.get("name");
  const age = data.get("age");
  return [name, age];
}
