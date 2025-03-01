"use client";
import { fetchUser } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const dummyBlogs = [
    { id: 1, author: 'Alice', content: 'Exploring the beauty of minimalistic design in web development.' },
    { id: 2, author: 'Bob', content: 'How to boost your productivity with simple morning routines.' },
    { id: 3, author: 'Charlie', content: 'The future of AI: Opportunities and Challenges ahead.' },
    { id: 4, author: 'Diana', content: 'Top 10 books every software developer should read.' },
    { id: 5, author: 'Eve', content: 'Understanding JavaScript closures with real-world examples.' },
  ];

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

    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-oklch(0.282 0.091 267.935) shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Blogify</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Profile</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6  text-white">Blogs</h2>

        {/* Display Blogs Section */}
        <div className="max-w-4xl mx-auto grid gap-6">
          {dummyBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">{blog.author}</h3>
              <p className="text-gray-800 whitespace-pre-wrap">{blog.content}</p>
              <p className="text-sm text-gray-400 text-right mt-4">
                Blog ID: {blog.id}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div> 
  );
};

export default Dashboard;


{/* <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome, {user?.name || user?.email}!</h1>
      <p>Your Email: {user?.email}</p>
      
    </div> */}




// pages/dashboard.js


// export default function Dashboard() {
//   // Dummy blog data (blogs from different users)
//   const dummyBlogs = [
//     { id: 1, author: 'Alice', content: 'Exploring the beauty of minimalistic design in web development.' },
//     { id: 2, author: 'Bob', content: 'How to boost your productivity with simple morning routines.' },
//     { id: 3, author: 'Charlie', content: 'The future of AI: Opportunities and Challenges ahead.' },
//     { id: 4, author: 'Diana', content: 'Top 10 books every software developer should read.' },
//     { id: 5, author: 'Eve', content: 'Understanding JavaScript closures with real-world examples.' },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Navigation Bar */}
//       <nav className="bg-oklch(0.282 0.091 267.935) shadow-md p-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-white">Blogify</h1>
//         <div className="space-x-4">
//           <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Profile</button>
//           <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="p-8">
//         <h2 className="text-3xl font-bold text-center mb-6  text-white">Blogs</h2>

//         {/* Display Blogs Section */}
//         <div className="max-w-4xl mx-auto grid gap-6">
//           {dummyBlogs.map((blog) => (
//             <div
//               key={blog.id}
//               className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow"
//             >
//               <h3 className="text-lg font-semibold text-blue-600 mb-2">{blog.author}</h3>
//               <p className="text-gray-800 whitespace-pre-wrap">{blog.content}</p>
//               <p className="text-sm text-gray-400 text-right mt-4">
//                 Blog ID: {blog.id}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




