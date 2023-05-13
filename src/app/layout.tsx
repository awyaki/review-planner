"use client";
import "./globals.css";
import { ThemeColorContextProvider } from "../providers";

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeColorContextProvider>{children}</ThemeColorContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
