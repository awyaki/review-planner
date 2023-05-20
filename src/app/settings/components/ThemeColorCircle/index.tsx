import { type Colors, colors } from "@/lib/colors";

type Props = {
  background: Colors;
  theme: Colors;
};

const ThemeColorCircle: React.FC<Props> = ({ background, theme }) => {
  const size = 36;
  const center = {
    x: size / 2,
    y: size / 2,
  };

  const r = size / 2;

  return (
    <svg width={size} height={size}>
      <circle
        fill={colors[background].code}
        cx={center.x}
        cy={center.y}
        r={r}
      />
      <circle fill={colors[theme].code} cx={center.x} cy={center.y} r={r - 3} />
    </svg>
  );
};

export { ThemeColorCircle };
