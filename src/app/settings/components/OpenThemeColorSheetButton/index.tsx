import { useContext } from "react";
import { ThemeColorCircle } from "../../components";
import { ThemeColorContext } from "@/app/providers";
import { useThemeColorSheet } from "../../hooks";
export const OpenThemeColorSheetButton: React.FC = () => {
  const { theme } = useContext(ThemeColorContext);
  const [renderThemeColorSheet, handleOpenThemeColorSheet] =
    useThemeColorSheet();
  return (
    <>
      {renderThemeColorSheet()}
      <button
        type="button"
        className="flex items-center justify-between w-full p-4"
        onClick={handleOpenThemeColorSheet}
      >
        <span>テーマカラー</span>
        <span>
          <ThemeColorCircle
            color={theme.primary.code}
            background={theme["bg-primary"].code}
          />
        </span>
      </button>
    </>
  );
};
