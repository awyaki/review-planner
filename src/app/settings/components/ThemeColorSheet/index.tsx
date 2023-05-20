import { useContext } from "react";
import { CheckableThemeColorCircle } from "../CheckableThemeColorCircle";
import { Sheet } from "@/components";
import { themeNames, themes } from "@/lib/colors";
import { ThemeColorContext } from "@/providers";

type Props = {
  onClose: () => void;
};

const ThemeColorSheet: React.FC<Props> = ({ onClose }) => {
  const { theme, themeName, changeTheme } = useContext(ThemeColorContext);
  return (
    <Sheet onClose={onClose}>
      <h2 className="mb-5 text-lg">テーマカラー</h2>
      <ul className="flex p-3 mb-5 bg-gray rounded-md">
        {themeNames.map((_themeName, i) => {
          const isChecked = themeName === _themeName;
          return (
            <li
              key={_themeName}
              className={
                i !== themeNames.length - 1
                  ? `mr-3 flex items-center`
                  : "flex items-center"
              }
            >
              <button onClick={() => changeTheme(_themeName)}>
                <CheckableThemeColorCircle
                  isChecked={isChecked}
                  background={themes[_themeName]["bg-primary"].code}
                  color={themes[_themeName]["primary"].code}
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
