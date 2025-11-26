import { cookies } from "next/headers";

export async function POST(request: Request) {
  const data = await request.json();
  const cookieStore = await cookies();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/client/login`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    const res = await response.json();
    cookieStore.set("token", res.token);
    return new Response(`Bienvenido Denuevo`);
  } catch (e) {
    console.log(e);
    return new Response("Error al iniciar sesión", { status: 500 });
  }
}
