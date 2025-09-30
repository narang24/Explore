// import { Urbanist } from "next/font/google";
// import "./globals.css";
// import { AuthProvider } from "../contexts/AuthContext";

// const urbanist = Urbanist({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-urbanist",
// });

// export const metadata = {
//   title: "Xplore",
//   description: "A Web App",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${urbanist.className} antialiased`}>
//         <AuthProvider>
//           {children}
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }


import { Urbanist } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../contexts/AuthContext";
import { ModalProvider } from "../contexts/ModalContext"; // ✅ add Modal context
import ComingSoonModal from "../components/ComingSoonModal"; // ✅ add fallback modal

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Xplore",
  description: "A Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased`}>
        <AuthProvider>
          {/* Wrap the whole app with ModalProvider */}
          <ModalProvider>
            {children}
            {/* Global fallback modal */}
            <ComingSoonModal />
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
