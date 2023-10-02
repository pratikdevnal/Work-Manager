import CustomNavbar from "@/components/CustomNavbar";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import UserContext from "@/context/userContext";
import UserProvider from "@/context/userProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ToastContainer />
          <CustomNavbar />
          <div>{children}</div>
        </UserProvider>
      </body>
    </html>
  );
}
