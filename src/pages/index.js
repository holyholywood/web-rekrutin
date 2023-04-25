import Image from "next/image";
import { Inter } from "next/font/google";
import Auth from "@/apps/services/authentication";
const inter = Inter({ subsets: ["latin"] });

const Login = async () => {
  const data = {
    // name: "admin",
    email: "admin@mail.com",
    password: "admin123",
    // birth_date: new Date().toISOString().slice(0, 19).replace("T", " "),
    // address: "Jalan 123",
    // phone: "0812344444",
    // education_level: "bachelor",
    // majors: "Ekonomi Syariah",
  };
  const result = await Auth.login(data.email, data.password);
  console.log(result);
};
const Logout = async () => {
  const result = await Auth.logout();
  console.log(result);
};
export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center gap-4 justify-center p-24 ${inter.className}`}
    >
      <button
        onClick={Login}
        className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-600 focus:outline outline-blue-200"
      >
        Login
      </button>
      <button
        onClick={Logout}
        className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600 focus:outline outline-blue-200"
      >
        Logout
      </button>
    </main>
  );
}
