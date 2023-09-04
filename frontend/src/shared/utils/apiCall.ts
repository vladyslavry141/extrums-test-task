const apiBaseUrl = new URL(import.meta.env.VITE_API_BASE_URL);
export class FetchError extends Error {
  public status: number;
  public body: any;

  constructor(message: string, status: number, body: any) {
    super(message);
    this.status = status;
    this.body = body;
  }
}

export const apiCall = async <T>(route: string, init: RequestInit = {}) => {
  const res = await fetch(new URL(apiBaseUrl.toString() + route), {
    ...init,
    credentials: 'include',
  });
  const body = await res.json();

  if (res.status >= 400) {
    throw new FetchError(body.message, res.status, body);
  }

  return body as T;
};
