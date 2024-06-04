import { Inter } from "next/font/google";
import "./globals.css";



import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NextProvider from '../components/NextProvider'
import { PrismaClient } from "@prisma/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "shareX",
  description: "Share thoughts",
};
const primsa=new PrismaClient()


export default  async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <section className="w-full">
      <NextProvider>
      <Navbar />
        <section className="overflow-x-hidden">
      
          {children}
        
        </section>
        <Footer/>
      </NextProvider>
      </section>
      </body>
    </html>
  );
}
