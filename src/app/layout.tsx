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
        <ThemeColorContextProvider>
          <BaseContextProvider>
            <AuthProvider>{children}</AuthProvider>
          </BaseContextProvider>
        </ThemeColorContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
