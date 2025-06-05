import localFont from "next/font/local";
import "./globals.css";
 

export const metadata = {
  title: "Coradir IA",
  description: "Coradir IA",
  icons: {
    icon: './favicon.ico'
  },
  robots: {
    index: false,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-background font-montserrat scroll-smooth">
        {children}
      </body>
    </html>
  );
}
