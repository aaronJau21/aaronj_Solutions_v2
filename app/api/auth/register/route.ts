export async function POST(request: Request) {
  const data = await request.json();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/client/register`,
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

    if (!response.ok) {
      return Response.json(res, { status: response.status });
    }

    return Response.json(
      { message: "Usuario registrado correctamente" },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return Response.json(
      { message: "Error al registrar usuario" },
      { status: 500 }
    );
  }
}
