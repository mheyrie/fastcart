import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "@/context/AppContext";

const outfit = Outfit({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "FastCart - Buy Products Online",
  description: "FastCart is a fast and easy way to buy products online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased text-gray-700`}>
        <Toaster />

        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
