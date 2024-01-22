import { API_URL } from "@/app/constants";

export async function getAllUsersApi() {
  try {
    const response = await fetch(`${API_URL}/api/users`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonResponse = await response.json();
    if (jsonResponse.status === 200 && jsonResponse.data) {
      return jsonResponse.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function deleteUserByUsername(username) {
  try {
    const response = await fetch(`${API_URL}/api/users`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const jsonResponse = await response.json();
    if (jsonResponse.status === 200) {
    } else {
      console.error("Error al eliminar usuario:", jsonResponse.msg);
    }
    return jsonResponse;
  } catch (error) {
    console.error("Error al realizar la petición DELETE:", error);
    return null;
  }
}
