// import React from "react";

const BASE_URL = "http://192.168.15.223:5000";

async function authCheck({ email }) {
  try {
    const response = await fetch(BASE_URL + "/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    if (!response.ok) {
      throw new Error("Failed to authenticate");
    }

    const data = await response.json();
    console.log(data);
    return { statusCode: data.statusCode, username: data.username };
  } catch (error) {
    console.error("Error during authentication:", error);
    // You might want to handle the error here or re-throw it for the calling code to handle
    throw error;
  }
}

export { authCheck };
