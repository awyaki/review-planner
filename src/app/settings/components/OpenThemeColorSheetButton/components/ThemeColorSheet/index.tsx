"use client";
import { useContext } from "react";
import { CheckableThemeColorCircle } from "../CheckableThemeColorCircle";
import { Sheet } from "@/components";
import { themeNames, themes } from "@/lib/colors";
import { ThemeColorContext } from "@/app/providers";

type Props = {
  onClose: () => void;
};

const ThemeColorSheet: React.FC<Props> = ({ onClose }) => {
  const { themeName, changeTheme } = useContext(ThemeColorContext);
  return (
    <Sheet onClose={onClose}>
      <div className="px-5 pb-5">
        <h2 className="mb-5 text-lg">テーマカラー</h2>
        <ul className="flex p-3 bg-gray rounded-md">
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
                <button type="button" onClick={() => changeTheme(_themeName)}>
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
      </div>
    </Sheet>
  );
};

export { ThemeColorSheet };
