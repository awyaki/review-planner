"use client";
import "./globals.css";
import { ThemeColorContextProvider, BaseContextProvider } from "../providers";

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <ThemeColorContextProvider>
          <BaseContextProvider>{children}</BaseContextProvider>
        </ThemeColorContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
