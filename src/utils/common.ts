export const getQueryString = (obj: Record<string, unknown>) => {
  const queryParams = new URLSearchParams();

  for (const [key, value] of Object.entries(obj)) {
    queryParams.append(key, String(value));
  }

  return queryParams.toString();
};
