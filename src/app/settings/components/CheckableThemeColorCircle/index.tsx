import { type Colors, colors } from "@/lib/colors";
import { motion } from "framer-motion";

type Props = {
  isChecked: boolean;
  background: Colors;
  theme: Colors;
};

const CheckableThemeColorCircle: React.FC<Props> = ({
  isChecked,
  background,
  theme,
}) => {
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
      <motion.path
        fill="none"
        strokeWidth={2}
        stroke={colors[background].code}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isChecked ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        d="M 9,19 l 7 6 l 10 -14"
      />
    </svg>
  );
};

export { CheckableThemeColorCircle };
