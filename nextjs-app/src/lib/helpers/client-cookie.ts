export const getCookieValue = (name: string): string | null => {
  if (typeof window !== "undefined") {
    const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith(name + "="));
    return match ? match.split("=")[1] : null;
  }
  return null;
};