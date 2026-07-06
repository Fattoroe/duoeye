import type { APIRoute } from 'astro';
import {
  DuolingoDataError,
  getDuolingoUserData,
  normalizeUsername,
} from '../../services/duolingoDataLoader';
import { sanitizeTimeZone } from '../../utils/timezone';

function jsonResponse(data: any, status: number, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
      ...headers
    },
  });
}

function resolveRequestTimeZone(request: Request): string {
  return sanitizeTimeZone(request.headers.get('x-user-timezone'));
}

async function handleRequest(username: unknown, timeZone: string) {
  try {
    const data = await getDuolingoUserData(username, { timeZone });
    return jsonResponse({ data }, 200);
  } catch (error: any) {
    if (error instanceof DuolingoDataError) {
      return jsonResponse({ error: error.message }, error.status);
    }

    return jsonResponse({ error: '获取数据时出错：' + (error?.message || '未知错误') }, 500);
  }
}

export const GET: APIRoute = async ({ url, request }) => {
  return handleRequest(
    normalizeUsername(url.searchParams.get('username')),
    resolveRequestTimeZone(request),
  );
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => ({}));
  return handleRequest(
    normalizeUsername(body?.username),
    resolveRequestTimeZone(request),
  );
};
