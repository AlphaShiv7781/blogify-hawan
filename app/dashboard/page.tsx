"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUser } from "@/lib/api";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {  // Only run on client-side
      const getUserData = async () => {
        try {
          const userData = await fetchUser();  // Fetch user data
          setUser(userData);  // Set user data in state
        } catch (error) {
          console.error("Authentication failed", error);
          router.push("/auth/signin");  // Redirect on authentication failure
        } finally {
          setLoading(false);  // Set loading to false after fetching data
        }
      };
  
      getUserData();  // Call the function to fetch data
    }
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome, {user?.name || user?.email}!</h1>
      <p>Your Email: {user?.email}</p>
    </div>
  );
};

export default Dashboard;
