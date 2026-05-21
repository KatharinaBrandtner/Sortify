// const API_URL = process.env.EXPO_PUBLIC_API_URL;
const API_URL = "http://127.0.0.1:8000";

export async function classifyTask(task: string) {
  const url = `${API_URL}/classify`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: task }),
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.log('classifyTask error', error);
    throw error;
  }
}