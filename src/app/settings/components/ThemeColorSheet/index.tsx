import { useContext } from "react";
import { CheckableThemeColorCircle } from "../CheckableThemeColorCircle";
import { Sheet } from "@/components";
import { themes } from "@/lib/colors";
import { ThemeColorContext } from "@/providers";

type Props = {
  onClose: () => void;
};

const ThemeColorSheet: React.FC<Props> = ({ onClose }) => {
  const { theme: selectedTheme, setTheme: setSelectedTheme } =
    useContext(ThemeColorContext);
  return (
    <Sheet onClose={onClose}>
      <h2 className="mb-5 text-lg">テーマカラー</h2>
      <ul className="flex p-3 mb-5 bg-gray rounded-md">
        {themes.map((theme, i) => {
          const isChecked =
            theme.background === selectedTheme.background &&
            theme.primary === selectedTheme.primary;

          return (
            <li
              key={`${theme.primary}${theme.background}`}
              className={
                i !== themes.length - 1
                  ? `mr-3 flex items-center`
                  : "flex items-center"
              }
            >
              <button onClick={() => setSelectedTheme(theme)}>
                <CheckableThemeColorCircle
                  isChecked={isChecked}
                  background={theme.background}
                  theme={theme.primary}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </Sheet>
  );
};

export { ThemeColorSheet };
