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

export async function getUserByUsername(username) {
  try {
    const response = await fetch(`${API_URL}/api/users?username=${username}`);
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
        headers: {
          "Access-Control-Allow-Headers":
            "content-type, Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT, DELETE",
          "Content-Type": "application/json",
        },
      },
      body: JSON.stringify({ username }),
    });

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

export async function updateUserByUsername(formData) {
  try {
    const response = await fetch(`${API_URL}/api/users`, {
      method: "PUT",
      headers: {
        headers: {
          "Access-Control-Allow-Headers":
            "content-type, Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT, DELETE",
          "Content-Type": "application/json",
        },
      },
      body: formData,
    });

    const jsonResponse = await response.json();
    if (jsonResponse.status === 200) {
    } else {
      console.error("Error al actualizar usuario:", jsonResponse.msg);
    }
    return jsonResponse;
  } catch (error) {
    console.error("Error al realizar la petición PUT:", error);
    return null;
  }
}

export async function createUserApi(data) {
  try {
    const response = await fetch(`${API_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al realizar la petición POST:", error);
    return null;
  }
}
