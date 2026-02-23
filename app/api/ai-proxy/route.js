/**
 * Anthropic API Proxy — Edge Function
 * Proxies POST requests to api.anthropic.com/v1/messages
 * Used by Freelance Scout on VPS where direct access is blocked.
 */

export const runtime = 'edge';

export async function POST(request) {
  const headers = new Headers();
  for (const [key, value] of request.headers) {
    if (['host', 'connection', 'transfer-encoding'].includes(key.toLowerCase())) continue;
    headers.set(key, value);
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers,
    body: request.body,
  });

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}
