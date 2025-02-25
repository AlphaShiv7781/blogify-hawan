const API_URL = process.env.NEXT_PUBLIC_API_URL;


//LOGIN
export async function loginUser(email: string, password: string) {
  const response = await fetch(`${API_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // Include cookies
    body: JSON.stringify({ email, password }),
  });

  console.log("Login response status:", response.status);
  console.log("Response Headers:", response.headers);

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  console.log("JWT Token Received:", data);
  return data;
}


//REGISTER

export async function registerUser(name: string, email: string, password: string) {
    const response = await fetch(`${API_URL}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
  
    if (!response.ok) {
      throw new Error("Signup failed");
    }
  
    return await response.json();
  }

// Fetch User

export async function fetchUser() {
  const response = await fetch(`${API_URL}user`, {
    method: "GET",
    credentials: "include", 
  });

  if (!response.ok) {
    throw new Error("Unauthenticated");
  }

  return await response.json();
}
