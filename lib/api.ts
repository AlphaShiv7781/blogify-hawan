const API_URL = process.env.NEXT_PUBLIC_API_URL;


//LOGIN
export async function loginUser(email: string, password: string) {
    const response = await fetch(`${API_URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Important: Sends cookies (JWT token) to backend
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error("Login failed");
    }
  
    return await response.json();
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
    const response = await fetch(`${API_URL}user/`, {
      method: "GET",
      credentials: "include", // Include cookies for authentication
    });
  
    if (!response.ok) {
      return null; // Not authenticated
    }
  
    return await response.json();
  }
