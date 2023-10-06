type Props = {
  background: string;
  color: string;
};

const ThemeColorCircle: React.FC<Props> = ({ color, background }) => {
  const size = 36;
  const center = {
    x: size / 2,
    y: size / 2,
  };

  const r = size / 2;

  return (
    <svg width={size} height={size}>
      <circle fill={background} cx={center.x} cy={center.y} r={r} />
      <circle fill={color} cx={center.x} cy={center.y} r={r - 3} />
    </svg>
  );
};

export { ThemeColorCircle };
