import "./globals.css";
import {
  ThemeColorContextProvider,
  BaseContextProvider,
  AuthProvider,
} from "./providers";

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <AuthProvider>
          <ThemeColorContextProvider>
            <BaseContextProvider>{children}</BaseContextProvider>
          </ThemeColorContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
