import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "@/context/AppContext";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${outfit.className} antialiased text-gray-700 dark:bg-black/80 dark:text-gray-200`}
          cz-shortcut-listen="true"
        >
          <Toaster />

          <AppContextProvider>{children}</AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
