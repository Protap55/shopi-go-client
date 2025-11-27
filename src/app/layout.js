// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import AuthProvider from "@/Context/AuthProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Shopi Go",
//   description: "Your Gadget Shop",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <AuthProvider>
//           <nav className="max-w-7xl mx-auto">
//             <Navbar></Navbar>
//           </nav>
//           <main className="max-w-7xl mx-auto min-h-screen">{children}</main>
//           <footer className="max-w-7xl mx-auto">
//             <Footer></Footer>
//           </footer>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/Context/AuthProvider";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shopi Go",
  description: "Your Gadget Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <nav className="max-w-7xl mx-auto">
            <Navbar />
          </nav>

          <main className="max-w-7xl mx-auto min-h-screen">{children}</main>

          <footer className="max-w-7xl mx-auto">
            <Footer />
          </footer>
          <ToastContainer />
          <Toaster position="top-center" />
        </AuthProvider>
      </body>
    </html>
  );
}
