export function tryParse(data: string | null) {
  try {
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error while parsing JSON data:", error);
    return null;
  }
}
