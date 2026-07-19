export const config = { maxDuration: 10 };

export default async function handler(): Promise<Response> {
  return new Response(
    JSON.stringify({
      ok: true,
      message: 'pong',
      hasGroqKey: Boolean(process.env.GROQ_API_KEY),
      time: new Date().toISOString(),
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
}
