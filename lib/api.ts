const API_URL = process.env.NEXT_PUBLIC_API_URL;


//LOGIN
export async function loginUser(email: string, password: string) {
  const response = await fetch(`${API_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest"  // Add this header
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  // Add this cookie check
  const cookies = response.headers.get('set-cookie');
  console.log('Received cookies:', cookies);
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

const defaultFetchOptions: RequestInit = {
  credentials: 'include', // Send cookies with every request
  headers: {
    'Content-Type': 'application/json',
  },
};

// Update fetchUser to use custom fetch
export async function fetchUser() {
  try {
    const response = await fetch(`${API_URL}user`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 401) {
      throw new Error("Unauthenticated");
    }

    if (!response.ok) {
      throw new Error("Server error");
    }

    return await response.json();
  } catch (error) {
    throw new Error("Authentication failed");
  }
}
